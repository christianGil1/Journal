import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';

export const Profile = () => {
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
                    <Link to="/" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Home</Link>
                    <Link to="/journal" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Journal</Link>
                    <Link to="/reflection" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Reflection</Link>
                </div>
            </nav>

            <hr className="border-t-2 border-yellow-500 w-3/4 z-10" />

            {/* Profile Section */}
            <header className="text-center md:text-left p-6 max-w-6xl mt-10 z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 mt-8">
                    <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
                    <p className="text-gray-600 mt-4">
                        I thrive on solving complex problems and am always eager to learn new tools and techniques. 
                        My goal is to continue growing my skills as a developer and contribute to innovative projects that 
                        make a real impact.
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

            <div className="mt-10 space-y-8">
                {/* Resume Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Bibliography</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p><strong>Name:</strong> Christian Gil Saldua Alaan</p>
                        <p><strong>Location:</strong> Cagayan de Oro, Misamis Oriental, Philippines 9000</p>
                        <p><strong>Contact:</strong> +639061020895 | christiangilalaan@gmail.com</p>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800">Technical Skills</h3>
                    <ul className="list-disc ml-10 mt-2 space-y-2 text-gray-600">
                        <li><strong>Languages:</strong> PHP, Java, JavaScript, SQL</li>
                        <li><strong>Frameworks:</strong> Spring Boot, Laravel, Vite</li>
                        <li><strong>Libraries:</strong> Bootstrap</li>
                        <li><strong>Developer Tools:</strong> MySQL, MongoDB, Git, ReactJS, VSCode, NetBeans, Chrome DevTools</li>
                        <li><strong>Certifications:</strong> CCNAv7: Switching, Routing, and Wireless Essentials, CCNAv7: Introduction to Networks</li>
                    </ul>
                </div>

                {/* Education Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                    <ul className="list-disc ml-10 mt-2 space-y-2 text-gray-600">
                        <li><strong>Bachelor of Information Technology</strong> - Xavier University – Ateneo de Cagayan (Aug 2021 – Present), 3.3 GPA</li>
                        <li><strong>ICT – TVL (Programming)</strong> - Informatics Computer Institute (Aug 2019 – 2021), 92% GWA</li>
                    </ul>
                </div>

                {/* Experience Section */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
                    <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-600">
                        <li>
                            <strong>Student Assistant</strong> – May 2023 – Aug 2023, Xavier University – Ateneo de Cagayan
                            <ul className="list-inside list-disc">
                                <li>Assisted in the technical setup for theater productions.</li>
                                <li>Managed schedules and backstage operations.</li>
                                <li>Supported event planning and coordination for cultural programs.</li>
                                <li>Conducted tours for visitors, providing information about exhibits and the museum's history.</li>
                                <li>Helped organize and catalog museum exhibits and artifacts.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Projects Section */}
            <section className="mt-10 mb-10 w-full max-w-4xl px-6 z-10">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Documentations</h2>
                <div className="border-b-4 border-yellow-500 inline-block mt-2 mb-4"></div>

                <div className="grid gap-8 md:grid-cols-2">
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center hover:shadow-xl transition-all">
                        <img src="https://i.ibb.co/8rFcFy1/file.jpg" alt="Project 1" className="rounded mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">On-The-Job Training at Fligno Software</h3>
                        <p className="text-gray-600 mt-2 mb-4">
                            As an OJT college student at Fligno Software, I managed to create a inventory management system from scratch using 
                            Laravel and React, designed to streamline tracking and optimize supply chain operations, gaining 
                            valuable hands-on experience in full-stack software development.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center hover:shadow-xl transition-all">
                        <img src="https://i.ibb.co/nLVBLZ2/5.jpg" alt="Project 2" className="rounded mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Student Assistant at Xavier University</h3>
                        <p className="text-gray-600 mt-2 mb-4">
                            As a Student Assistant at Xavier University, I assisted with theater productions, 
                             supported event planning for cultural programs, and conducted tours while 
                            helping organize exhibits at the Museo de Oro. This enhanced my  and problem-solving skills and 
                            hands-on experience in event planning.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
