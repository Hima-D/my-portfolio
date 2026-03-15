'use client';

import React, { useState, useEffect, useMemo } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

export default function AnalyticsPage() {
  const [text, setText] = useState("I build intelligent systems that bridge data, design, and decision-making — turning complexity into clarity through AI.");
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
      try {
        const embeddings = await currentModel.embed(words);
        const embeddingsData = await embeddings.array() as number[][];
        
        const avgEmbedding = embeddingsData[0].map((_, i) => 
          embeddingsData.reduce((acc, curr) => acc + curr[i], 0) / embeddingsData.length
        );

        const scores = embeddingsData.map(emb => {
          const dotProduct = emb.reduce((acc, curr, i) => acc + curr * avgEmbedding[i], 0);
          const mag1 = Math.sqrt(emb.reduce((acc, curr) => acc + curr * curr, 0));
          const mag2 = Math.sqrt(avgEmbedding.reduce((acc, curr) => acc + curr * curr, 0));
          return dotProduct / (mag1 * mag2);
        });

        const expScores = scores.map(s => Math.exp(s / temperature));
        const sumExp = expScores.reduce((a, b) => a + b, 0);
        setProbabilities(expScores.map(s => s / sumExp));
        embeddings.dispose();
      } catch (error) {
        console.error('Error calculating probabilities:', error);
      }
    }

    calculateProbabilities();
  }, [model, words, temperature]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-4"></div>
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">Loading Universal Sentence Encoder...</p>
      </div>
    );
  }

  return (
    <div className="space-y-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tighter text-black mb-8">Word Analytics</h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Analyze the semantic importance of words using Transformer embeddings. This tool calculates the relative significance of each word within its context.
        </p>
      </section>

      <section className="space-y-12">
        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Input Text</label>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-0 bg-transparent border-b border-gray-100 text-xl font-bold tracking-tighter focus:border-black transition-colors outline-none resize-none"
            rows={2}
          />
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Temperature: {temperature.toFixed(2)}</label>
          <input
            type="range"
            min="0.1"
            max="3.0"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black"
          />
        </div>

        <div className="pt-12 border-t border-gray-100">
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {words.map((word, i) => {
              const prob = probabilities[i] || 0;
              const maxProb = Math.max(...probabilities, 0.0001);
              const intensity = prob / maxProb;
              return (
                <span
                  key={i}
                  className="px-1 py-0.5 rounded transition-all duration-300 relative group"
                  style={{ 
                    backgroundColor: `rgba(0, 0, 0, ${Math.min(intensity * 0.8, 0.8)})`,
                    color: intensity > 0.5 ? 'white' : 'inherit'
                  }}
                >
                  {word}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    P: {prob.toFixed(4)}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technical Insight</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
          The model generates a 512-dimensional embedding for each word. We then calculate the cosine similarity between each word and the average context vector to determine its relative importance.
        </p>
      </section>
    </div>
  );
}
