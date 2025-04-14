"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-lg mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" passHref>
          <span className="text-xl font-bold text-indigo-900 hover:text-indigo-700 transition-colors cursor-pointer">
            Himanshu Dixit
          </span>
        </Link>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4 ml-4">
          <a
            href="mailto:dixithimanshu012@gmail.com"
            className="text-indigo-800 hover:text-indigo-600 transition-colors text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/him-d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-800 hover:text-indigo-600 transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hima-d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-800 hover:text-indigo-600 transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-indigo-800 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-white shadow-md`}
      >
        <nav className="flex flex-col items-center gap-4 py-6">
          {/* Mobile Social Icons */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="mailto:dixithimanshu012@gmail.com"
              className="text-indigo-800 hover:text-indigo-600 transition-colors text-xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/him-d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-800 hover:text-indigo-600 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/hima-d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-800 hover:text-indigo-600 transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
