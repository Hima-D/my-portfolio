"use client";
import React from 'react';
import Header from '@/components/header';

const About = () => {
  return (
    <>
      <Header />
      <section
        id="about"
        className="relative w-full min-h-screen bg-white text-gray-900 flex flex-col items-center py-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-200 to-blue-300 opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-16 bg-white text-gray-800 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            About Me
          </h2>

          <div className="space-y-8">
            <p className="text-xl leading-relaxed opacity-80">
              I’m a machine learning engineer by day and a debugger of my own life choices by night. Right now, I’m at <span className="font-semibold">Coinwave</span>, using neural networks to wrestle financial data into submission and (hopefully) predict the future. Spoiler alert: the future looks bright but still needs error handling.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              My love affair with tech began with a "Hello, World!" and has since spiraled into an obsession with deep learning, natural language processing, and reinforcement learning. Studying Computer Science at <span className="font-semibold">IIT Madras</span> was the ultimate nerd dream, though I still wonder how many more chai breaks I could’ve fit in during those late-night coding sessions.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              These days, when I’m not drowning in Python scripts, I’m usually building AI tools for education. If I can teach an AI to teach you, I’m basically outsourcing my job to robots—next-level delegation, am I right? I’m also deep into experimenting with the intersection of finance and machine learning, where every dataset feels like a new puzzle (and sometimes, a prank).
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Fun fact: I have an impeccable track record of starting side projects that I never finish. But hey, unfinished projects are just future startups waiting to happen. When I’m not debugging code or obsessively refactoring it, you’ll find me Googling basic financial terms because, apparently, knowing AI doesn’t mean you understand what an "ETF" is. But it’s all part of the journey—because every techie needs a few "wtf" moments to keep life interesting.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              In a nutshell, I’m just a caffeine-fueled dreamer chasing big ideas, building smarter systems, and constantly wondering why Git refuses to cooperate at 3 AM. Let’s connect—I promise I’ll only talk about AI 90% of the time. The other 10%? Probably jokes about stack overflows (both literal and figurative).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
