import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa';
import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gray-50 p-8 pb-20 gap-12 sm:p-16 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <main className="flex flex-col gap-8 items-center sm:items-start text-gray-900 max-w-screen-lg mx-auto mt-16">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image
            src="/my-portfolio/profile.jpg"
            alt="Himanshu Dixit"
            width={150}
            height={150}
            className="rounded-full border-2 border-gray-300 mb-6 shadow-md"
          />
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Himanshu Dixit</h1>
          <p className="text-lg font-medium text-gray-600">
            AI Engineering | Machine Learning
          </p>
        </div>

        {/* Work Focus Section */}
        <section id="work" className="w-full bg-white rounded-lg shadow-md p-6 mb-6 max-w-2xl">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Work Focus</h2>
          <p className="text-base text-gray-700">
            I develop machine learning systems with emphasis on production-ready implementation. My work centers on creating models that process complex data inputs to produce reliable, actionable outputs.
          </p>
          <p className="text-base text-gray-700 mt-3">
            Current focus areas include generative AI applications and optimization of large language models for specific tasks. I prioritize functional solutions over theoretical constructs.
          </p>
        </section>

        {/* Technical Capabilities Section */}
        <section className="w-full bg-white rounded-lg shadow-md p-6 mb-6 max-w-2xl">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Technical Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-5 w-5 text-gray-600" />
              <span>Machine Learning Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-5 w-5 text-gray-600" />
              <span>Python Data Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-5 w-5 text-gray-600" />
              <span>Neural Network Development</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-5 w-5 text-gray-600" />
              <span>TensorFlow & PyTorch</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-5 w-5 text-gray-600" />
              <span>Cloud Computing Infrastructure</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-5 w-5 text-gray-600" />
              <span>Large-Scale Data Processing</span>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="w-full bg-white rounded-lg shadow-md p-6 mb-6 max-w-2xl">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Methodology</h2>
          <p className="text-base text-gray-700">
            I apply systematic problem analysis, data-driven decision making, and iterative improvement processes. Projects begin with clearly defined objectives and constraints, followed by structured implementation and rigorous testing.
          </p>
          <p className="text-base text-gray-700 mt-3">
            I measure success through quantifiable metrics and functional outcomes rather than theoretical elegance. Code quality, documentation, and maintainability are essential components of all implementations.
          </p>
        </section>

        {/* Contact Section */}
        <div className="flex gap-5 items-center flex-col sm:flex-row mt-6">
          <a
            className="rounded border border-solid border-gray-400 transition-colors flex items-center justify-center bg-gray-700 text-white hover:bg-gray-800 text-sm sm:text-base h-10 px-5 sm:px-6 shadow-sm"
            href="mailto:dixithimanshu012@gmail.com"
          >
            <FaEnvelope className="h-4 w-4 text-white mr-2" />
            Email
          </a>
          <a
            className="rounded border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-100 text-sm sm:text-base h-10 px-5 sm:px-6 sm:min-w-32 shadow-sm"
            href="https://www.linkedin.com/in/him-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-4 w-4 text-gray-700 mr-2" />
            LinkedIn
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex gap-5 flex-wrap items-center justify-center text-sm text-gray-500 mt-6">
        <a
          className="flex items-center gap-2 hover:text-gray-700"
          href="https://github.com/hima-d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:text-gray-700"
          href="mailto:dixithimanshu012@gmail.com"
        >
          <FaEnvelope className="h-4 w-4" />
          Contact
        </a>
      </footer>
    </div>
  );
}
