import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatboat from "./components/Chatboat";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Chatboat />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
