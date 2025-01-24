"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-lg mx-auto">
        {/* Logo / Name */}
        <Link href="/" passHref>
          <div className="text-indigo-900 font-bold text-xl cursor-pointer">
            Himanshu Dixit
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-indigo-800 hover:text-indigo-600 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:dixithimanshu012@gmail.com"
            className="text-indigo-800 hover:text-indigo-600 transition-all text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/him-d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-800 hover:text-indigo-600 transition-all text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hima-d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-800 hover:text-indigo-600 transition-all text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-indigo-800 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-indigo-800 hover:text-indigo-600 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Social Icons for Mobile */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="mailto:dixithimanshu012@gmail.com"
                className="text-indigo-800 hover:text-indigo-600 transition-all text-xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://linkedin.com/in/him-d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-800 hover:text-indigo-600 transition-all text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/hima-d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-800 hover:text-indigo-600 transition-all text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
