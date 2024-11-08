import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';
import ResumeModal from './ResumeModal';
import Slider from 'react-slick';

export const Home = () => {
    const { setHighlighted } = useOutletContext();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleGetInTouchClick = () => {
        const footer = document.getElementById("footer");
        footer.scrollIntoView({ behavior: "smooth" });

        setHighlighted(true);

        setTimeout(() => {
            setHighlighted(false);
        }, 2000); // Reset after 3 seconds
    };

    const handleViewResumeClick = () => setIsResumeModalOpen(true);
    const handleCloseModal = () => setIsResumeModalOpen(false);

    // Slick slider settings
    const sliderSettings = {
        infinite: false,
        slidesToShow: 4,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative bg-gray-100 min-h-screen flex flex-col items-center overflow-hidden">
            {/* Abstract Background Design */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-200 rounded-full opacity-15 blur-3xl"></div>
                <div className="absolute top-40 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-60 blur-3xl"></div>
                <div className="absolute bottom-24 left-10 w-64 h-64 bg-green-200 rounded-full opacity-45 blur-2xl"></div>
                <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-300 rounded-full opacity-50 blur-2xl"></div>
            </div>

            {/* Navbar */}
            <nav className="w-full max-w-6xl md:flex justify-between items-center py-4 px-6 z-10">
                <h1 className="text-xl font-semibold text-gray-800">Christian Gil Alaan</h1>
                
                {/* Mobile Hamburger Menu */}
                <button onClick={handleToggleNav} className="md:hidden mt-4 text-gray-700 focus:outline-none">
                    <FaBars className="w-5 h-5" />
                </button>

                {/* Navbar Links */}
                <div className={`flex gap-4 md:flex-row flex-col ${isNavOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                    <Link to="/profile" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Profile</Link>
                    <Link to="/journal" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Journal</Link>
                    <Link to="/reflection" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Reflection</Link>
                </div>
            </nav>


            {/* Styled hr for visibility */}
            <hr className="border-t-2 border-yellow-500 w-3/4 z-10" />

            {/* Header Section */}
            <header className="text-center p-6 max-w-6xl mt-10 z-10">
                <div className="relative inline-block">
                    <img 
                        src="https://i.ibb.co/5kmc6jP/Snapchat-2003264548-2.jpg" 
                        alt="Profile" 
                        className="w-64 h-64 rounded-full object-cover mx-auto"
                    />
                    <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-yellow-100 z-[-1] transform translate-x-[-20px] translate-y-[-20px]"></div>
                </div>
                <h3 className="text-gray-800 font-medium mt-2">College Student | <span className="text-yellow-500 font-semibold">Full Stack Developer Intern</span></h3>
                <h2 className="text-4xl font-bold text-gray-800 mt-8">Hello, my name is Christian Gil Alaan</h2>
                <p className="text-gray-600 text-lg p-5 mt-4 max-w-xl mx-auto">
                    I’m a senior college student with a deep passion for programming and technology.
                </p>
                <div className="flex gap-4 mt-6 justify-center">
                    <button
                    onClick={handleGetInTouchClick}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                    >
                    Get in Touch
                    </button>
                    <button onClick={handleViewResumeClick} className="border-2 border-gray-800 text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-white">
                    View Resume
                    </button>
                </div>
            </header>

            
            {/* Conditional rendering of ResumeModal */}
            {isResumeModalOpen && <ResumeModal onClose={handleCloseModal} />}

            {/* Projects Section */}
            <section id="projects-section" className="mt-8 mb-10 w-full max-w-7xl text-center px-6 z-10">
                <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
                <div className="border-b-4 border-yellow-500 inline-block mt-2 mb-8"></div>

                {/* Slider for Project Cards */}
                <Slider {...sliderSettings}>
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                        <img src="https://i.ibb.co/K0zLj2F/image-1.png" alt="Project 1" className="rounded mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Fligno Inventory System</h3>
                        <p className="text-gray-600 mt-2">
                            A comprehensive inventory management system designed to streamline tracking and optimize supply chain operations.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                        <img src="https://i.ibb.co/M8xRKFT/image.png" alt="Project 3" className="rounded mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">XU-NSP Website</h3>
                        <p className="text-gray-600 mt-2">
                            The Xavier University - Night School Program Website was developed using the content management system of WordPress.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                        <img src="https://i.ibb.co/LggMkSZ/image.png" alt="Project 2" className="rounded mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Cruiseship Booking System</h3>
                        <p className="text-gray-600 mt-2 mb-5">
                            A user-friendly booking system designed to simplify the process of booking and managing cruiseship reservations.
                        </p>
                    </div>
                    {/* Mini Projects Card with Tilted, Scattered Images */}
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                        <div className="relative mb-4 border-2 border-gray-300 rounded-lg p-6 w-3/2 h-40 flex justify-center items-center overflow-hidden">
                            {/* Scattered and Tilted Images as One Stacked Card */}
                            <img 
                                src="https://i.ibb.co/0jkdkCg/image.png" 
                                alt="Mini Project 1" 
                                className="w-32 h-24 rounded absolute top-4 left-4 transform rotate-[-10deg] shadow-lg"
                            />
                            <img 
                                src="https://i.ibb.co/0DzLwMQ/image.png" 
                                alt="Mini Project 2" 
                                className="w-24 h-24 rounded absolute top-8 left-32 transform rotate-[10deg] shadow-lg"
                            />
                            <img 
                                src="https://i.ibb.co/jvCNLhj/image.png" 
                                alt="Mini Project 3" 
                                className="w-24 h-24 rounded absolute top-16 left-14 transform rotate-[-5deg] shadow-lg"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">Mini Projects</h3>
                        <p className="text-gray-600 text-center mt-2 mb-4">
                            A collection of projects including a to-do app, notes app, search filtering app, and other more that I developed.
                        </p>
                    </div>
                </Slider>
            </section>
        </div>
    );
};
