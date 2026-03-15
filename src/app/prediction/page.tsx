'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';

interface Prediction {
  text: string;
  score: number;
}

export default function PredictionPage() {
  const [text, setText] = useState("I build intelligent systems that bridge data, design, and decision-making — turning complexity into clarity through AI.");
  const [maskedIndex, setMaskedIndex] = useState<number | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [model, setModel] = useState<qna.QuestionAndAnswer | null>(null);

  const words = useMemo(() => text.split(/\s+/), [text]);

  useEffect(() => {
    async function loadModel() {
      try {
        await tf.ready();
        const loadedModel = await qna.load();
        setModel(loadedModel);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading TF.js model:', error);
        setIsLoading(false);
      }
    }
    loadModel();
  }, []);

  const runInference = useCallback(async () => {
    if (!model || maskedIndex === null) return;
    const currentModel = model;
    
    try {
      const context = words.join(' ');
      const question = `What is the word at position ${maskedIndex + 1}?`;
      const answers = await currentModel.findAnswers(question, context);
      setPredictions(answers.map(a => ({ text: a.text, score: a.score })));
    } catch (error) {
      console.error('Error calculating predictions:', error);
    }
  }, [model, words, maskedIndex]);

  useEffect(() => {
    runInference();
  }, [runInference]);

  const handleWordClick = (index: number) => {
    setMaskedIndex(index === maskedIndex ? null : index);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mb-4"></div>
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">Loading MobileBERT (QnA)...</p>
      </div>
    );
  }

  return (
    <div className="space-y-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tighter text-black mb-8">Token Prediction</h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Mask a word and use MobileBERT to predict alternative tokens based on context. This tool demonstrates the model's ability to understand bidirectional context.
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

        <div className="pt-12 border-t border-gray-100">
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {words.map((word, i) => {
              const isMasked = maskedIndex === i;
              return (
                <span
                  key={i}
                  onClick={() => handleWordClick(i)}
                  className={`px-2 py-1 rounded cursor-pointer transition-all duration-300 relative group ${isMasked ? 'bg-black text-white ring-4 ring-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  {isMasked ? '[MASK]' : word}
                </span>
              );
            })}
          </div>
        </div>

        <div className="space-y-8 pt-12 border-t border-gray-100">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Predictions</h2>
          <div className="grid grid-cols-1 gap-4">
            {maskedIndex === null ? (
              <p className="text-sm text-gray-400 italic">Click a word to mask it and see predictions.</p>
            ) : predictions.length > 0 ? (
              predictions.slice(0, 5).map((pred, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                  <span className="font-mono text-black font-bold">{pred.text}</span>
                  <span className="text-[10px] font-mono text-gray-400">{(pred.score * 100).toFixed(1)}%</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic">Analyzing context...</p>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technical Insight</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
          MobileBERT is a compact version of BERT that runs efficiently in the browser. It uses bidirectional attention to understand the context surrounding the masked token and predicts the most likely candidates.
        </p>
      </section>
    </div>
  );
}
