import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-800 shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-400">
              Pawan Kumar
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="hover:text-indigo-400 transition-colors"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#services"
              className="hover:text-indigo-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#blogs"
              className="hover:text-indigo-400 transition-colors"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4">
          <a href="#about" className="block py-2 hover:text-indigo-400">
            About Me
          </a>
          <a href="#projects" className="block py-2 hover:text-indigo-400">
            Projects
          </a>
          <a href="#services" className="block py-2 hover:text-indigo-400">
            Services
          </a>
          <a href="#blogs" className="block py-2 hover:text-indigo-400">
            Blogs
          </a>
          <a href="#contact" className="block py-2 hover:text-indigo-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
