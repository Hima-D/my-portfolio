import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa';
import Header from '@/components/header';
import Image from 'next/image'; // Import Image from next/image

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e1e5eb] p-8 pb-20 gap-16 sm:p-20 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <main className="flex flex-col gap-10 items-center sm:items-start text-gray-900 max-w-screen-lg mx-auto mt-24">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image
            src="/my-portfolio/profile.jpg" // Image path
            alt="Himanshu Dixit"
            width={150}
            height={150}
            className="rounded-full border-4 border-indigo-600 mb-6 shadow-lg hover:scale-105 transition-all duration-300"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-indigo-900">Himanshu Dixit</h1>
          <p className="text-lg sm:text-xl font-medium text-gray-700 opacity-80">
            AI Developer | Machine Learning Enthusiast | Computer Scientist
          </p>
        </div>

        {/* Homepage Section */}
        <section id="homepage" className="w-full bg-white rounded-lg shadow-xl p-6 mb-8 max-w-[800px] hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Welcome to My Digital Workspace</h2>
          <p className="text-lg text-gray-700 opacity-80">
            Welcome to my corner of the internet! Here, we explore everything from building powerful AI models to unraveling the mysteries of machine learning. Grab a cup of coffee (or two) as I take you through my journey of coding, debugging, and yes, occasionally asking myself, "Why did that work?".
          </p>
          <p className="text-lg text-gray-700 opacity-80 mt-4">
            Whether it's crafting algorithms that predict the future (or at least try to) or diving into cutting-edge technologies like generative AI and large language models, I am always on the lookout for the next challenge. But don't worry, I've mastered the art of Googling errors. 
          </p>
        </section>

        {/* Skills & Technologies Section */}
        <section className="w-full bg-white rounded-lg shadow-xl p-6 mb-8 max-w-[800px] hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">Key Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 opacity-80">
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-6 w-6 text-indigo-600" />
              <span>Machine Learning (Teaching machines... and fixing their tantrums)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-6 w-6 text-indigo-600" />
              <span>Python &amp; Libraries (My toolkit for world domination)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-6 w-6 text-indigo-600" />
              <span>Deep Learning (Yes, my neural networks dream too)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-6 w-6 text-indigo-600" />
              <span>AI Frameworks (TensorFlow, PyTorch... also known as my work buddies)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="h-6 w-6 text-indigo-600" />
              <span>Cloud Computing (I let the cloud do the heavy lifting)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode className="h-6 w-6 text-indigo-600" />
              <span>Big Data (It’s not just big, it’s a cosmic adventure)</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="flex gap-6 items-center flex-col sm:flex-row mt-8">
          <a
            className="rounded-full border border-solid border-indigo-600 transition-colors flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-700 text-sm sm:text-base h-12 px-6 sm:px-8 shadow-lg"
            href="mailto:dixithimanshu012@gmail.com"
          >
            <FaEnvelope className="h-5 w-5 text-white mr-2" />
            Contact Me (Let’s chat about AI, or anything really!)
          </a>
          <a
            className="rounded-full border border-solid border-indigo-600/[.2] transition-colors flex items-center justify-center hover:bg-indigo-50 text-sm sm:text-base h-12 px-6 sm:px-8 sm:min-w-44 shadow-lg"
            href="https://www.linkedin.com/in/him-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 text-indigo-600 mr-2" />
            LinkedIn Profile (Let’s connect on LinkedIn!)
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600 opacity-60 mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/hima-d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-4 w-4 text-gray-600" />
          GitHub (Find my code and occasional memes)
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:dixithimanshu012@gmail.com"
        >
          <FaEnvelope className="h-4 w-4 text-gray-600" />
          Email Me (I promise I don’t bite)
        </a>
      </footer>
    </div>
  );
}
