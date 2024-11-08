import React, { useState, useEffect } from 'react';
import { FaBars, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';
import ResumeModal from './ResumeModal';

export const Home = () => {
  const { setHighlighted } = useOutletContext();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // State for managing which project is currently displayed
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: "Fligno Inventory System",
      description: "A comprehensive inventory management system designed to streamline tracking and optimize supply chain operations.",
      imageUrl: "https://i.ibb.co/K0zLj2F/image-1.png",
    },
    {
      title: "Cruiseship Booking System",
      description: "A user-friendly booking system designed to simplify the process of booking and managing cruiseship reservations.",
      imageUrl: "https://i.ibb.co/LggMkSZ/image.png",
    },
    {
      title: "XU-NSP Website",
      description: "The Xavier University - Night School Program Website was developed using the content management system of WordPress.",
      imageUrl: "https://i.ibb.co/M8xRKFT/image.png",
    },
    {
      title: "Mini Projects",
      description: "A collection of smaller projects I developed that includes projects like a to do app, a notes app, and a search filtering app.",
      images: [
        "https://i.ibb.co/0jkdkCg/image.png",
        "https://i.ibb.co/0DzLwMQ/image.png",
        "https://i.ibb.co/jvCNLhj/image.png",
      ],
    },
  ];

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleGetInTouchClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
    setHighlighted(true);
    setTimeout(() => {
      setHighlighted(false);
    }, 2000);
  };

  const handleViewResumeClick = () => setIsResumeModalOpen(true);
  const handleCloseModal = () => setIsResumeModalOpen(false);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-200 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-40 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-64 h-64 bg-green-200 rounded-full opacity-45 blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-300 rounded-full opacity-50 blur-2xl"></div>
      </div>

      <nav className="w-full max-w-6xl md:flex justify-between items-center py-4 px-6 z-10">
        <h1 className="text-xl font-semibold text-gray-800">Christian Gil Alaan</h1>
        <button onClick={handleToggleNav} className="md:hidden mt-4 text-gray-700 focus:outline-none">
          <FaBars className="w-5 h-5" />
        </button>
        <div className={`flex gap-4 md:flex-row flex-col ${isNavOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
          <Link to="/profile" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Profile</Link>
          <Link to="/journal" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Journal</Link>
          <Link to="/reflection" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Reflection</Link>
        </div>
      </nav>

      <hr className="border-t-2 border-yellow-500 w-3/4 z-10" />

      <header className="text-center p-6 max-w-6xl mt-10 z-10">
        <div className="relative inline-block">
          <img src="https://i.ibb.co/5kmc6jP/Snapchat-2003264548-2.jpg" alt="Profile" className="w-64 h-64 rounded-full object-cover mx-auto" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-yellow-100 z-[-1] transform translate-x-[-20px] translate-y-[-20px]"></div>
        </div>
        <h3 className="text-gray-800 font-medium mt-2">College Student | <span className="text-yellow-500 font-semibold">Full Stack Developer Intern</span></h3>
        <h2 className="text-4xl font-bold text-gray-800 mt-8">Hello, my name is Christian Gil Alaan</h2>
        <p className="text-gray-600 text-lg p-5 mt-4 max-w-xl mx-auto">
          I’m a senior college student with a deep passion for programming and technology.
        </p>
        <div className="flex gap-4 mt-6 justify-center">
          <button onClick={handleGetInTouchClick} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Get in Touch</button>
          <button onClick={handleViewResumeClick} className="border-2 border-gray-800 text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-white">View Resume</button>
        </div>
      </header>

      {isResumeModalOpen && <ResumeModal onClose={handleCloseModal} />}

      <section id="projects-section" className="mt-8 mb-10 w-full max-w-7xl text-center px-6 z-10">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <div className="border-b-4 border-yellow-500 inline-block mt-2 mb-8"></div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div key={index} className="min-w-full">
                  <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                    {project.images ? (
                      <div className="relative w-5/6 h-52 flex justify-center items-center overflow-hidden">
                        {project.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${project.title} ${i + 1}`}
                            className={`w-24 h-24 rounded absolute transform shadow-lg ${
                              i === 0 ? "top-4 left-4 rotate-[-10deg]" : i === 1 ? "top-16 left-12 rotate-[10deg]" : "top-8 left-24 rotate-[-5deg]"
                            }`}
                          />
                        ))}
                      </div>
                    ) : (
                      <img src={project.imageUrl} alt={project.title} className="rounded mb-4" />
                    )}
                    <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
                    <button className="border-2 border-gray-800 text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-white">View Project</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={handlePrevProject} className="ml-6 absolute top-1/2 left-0 transform -translate-y-1/2 p-4 bg-gray-700 bg-opacity-30 text-white rounded-full hover:bg-opacity-50 transition">
            <FaChevronLeft />
          </button>
          <button onClick={handleNextProject} className="mr-6 absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-700 bg-opacity-30 text-white rounded-full hover:bg-opacity-50 transition">
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
