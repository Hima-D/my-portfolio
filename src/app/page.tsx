import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa';
import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 pb-20 gap-16 sm:p-20 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <main className="flex flex-col gap-10 items-center sm:items-start text-gray-900 max-w-screen-lg mx-auto mt-24">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image
            src="/my-portfolio/profile.jpg"
            alt="Himanshu Dixit"
            width={150}
            height={150}
            className="rounded-full border-4 border-indigo-600 mb-6 shadow-lg hover:scale-105 transition-all duration-300"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-indigo-900">Himanshu Dixit</h1>
          <p className="text-lg sm:text-xl font-medium text-gray-700 opacity-90">
            Engineering AI Systems | Building Machine Learning Solutions
          </p>
        </div>

        {/* About Section */}
        <section id="about" className="w-full bg-white rounded-lg shadow-xl p-6 mb-8 max-w-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">About My Work</h2>
          <p className="text-lg text-gray-700 opacity-90">
            I build AI systems that solve real problems. My work focuses on creating reliable machine learning models that can handle complex data and deliver meaningful results.
          </p>
          <p className="text-lg text-gray-700 opacity-90 mt-4">
            I'm particularly interested in how generative AI and large language models can transform how we approach computing problems. I enjoy tackling difficult technical challenges and finding elegant solutions through careful engineering.
          </p>
        </section>

        {/* Technical Skills Section */}
        <section className="w-full bg-white rounded-lg shadow-xl p-6 mb-8 max-w-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 opacity-90">
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-6 w-6 text-indigo-600" />
              <span>Machine Learning Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-6 w-6 text-indigo-600" />
              <span>Python & Data Science Libraries</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-6 w-6 text-indigo-600" />
              <span>Deep Learning Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-6 w-6 text-indigo-600" />
              <span>TensorFlow & PyTorch Development</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-6 w-6 text-indigo-600" />
              <span>Cloud Infrastructure & Scaling</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-6 w-6 text-indigo-600" />
              <span>Big Data Processing Systems</span>
            </div>
          </div>
        </section>

        {/* Project Approach Section */}
        <section className="w-full bg-white rounded-lg shadow-xl p-6 mb-8 max-w-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">How I Approach Projects</h2>
          <p className="text-lg text-gray-700 opacity-90">
            I believe in building systems that actually work, not just in theory but in practice. That means starting with the problem, understanding the constraints, and designing solutions that balance technical sophistication with practical implementation.
          </p>
          <p className="text-lg text-gray-700 opacity-90 mt-4">
            Whether it's optimizing an algorithm or scaling a model for production, I focus on creating robust systems that deliver consistent results. I value clear communication and thoughtful engineering over unnecessary complexity.
          </p>
        </section>

        {/* Contact Section */}
        <div className="flex gap-6 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-indigo-600 transition-colors flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-700 text-sm sm:text-base h-12 px-6 sm:px-8 shadow-lg"
            href="mailto:dixithimanshu012@gmail.com"
          >
            <FaEnvelope className="h-5 w-5 text-white mr-2" />
            Email me
          </a>
          <a
            className="rounded-full border border-solid border-indigo-600/[.2] transition-colors flex items-center justify-center hover:bg-indigo-50 text-sm sm:text-base h-12 px-6 sm:px-8 sm:min-w-40 shadow-lg"
            href="https://www.linkedin.com/in/him-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 text-indigo-600 mr-2" />
            LinkedIn
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 opacity-80 mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/hima-d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-4 w-4 text-gray-600" />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:dixithimanshu012@gmail.com"
        >
          <FaEnvelope className="h-4 w-4 text-gray-600" />
          Contact
        </a>
      </footer>
    </div>
  );
}
