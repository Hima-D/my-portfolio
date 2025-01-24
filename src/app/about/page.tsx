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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-200 to-blue-300 opacity-70" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-16 bg-white text-gray-800 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            About Me
          </h2>

          <div className="space-y-8">
            <p className="text-xl leading-relaxed opacity-80">
              By day, I’m a machine learning engineer who teaches neural networks to predict the future, or at least predict if we’ll ever see an error-free deployment. By night, I’m debugging my life choices—turns out, even algorithms can’t help with existential crises. But hey, I’m at <span className="font-semibold">Coinwave</span>, where I’m trying to turn financial data into meaningful insights without crashing the stock market.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              My journey into tech started with a simple "Hello, World!" and now I’m trying to decode the universe with deep learning, natural language processing, and reinforcement learning. The only thing more complex than my algorithms? The late-night coding sessions at <span className="font-semibold">IIT Madras</span>—honestly, I think I could write a thesis on the quantum mechanics of chai breaks.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              When I’m not entrenched in Python scripts, I’m building AI tools to make education smarter. If I could teach AI to teach you, I’d have achieved full job outsourcing. But honestly, I might have accidentally created an AI that’s better at teaching than I am—should I be worried? Meanwhile, in my free time, I explore the wild frontier where finance meets machine learning, where every dataset feels like a complex puzzle with one piece always missing (thanks, correlation).
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Fun fact: I’m an expert at starting side projects that never get finished. But think about it—those unfinished projects? Future unicorn startups in disguise. And when I'm not grappling with recursive functions or refactoring a thousand lines of code, you can find me Googling basic financial terms, like "ETF," because apparently, knowing the backpropagation algorithm doesn’t prepare you for the stock market.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Oh, and I’ve got a secret love affair with astrophysics. The idea of unraveling the cosmos and understanding the laws of the universe is like the ultimate algorithm for life. Big thanks to my professors who turned this intellectual curiosity into a full-blown obsession. Who knew that black holes could be just as confusing as sorting algorithms, but with way more gravity (pun intended)?
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              So, in essence, I’m a caffeine-fueled dreamer, constantly pondering why my code works perfectly in dev but not in production (clearly a conspiracy). Let’s connect—I promise I’ll only talk about AI 90% of the time. The other 10%? Expect deep debates on whether Schrödinger's cat would prefer Python or C++.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
