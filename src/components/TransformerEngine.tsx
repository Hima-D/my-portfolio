'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as qna from '@tensorflow-models/qna';

type ModelType = 'USE' | 'QNA';

interface Prediction {
  text: string;
  score: number;
}

const TransformerEngine: React.FC = () => {
  const [modelType, setModelType] = useState<ModelType>('USE');
  const [temperature, setTemperature] = useState(1.0);
  const [inputText, setInputText] = useState("I build intelligent systems that bridge data, design, and decision-making — turning complexity into clarity through AI.");
  const [probabilities, setProbabilities] = useState<number[]>([]);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [useModel, setUseModel] = useState<use.UniversalSentenceEncoder | null>(null);
  const [qnaModel, setQnaModel] = useState<qna.QuestionAndAnswer | null>(null);
  const [maskedIndex, setMaskedIndex] = useState<number | null>(null);

  const words = useMemo(() => inputText.split(/\s+/), [inputText]);

  useEffect(() => {
    async function loadModels() {
      try {
        await tf.ready();
        const [uModel, qModel] = await Promise.all([
          use.load(),
          qna.load()
        ]);
        setUseModel(uModel);
        setQnaModel(qModel);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading models:', error);
        setIsLoading(false);
      }
    }
    loadModels();
  }, []);

  const runInference = useCallback(async () => {
    if (modelType === 'USE' && useModel) {
      const embeddings = await useModel.embed(words);
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
    } else if (modelType === 'QNA' && qnaModel && maskedIndex !== null) {
      // Simulate masked token prediction using QnA context
      const context = words.join(' ');
      const question = `What is the word at position ${maskedIndex + 1}?`;
      const answers = await qnaModel.findAnswers(question, context);
      setPredictions(answers.map(a => ({ text: a.text, score: a.score })));
    }
  }, [modelType, useModel, qnaModel, words, temperature, maskedIndex]);

  useEffect(() => {
    runInference();
  }, [runInference]);

  const handleWordClick = (index: number) => {
    setMaskedIndex(index === maskedIndex ? null : index);
    if (modelType !== 'QNA') setModelType('QNA');
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-indigo-50 rounded-2xl border-2 border-dashed border-indigo-200">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
        <p className="text-indigo-900 font-medium">Loading Transformer Models (USE & MobileBERT)...</p>
        <p className="text-xs text-indigo-400 mt-2">This may take a few seconds depending on your connection.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-indigo-900 p-6 text-white">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold">Transformer Engine v2.0</h3>
            <p className="text-indigo-300 text-sm">Real-time Browser-based Inference</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setModelType('USE')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${modelType === 'USE' ? 'bg-white text-indigo-900' : 'bg-indigo-800 text-indigo-200 hover:bg-indigo-700'}`}
            >
              Semantic Analysis (USE)
            </button>
            <button 
              onClick={() => setModelType('QNA')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${modelType === 'QNA' ? 'bg-white text-indigo-900' : 'bg-indigo-800 text-indigo-200 hover:bg-indigo-700'}`}
            >
              Token Prediction (BERT)
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Input Profile Text</label>
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition outline-none"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Temperature: {temperature.toFixed(2)}</label>
              <span className="text-[10px] text-indigo-500 font-mono bg-indigo-50 px-2 py-1 rounded">Softmax Scaling</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="3.0"
              step="0.1"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
          <div className="flex items-end">
            <p className="text-xs text-gray-500 italic">
              {modelType === 'USE' 
                ? "Currently analyzing semantic importance across the embedding space." 
                : "Click a word to mask it and predict alternatives using MobileBERT."}
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 min-h-[150px]">
          <div className="flex flex-wrap gap-2">
            {words.map((word, i) => {
              const prob = probabilities[i] || 0;
              const maxProb = Math.max(...probabilities, 0.0001);
              const intensity = prob / maxProb;
              const isMasked = maskedIndex === i;

              return (
                <span
                  key={i}
                  onClick={() => handleWordClick(i)}
                  className={`px-2 py-1 rounded cursor-pointer transition-all duration-300 relative group ${isMasked ? 'bg-indigo-600 text-white ring-4 ring-indigo-200' : ''}`}
                  style={!isMasked && modelType === 'USE' ? { 
                    backgroundColor: `rgba(79, 70, 229, ${Math.min(intensity * 0.8, 0.8)})`,
                    color: intensity > 0.5 ? 'white' : 'inherit'
                  } : {}}
                >
                  {isMasked ? '[MASK]' : word}
                  {!isMasked && (
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      P: {prob.toFixed(4)}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        </div>

        {modelType === 'QNA' && maskedIndex !== null && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Top Predictions for Masked Token
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {predictions.length > 0 ? predictions.slice(0, 3).map((pred, i) => (
                <div key={i} className="p-3 bg-white border border-indigo-100 rounded-lg shadow-sm flex justify-between items-center">
                  <span className="font-mono text-indigo-600 font-bold">{pred.text}</span>
                  <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-1 rounded">{(pred.score * 100).toFixed(1)}%</span>
                </div>
              )) : (
                <div className="col-span-3 p-4 text-center text-gray-400 text-sm italic bg-white border border-dashed border-gray-200 rounded-lg">
                  Analyzing context... try a different word or temperature.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransformerEngine;
