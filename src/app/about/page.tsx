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
              Hey, I’m Himanshu! By day, I’m a machine learning engineer, and by night, I’m trying to unlock the mysteries of the universe—sometimes with code, sometimes with a cup of chai, and always with a healthy dose of caffeine. When I’m not training models to predict financial trends or spotting patterns in massive datasets, you can find me obsessing over things like astrophysics (yes, black holes are just as mind-boggling as debugging recursive functions), and contemplating how finance and technology are reshaping the world around us.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              I’m currently at <span className="font-semibold">Coinwave</span>, working on building predictive systems that can help individuals take control of their financial future. Think of it as giving people a crystal ball for managing their finances—without the inaccuracies. We’re still in the early stages, but if everything goes according to plan, we’ll soon have a unified system that can analyze your financial behavior and help you reach your future goals. No promises that the stock market will follow my predictions, though!
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              How did I get here? Well, it all started with a simple "Hello, World!" and a fascination with how the simplest lines of code can create complex systems. Fast forward a few years, and now I’m at the intersection of computer science and finance, two fields that are literally changing the world. I’m obsessed with how AI can help solve real-world problems, and not just in business, but in global geopolitics as well.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Tech, and more specifically AI, is rapidly becoming the engine that drives not just businesses, but entire economies. Companies today aren’t just competing on physical assets—they’re competing on data, and the ability to analyze it. This is exactly why the world is turning to machine learning to make sense of everything from financial markets to personalized education. But it’s bigger than just business. It’s reshaping societies, and maybe even power dynamics on a global scale.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              And here’s where geopolitics gets spicy: The U.S., China, and Europe are now vying for control over the next frontier—data. While AI and finance are shaping global economies, countries are positioning themselves as the next superpowers, not based on physical military strength, but on their dominance in tech infrastructure. China has made AI and 5G its top priorities, while the U.S. is leveraging its massive tech ecosystem (looking at you, Silicon Valley) to lead the charge in innovation. You could say that the battle for tech supremacy is the new Cold War. But instead of missiles, we're stockpiling algorithms.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Why finance and tech? If I’m honest, the moment I realized how finance and technology intertwine, I had an epiphany. In many ways, machine learning is the ultimate tool to solve the world’s most complex financial challenges. From stock market predictions to credit scoring, the ability to accurately forecast financial movements will shape industries and even nations. The most successful people today aren’t just data scientists or financiers—they’re hybrids, combining a deep understanding of algorithms with a sharp awareness of economic trends. I want to be one of those hybrids.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              On the flip side, AI-powered finance isn’t just about building wealth. It’s about improving financial literacy, providing equitable access to financial resources, and ensuring people have the tools to make better financial decisions. Imagine a world where personalized financial tools level the playing field, allowing anyone—regardless of background—to manage their finances better. That’s the world I’m working to help create. Now if only I could teach my AI to handle my student loan payments!
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              My side hustle? The cosmos and finance. When I’m not buried in code or grappling with algorithms, you can catch me reading about the latest discoveries in astrophysics. Yeah, it’s a bit of a jump, but stick with me—there’s something about the universe that fascinates me. The idea that there are patterns to be discovered, whether it's in the movement of galaxies or in financial markets, is what excites me.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Maybe it’s because the laws of physics—just like the rules of finance—aren’t always straightforward. Sometimes, they defy expectations, forcing you to think outside the box. And hey, if black holes can exist in space, why can’t there be a few financial black holes waiting to swallow up any unsuspecting investor? But more importantly, the universe—just like the global economy—works in mysterious ways. The more we learn about astrophysics, the more we realize how little we actually know. The same goes for global financial systems: new variables, new disruptions, new opportunities are emerging constantly.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Looking ahead, I’m obsessed with the idea that AI, finance, and geopolitics are all intertwined. Every major decision made by governments, businesses, or tech giants will be influenced by these three areas. They’re the engines driving the future of global economies. It’s no longer about whether data will lead the way—it already is. Whether I’m analyzing financial data, working on machine learning models, or pondering what the future holds for our world leaders, I feel like we’re on the brink of something huge. 
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              So, the question isn’t "where do I fit into this?" It’s "how can I help build it?" Whether that’s through AI, finance, or even astrophysical musings, I’m all in. I’m a techie, a dreamer, and a student of the universe—trying to decode the cosmos, one algorithm at a time. If you're into that kind of thing, let’s connect. I promise I’ll talk AI 90% of the time and ponder whether Schrödinger's cat would be an Excel user or a Python coder the other 10%.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
