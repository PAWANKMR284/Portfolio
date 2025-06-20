import React from "react";
import profileImage from "../assets/pkk.jpg";
import GitHubCalendar from "react-github-calendar";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaGit,
  FaGithub,
} from "react-icons/fa"; // Import icons if using react-icons

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Text Content */}
          <div className="text-left w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
              Hello, It’s Me
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-cyan-400 drop-shadow-md">
              Pawan Kumar
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 drop-shadow-md">
              And I’m a Software Engineer | React Developer
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-12">
              I’m a Software Engineer with 1 year of experience at Leadingdot
              Solution Pvt. Ltd., Noida, Uttar Pradesh, India. I specialize in
              React.js, Node.js, and more...
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-8">
              <a
                href="www.linkedin.com/in/pawan-kumar284"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://github.com/PAWANKMR284"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
            {/* Call to Action Button */}
            <a
              href="/PawanResume (2025).pdf"
              download
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
            <br />
            <br />
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg mt-10 max-w-full">
              <h3 className="text-white text-lg font-semibold mb-4">
                GitHub Activity
              </h3>
              <div className="overflow-x-auto">
                <div className="max-w-md">
                  <GitHubCalendar
                    username="PAWANKMR284"
                    colorScheme="dark"
                    blockSize={12} // Smaller blocks
                    blockMargin={4} // Less space between blocks
                    fontSize={12} // Smaller font
                  />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Contribution Calendar
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg mt-10 max-w-full">
            <h3 className="text-white text-lg font-semibold mb-4">
              GitHub Activity
            </h3>
            <div className="overflow-x-auto">
              <div className="max-w-md">
                <GitHubCalendar
                  username="PAWANKMR284"
                  colorScheme="dark"
                  blockSize={12} // Smaller blocks
                  blockMargin={4} // Less space between blocks
                  fontSize={12} // Smaller font
                />
              </div>
            </div>
          </div> */}

          {/* Right Side: Circular Image with Neon Glow */}
          <div className="w-full md:w-1/2 flex justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <img
                src={profileImage} // Replace with your actual image URL
                alt="Pawan Kumar"
                className="rounded-full object-cover w-full h-full border-4 border-transparent shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
