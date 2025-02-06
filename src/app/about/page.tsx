"use client";
import React from 'react';
import Header from '@/components/header';

const About = () => {
  return (
    <>
      <Header />
      <section
        id="about"
        className="relative w-full min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center py-16"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-8 py-16 bg-white text-gray-800 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            About Me
          </h2>

          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              Hello! I'm Himanshu. I’m deeply passionate about how technology—especially AI and machine learning—can solve real-world problems. My work is currently centered around the intersection of finance and technology, where we aim to create solutions that help people make smarter financial decisions. It's about empowering individuals with the tools to shape their financial future with confidence.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              At <span className="font-semibold">Coinwave</span>, I’m leading efforts to develop predictive systems that provide a clearer picture of individual financial behaviors. Our goal is to create a system that helps people track, manage, and plan their finances more effectively. It’s a complex challenge, but I’m excited to be a part of it.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              My journey began with a fascination for coding. Over time, I realized that technology could be a powerful tool to solve pressing issues. However, it wasn’t until I explored finance that I saw how technology could truly transform this space. This is not just about algorithms, but about building systems that empower individuals and businesses to thrive in a rapidly changing world.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              The challenge is clear: technology is evolving faster than many can keep up, and that includes the financial sector. Today, businesses don't only compete on traditional fronts—they compete on data. The ability to analyze data and act on it in real-time is critical. My focus is on bridging that gap by creating predictive models that help businesses and individuals make more informed decisions.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              On a broader scale, the world is changing geopolitically in response to technological advancements. Countries are competing to dominate the data-driven future, which has massive implications not just for businesses, but for global power dynamics. From AI to data privacy, the next few years will shape the future of global influence. I find this shift to be deeply intriguing and am working to understand it better.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              This is where AI, finance, and geopolitics intersect for me. I believe AI can help level the playing field, not just in business but in society as a whole. By applying machine learning to financial challenges, we have the potential to improve financial literacy, democratize access to resources, and build systems that allow everyone to make better financial decisions. My ultimate vision is a future where anyone, regardless of background, can make decisions with the same confidence as an expert.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              Beyond technology, I’m fascinated by the cosmos. Astrophysics is a field that excites me—it’s all about exploring the vast, complex universe, which mirrors the complexity I find in financial markets. Whether I’m learning about new theories in physics or analyzing economic systems, I’m always looking for patterns—patterns that can apply both in the stars and the stock market.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              The common thread? Patterns. Both in the universe and in financial markets, there are systems and behaviors that, when understood, allow us to make predictions and take control. This journey of discovery—whether in astrophysics, finance, or AI—is what keeps me motivated to build something meaningful.
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              Looking ahead, I see AI and data as the backbone of future economic and geopolitical power. Every global decision—whether in business or politics—will be influenced by how these tools are leveraged. For me, this isn’t just a career; it’s about contributing to the future. How can we harness AI to not only predict trends but also change the way we interact with the world? How can we make sure technology, when applied to finance, benefits everyone, not just a select few?
            </p>

            <p className="text-xl leading-relaxed text-gray-700 opacity-80">
              So, I’m here to help build that future. If you’re excited about the possibilities of AI, finance, and technology—or if you just want to chat about the latest astrophysics discoveries—I’d love to connect. Let’s create something meaningful together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
