import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              I'm Pawan Kumar, a Software Engineer at Leadingdot Solution Pvt.
              Ltd. in Noida, Uttar Pradesh, India with 1 year of experience.
            </p>
            <p className="mb-4">
              I completed my B.Tech in Mechanical Engineering from RD
              Engineering College, Ghaziabad, Uttar Pradesh, India.
            </p>
            <p>
              Skills: React.js, Node.js, JavaScript, HTML, CSS, Express.js,
              MongoDB, MySQL, Ant Design, Bootstrap, Tailwind CSS
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-indigo-300">Frontend</span>
              <span>React.js, Tailwind CSS</span>
              <span className="text-indigo-300">Backend</span>
              <span>Node.js, Express.js</span>
              <span className="text-indigo-300">Database</span>
              <span>MongoDB, MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
