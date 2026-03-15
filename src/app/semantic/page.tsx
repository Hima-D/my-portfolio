'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

interface SimilarityResult {
  text: string;
  score: number;
}

export default function SemanticPage() {
  const [query, setQuery] = useState("AI");
  const [text, setText] = useState("I build intelligent systems that bridge data, design, and decision-making — turning complexity into clarity through AI.");
  const [results, setResults] = useState<SimilarityResult[]>([]);
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

  const runInference = useCallback(async () => {
    if (!model || !query || words.length === 0) return;
    const currentModel = model;
    
    try {
      const embeddings = await currentModel.embed([query, ...words]);
      const embeddingsData = await embeddings.array() as number[][];
      
      const queryEmbedding = embeddingsData[0];
      const wordEmbeddings = embeddingsData.slice(1);

      const similarities = wordEmbeddings.map((emb, i) => {
        const dotProduct = emb.reduce((acc, curr, j) => acc + curr * queryEmbedding[j], 0);
        const mag1 = Math.sqrt(emb.reduce((acc, curr) => acc + curr * curr, 0));
        const mag2 = Math.sqrt(queryEmbedding.reduce((acc, curr) => acc + curr * curr, 0));
        return { text: words[i], score: dotProduct / (mag1 * mag2) };
      });

      setResults(similarities.sort((a, b) => b.score - a.score));
      embeddings.dispose();
    } catch (error) {
      console.error('Error calculating similarities:', error);
    }
  }, [model, words, query]);

  useEffect(() => {
    runInference();
  }, [runInference]);

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
        <h1 className="text-4xl font-bold tracking-tighter text-black mb-8">Semantic Search</h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Explore the semantic relationship between a query and your profile text using Transformer embeddings. This tool demonstrates the power of vector similarity.
        </p>
      </section>

      <section className="space-y-12">
        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Semantic Query</label>
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-0 bg-transparent border-b border-gray-100 text-xl font-bold tracking-tighter focus:border-black transition-colors outline-none"
            placeholder="Enter a concept (e.g., 'Intelligence', 'Design', 'Scale')"
          />
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Profile Text</label>
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-0 bg-transparent border-b border-gray-100 text-xl font-bold tracking-tighter focus:border-black transition-colors outline-none resize-none"
            rows={2}
          />
        </div>

        <div className="space-y-8 pt-12 border-t border-gray-100">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Semantic Ranking</h2>
          <div className="grid grid-cols-1 gap-4">
            {results.length > 0 ? (
              results.slice(0, 10).map((res, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                  <span className="font-mono text-black font-bold">{res.text}</span>
                  <span className="text-[10px] font-mono text-gray-400">{(res.score * 100).toFixed(1)}%</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic">Enter a query to see semantic rankings.</p>
            )}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technical Insight</h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
          The model maps both the query and the words into a high-dimensional vector space. We then calculate the cosine similarity between the query vector and each word vector to find the most semantically related terms.
        </p>
      </section>
    </div>
  );
}
