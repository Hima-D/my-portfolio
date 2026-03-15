'use client';

import React, { useState, useEffect, useMemo } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';


interface WordProbabilityHighlightProps {
  text: string;
  className?: string;
}

const WordProbabilityHighlight: React.FC<WordProbabilityHighlightProps> = ({ text, className }) => {
  const [temperature, setTemperature] = useState(1.0);
  const [probabilities, setProbabilities] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [model, setModel] = useState<use.UniversalSentenceEncoder | null>(null);

  const words = useMemo(() => text.split(/\s+/), [text]);

  useEffect(() => {
    async function loadModel() {
      try {
        await tf.ready();
        const loadedModel = await use.load();
        setModel(loadedModel);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading TF.js model:', error);
        setIsLoading(false);
      }
    }
    loadModel();
  }, []);

  useEffect(() => {
    if (!model || words.length === 0) return;
    const currentModel = model;

    async function calculateProbabilities() {
      // In a real transformer, we'd get the next-token distribution.
      // Here we simulate it by using the Universal Sentence Encoder to get embeddings
      // and then calculating a "self-importance" score for each word relative to the context.
      
      try {
        const embeddings = await currentModel.embed(words);
        const embeddingsData = await embeddings.array() as number[][];
        
        // Calculate cosine similarity of each word to the average embedding (the "context")
        const avgEmbedding = embeddingsData[0].map((_, i) => 
          embeddingsData.reduce((acc, curr) => acc + curr[i], 0) / embeddingsData.length
        );

        const scores = embeddingsData.map(emb => {
          const dotProduct = emb.reduce((acc, curr, i) => acc + curr * avgEmbedding[i], 0);
          const mag1 = Math.sqrt(emb.reduce((acc, curr) => acc + curr * curr, 0));
          const mag2 = Math.sqrt(avgEmbedding.reduce((acc, curr) => acc + curr * curr, 0));
          return dotProduct / (mag1 * mag2);
        });

        // Apply Softmax with Temperature
        const expScores = scores.map(s => Math.exp(s / temperature));
        const sumExp = expScores.reduce((a, b) => a + b, 0);
        const probs = expScores.map(s => s / sumExp);

        setProbabilities(probs);
        embeddings.dispose();
      } catch (error) {
        console.error('Error calculating probabilities:', error);
      }
    }

    calculateProbabilities();
  }, [model, words, temperature]);

  const getHighlightColor = (prob: number) => {
    const maxProb = Math.max(...probabilities, 0.0001);
    const normalized = prob / maxProb;
    // Map probability to a shade of indigo/purple
    return `rgba(79, 70, 229, ${Math.min(normalized * 0.8, 0.8)})`;
  };

  if (isLoading) {
    return <div className="animate-pulse text-gray-400">Initializing Transformer Model...</div>;
  }

  return (
    <div className={`relative ${className}`}>
      <div className="mb-4 flex items-center gap-4 bg-white/50 p-3 rounded-lg backdrop-blur-sm border border-indigo-100">
        <label className="text-sm font-medium text-indigo-900 whitespace-nowrap">
          Temperature: {temperature.toFixed(1)}
        </label>
        <input
          type="range"
          min="0.1"
          max="2.0"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
        <span className="text-xs text-gray-500 italic">
          (Lower = sharper distribution, Higher = more uniform)
        </span>
      </div>
      
      <div className="leading-relaxed text-lg">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block px-1 rounded transition-colors duration-300 cursor-help"
            style={{ backgroundColor: getHighlightColor(probabilities[i] || 0) }}
            title={`P(word): ${(probabilities[i] || 0).toFixed(4)}`}
          >
            {word}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordProbabilityHighlight;
