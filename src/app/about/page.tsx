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
              Hello! I'm Himanshu. I’m passionate about how technology—specifically AI and machine learning—can solve real-world problems. My work currently revolves around the intersection of finance and technology, particularly in creating solutions that help people make smarter financial decisions. It's not just about making predictions; it's about empowering individuals with the tools to shape their financial future with confidence.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              At <span className="font-semibold">Coinwave</span>, I’m leading efforts to develop predictive systems designed to provide a clearer picture of individual financial behaviors and assist in making informed decisions. It’s a work-in-progress, but our goal is ambitious: create a unified system that helps people track, manage, and plan their finances for the future. It’s a complex problem, but one I’m deeply invested in solving. 
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              My journey started with a fascination for coding. As I built my skills, I realized that technology could solve some of the most pressing issues we face in the world today. But it wasn’t until I stumbled into finance that I truly understood how intertwined technology and finance were—and the potential to make a massive impact by bridging the two. This isn’t just about algorithms; it’s about creating systems that can unlock opportunities for individuals and businesses to succeed in a rapidly changing world.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              The challenge I see is this: technology is evolving faster than most can keep up, and that includes in financial services. Businesses today don’t just compete in traditional ways—they compete on data, on the ability to analyze it, and to act on it in real-time. I’m trying to help bridge that gap by creating predictive models that can help companies and individuals navigate uncertainty, reduce risk, and make better decisions. 
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              But the challenge goes beyond business. The entire geopolitical landscape is shifting in response to these technological advancements. Countries are racing to dominate the data-driven future, which has massive implications not just for businesses, but for global power dynamics. Whether it's AI, 5G, or data privacy, the next few years will determine which countries control the narrative of the future. It’s a dynamic I’m deeply intrigued by and actively working to understand.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              That’s where finance, AI, and geopolitics converge for me. AI can help level the playing field, not just in business but in the broader context of society. By applying machine learning to financial challenges, we have the potential to improve financial literacy, democratize access to resources, and build systems that help people make better decisions. Imagine a future where anyone, regardless of their background, has access to tools that empower them to make financial decisions like an expert. That’s the world I’m working towards, and it excites me.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Beyond the professional world, I’m also captivated by the cosmos. Astrophysics fascinates me—there’s something about the vast, seemingly chaotic nature of the universe that mirrors the complexity I find in financial markets. Whether I’m exploring new theories in physics or diving deep into economic systems, I’m always looking for patterns—patterns that can be applied to both the stars and the stock market.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              The common thread? Patterns. In both financial markets and the universe, there are systems and behaviors that, when understood, allow for prediction and control. It's this journey of discovery, whether in astrophysics, finance, or AI, that fuels my curiosity and keeps me motivated to build something that lasts.
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              Moving forward, I see AI and data as the backbone of economic and geopolitical power. Every major global decision—whether in business or politics—will be influenced by how these tools are used. This is more than a career to me; it's about contributing to the future. How can we harness the power of AI to not only predict trends but also change the way we interact with the world? How can we ensure that technology, when applied to finance, is inclusive and beneficial for everyone, not just a select few?
            </p>

            <p className="text-xl leading-relaxed opacity-80">
              So, I’m here to help build that future. If you’re as excited about the possibilities of AI, finance, and technology as I am—or if you just want to chat about the latest astrophysics discoveries—I’d love to connect. Let's build something meaningful together. 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
