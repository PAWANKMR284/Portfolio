import React from "react";

const Services = () => {
  const services = [
    "Web Development with React.js",
    "Backend Development with Node.js",
    "Database Management (MongoDB, MySQL)",
    "UI/UX Design with Tailwind CSS",
    "API Development with Express.js",
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-400">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-lg">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
