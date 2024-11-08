import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';

export const Reflection = () => {
    const { setHighlighted } = useOutletContext();
    const [isNavOpen, setIsNavOpen] = useState(false);

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

    return (
        <div className="relative bg-gray-100 min-h-screen flex flex-col items-center overflow-hidden">
            {/* Background Blur Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-200 rounded-full opacity-15 blur-3xl"></div>
                <div className="absolute top-40 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-60 blur-3xl"></div>
                <div className="absolute bottom-24 left-10 w-64 h-64 bg-green-200 rounded-full opacity-45 blur-2xl"></div>
                <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-300 rounded-full opacity-50 blur-2xl"></div>
            </div>

            {/* Main Content */}
            <nav className="w-full max-w-6xl md:flex justify-between items-center py-4 px-6 z-10">
                <h1 className="text-xl font-semibold text-gray-800">Christian Gil Alaan</h1>
                
                <button onClick={handleToggleNav} className="md:hidden mt-4 text-gray-700 focus:outline-none">
                    <FaBars className="w-5 h-5" />
                </button>

                <div className={`flex gap-4 md:flex-row flex-col ${isNavOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                    <Link to="/" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Home</Link>
                    <Link to="/profile" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Profile</Link>
                    <Link to="/journal" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Journal</Link>
                </div>
            </nav>

            <hr className="border-t-2 border-yellow-500 w-3/4 z-10" />

            <header className="text-center md:text-left p-6 max-w-6xl mt-10 z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 mt-8">
                    <h1 className="text-4xl font-bold text-gray-800">Reflection</h1>
                    <p className="text-lg text-gray-600 mt-4">
                        A reflection about my experiences, hardships, and appreciations towards myself for being able to be part of a team.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <img src="https://i.ibb.co/YfcjqBX/3.jpg" alt="Christian Gil Alaan" className="rounded-full h-48 w-48 object-cover shadow-lg" />
                    <button
                        onClick={handleGetInTouchClick}
                        className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mt-4 md:mr-9 text-center"
                    >
                        Get in Touch
                    </button>
                </div>
            </header>

            <div className="mt-10 space-y-8 w-full max-w-7xl z-10">
                {/* Reflection Section */}
                <div className="bg-white mb-10 shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Being an Intern at Fligno</h2>
                    <div className="ml-6 text-gray-600 space-y-4">
                        <p><strong>Describing the department or functional area and its methods of operation:</strong></p>
                        <p>
                            During my internship, I worked in the software development department at Fligno Software. This team focuses on creating custom software solutions and operates in an agile, sprint or anything that is suitable for the environment. Each project is managed in phases, from planning and design to development and deployment. Team members collaborate closely, using platforms like GitHub, GitLab, React, Laravel and other project management tools to ensure timelines and deliverables are met.
                        </p>

                        <p><strong>As an Intern, how did the department benefit from me?</strong></p>
                        <p>
                            As an intern, I contributed to the development of an inventory management system project for Fligno which might be used by the company. My work allowed me to complete the project faster by learning and applying that knowledge to my tasks such as database management, API development in the back-end, and front-end UI design. I also managed to test and debug my code with Postman, ensuring smoother transitions through each project phase.
                        </p>

                        <p><strong>Summarizing how I spent my hours during practicum, including specific accomplishments:</strong></p>
                        <p>
                            I spent my hours coding, troubleshooting, and collaborating with colleagues. I was primarily responsible for developing features for the inventory management system using Laravel and React, such as inventory tracking, low-stock alerts, and pagination. My specific accomplishments include creating user-friendly UI components, optimizing API responses, and setting up a responsive front-end design.
                        </p>

                        <p><strong>What have I learned from the experience in the company?</strong></p>
                        <p>
                            My time at Fligno Software taught me the importance of attention to detail, selfpaced learning, teamwork, and efficient coding practices. I learned how to structure a full-stack application from scratch and gained valuable experience in debugging and optimizing code.
                        </p>

                        <p><strong>How was my experience with the people in the company?</strong></p>
                        <p>
                            The people at Fligno were welcoming and supportive. The employees even my mentor took the time to guide me through complex tasks, providing constructive feedback that helped me improve. I appreciated the collaborative spirit and willingness to help that I found within the team.
                        </p>

                        <p><strong>The most memorable event during my practicum:</strong></p>
                        <p>
                            The most memorable moment was presenting my completed project to the team and receiving positive feedback on my work. It was rewarding to see my contributions being valued and acknowledged by the company.
                        </p>

                        <p><strong>Recommendations for the company to facilitate practicum experiences in the future:</strong></p>
                        <p>
                            I would recommend establishing a structured onboarding process for interns, including a list of resources and a dedicated mentor to help them settle in more quickly. This could improve efficiency and make the learning curve smoother for future interns.
                        </p>

                        <p><strong>Advice for those who will take their practicum in the future:</strong></p>
                        <p>
                            My advice for future interns is to ask questions whenever you’re unsure and actively seek feedback on your work. Embrace the learning process and take on challenges, as this is a great opportunity to develop both technical and soft skills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
