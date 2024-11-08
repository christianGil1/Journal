import React, { useState, useEffect } from 'react';
import { FaBars, FaArrowUp } from 'react-icons/fa';
import { Link, useOutletContext } from 'react-router-dom';

export const Journal = () => {
    const { setHighlighted } = useOutletContext();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

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

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 200) {
        setShowButton(true);
        } else {
        setShowButton(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative bg-gray-100 min-h-screen flex flex-col items-center overflow-hidden">
            {/* Background Blur Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-20 -left-40 w-96 h-96 bg-yellow-200 rounded-full opacity-15 blur-3xl"></div>
                <div className="absolute top-40 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-60 blur-3xl"></div>
                <div className="absolute bottom-48 left-10 w-64 h-64 bg-green-200 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-300 rounded-full opacity-55 blur-2xl"></div>
            </div>

            <nav className="w-full max-w-6xl md:flex justify-between items-center py-4 px-6 z-10">
                <h1 className="text-xl font-semibold text-gray-800">Christian Gil Alaan</h1>
                
                <button onClick={handleToggleNav} className="md:hidden mt-4 text-gray-700 focus:outline-none">
                    <FaBars className="w-5 h-5" />
                </button>

                <div className={`flex gap-4 md:flex-row flex-col ${isNavOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                    <Link to="/" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Home</Link>
                    <Link to="/profile" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Profile</Link>
                    <Link to="/reflection" className="text-gray-800 hover:text-yellow-600 px-4 py-2 border-b-2 border-transparent hover:border-yellow-600 transition duration-300">Reflection</Link>
                </div>
            </nav>

            <hr className="border-t-2 border-yellow-500 w-3/4 z-10" />

            {/* Profile Section */}
            <header className="text-center md:text-left p-10 max-w-6xl mt-10 z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 mt-8">
                    <h1 className="text-4xl font-bold text-gray-800">OJT Journal (August - November 2024) </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Summary of Activities while being an intern in Fligno Software Philippines Inc. 
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

            <div className="mt-10 space-y-8 z-10 mb-8">
                {/* Journal Section */}
                    <img 
                        src="https://i.ibb.co/0jkdkCg/image.png" 
                        alt="Mini Project 1" 
                        className="w-96 h-76 rounded absolute bottom-28 left-4 transform rotate-[-5deg] shadow-lg"
                    />

                {/* Background Image for Week 1 */}
                <img 
                    src="https://i.ibb.co/jvCNLhj/image.png" 
                    alt="Mini Project 3" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] right-10 transform rotate-[-2deg] shadow-lg z-0" 
                />

                {/* Week 1 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:mr-8 z-10 relative">
                <h2 className="text-xl font-semibold text-gray-800">Week 1 (August 05 - August 09)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>During the first week of my internship, I focused on getting familiar with the company's environment and the tools I'd be using throughout my internship. I started learning about full-stack development and understanding the basic concepts of web development. I also worked on a few introductory mini-projects through Scrimba, which helped me get a feel for coding in both backend and frontend technologies. My supervisor gave me a clear idea of what the project goals would be, and I began laying the groundwork for the inventory system, which would be my final project. This week was all about adjusting to the workflow and understanding the basics of Laravel and React.</p>
                    </div>
                </div>
                
                {/* Background Image for Week 2 */}
                <img 
                    src="https://private-user-images.githubusercontent.com/95863162/359106667-345b49f4-c014-4b2b-92c3-51d5af1a51d5.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzEwNTc3MTksIm5iZiI6MTczMTA1NzQxOSwicGF0aCI6Ii85NTg2MzE2Mi8zNTkxMDY2NjctMzQ1YjQ5ZjQtYzAxNC00YjJiLTkyYzMtNTFkNWFmMWE1MWQ1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDExMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMTA4VDA5MTY1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdiNWYzZWM5YmE3MDIyMTE3YTQxYTA2YzRlMTI0ZjQ3YmRkN2RkOTJhMzI5NzhhNWMwZWJjMmM5MmQ5N2Y4NzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.6EBOo0HZ39YC8bX_QzoOFh7lJ06Ok7JKciMCRuukTPk" 
                    alt="Mini Project 3" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] left-10 transform rotate-[-15deg] shadow-lg z-0" 
                />

                {/* Week 2 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:ml-20 z-10 relative">
                <h2 className="text-xl font-semibold text-gray-800">Week 2 (August 12 - August 16)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>The second week was focused on deepening my understanding of Laravel and React, which would be the foundation of my final project. I continued working through mini-projects in Scrimba, which offered practical exercises and real-world scenarios. I started applying what I learned to set up a basic environment for my project, making sure everything was ready for building the inventory system. Additionally, I reviewed common practices in full-stack development, such as setting up databases and connecting them with the frontend. This week gave me a strong foundation for working on my final project and understanding how each part of the system would come together.</p>
                    </div>
                </div>

                {/* Background Image for Week 3 */}
                <img 
                    src="https://neuralpin.com/media/covers/7.jpg" 
                    alt="Mini Project 4" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] right-10 transform rotate-[-10deg] shadow-lg z-0" 
                />

                {/* Week 3 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:mr-8 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 3 (August 19 - August 23)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>In Week 3, I dove deeper into both backend and frontend development. I worked on understanding user authentication, an essential part of the inventory system. This included learning about how to create secure logins and how users would interact with the system. I also continued my mini-projects on Scrimba, which gave me more practice with coding and real-world problem-solving. The main focus was on making sure the basic structure of the system was working correctly and ensuring I was getting comfortable with the tools. This week was a mix of learning through tutorials and applying that knowledge to the inventory project.</p>
                    </div>
                </div>

                {/* Background Image for Week 4 */}
                <img 
                    src="https://i.ibb.co/0DzLwMQ/image.png" 
                    alt="Mini Project 2" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] left-10 transform rotate-[10deg] shadow-lg z-0" 
                />

                {/* Week 4 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:ml-20 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 4 (August 26 - August 30)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>By Week 4, I was more confident in using Laravel and React to build functional features. I started focusing on creating the registration system for the inventory app, ensuring users could sign up and create accounts. This week, I dedicated a lot of time to understanding how information flows through the system, from the user’s input to storing it in a database. I also learned about different validation methods, making sure data entered by users would be safe and accurate. The mini-projects this week helped me build more advanced skills, and I applied these to the inventory system’s registration page.</p>
                    </div>
                </div>

                {/* Week 5 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:mr-8 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 5 (September 02 - September 07)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>In the fifth week, I focused on refining the registration process and adding more security features to the inventory system. I spent time learning about verifying user emails and managing user roles. This was crucial because different users would need different levels of access within the inventory system. I also continued my Scrimba mini-projects to further hone my skills. The main goal was to improve the user registration process and ensure that everything was smooth and secure. This week’s work laid the foundation for building a functional and secure system that would be ready for real-world use.</p>
                    </div>
                </div>

                {/* Background Image for Week 5 */}
                <img 
                    src="https://camo.githubusercontent.com/78c58042f03f22a29c18e082dd9c7d2ea9b89d6362f61b4c2b9fe457bbb91ccd/68747470733a2f2f616c627567656f7267652e6769746875622e696f2f6d656d652d67656e657261746f722f707265766965772e706e67" 
                    alt="Mini Project 4" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] right-10 transform rotate-[-10deg] shadow-lg z-0" 
                />

                {/* Week 6 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:ml-20 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 6 (September 09 - September 13)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>During Week 6, I worked on completing the user login and email verification system. I spent time testing different ways to ensure that users could log in smoothly after registering, and their credentials would be protected. I also focused on the approval process for users, ensuring that users would not be able to access the inventory system until an admin approved them. This week was about combining the registration, login, and verification features into a seamless experience. I continued to apply my learning from Scrimba to solve issues and improve the overall workflow.</p>
                    </div>
                </div>

                {/* Week 7 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:mr-8 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 7 (September 16 - September 20)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>Week 7 was all about enhancing the security of the inventory system. I focused on making sure users could reset their passwords securely if needed. I worked on ensuring that all password processes were protected and user-friendly. Additionally, I started integrating some advanced features, such as role management for users. This allowed the system to differentiate between regular users and admins. I also spent time learning about OAuth and how it could improve the security of the system. My work this week helped me understand the importance of keeping the system both functional and safe.</p>
                    </div>
                </div>

                {/* Background Image for Week 8 */}
                <img 
                    src="https://laravel-blog-assets.s3.amazonaws.com/So1FEd2U5QsbTO6YcI8vVN2sci6ly2D8RMKAR1Pq.png" 
                    alt="Mini Project 5" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] left-10 transform rotate-[4deg] shadow-lg z-0" 
                />

                {/* Week 8 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:ml-20 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 8 (September 23 - September 27)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>In Week 8, I dedicated my time to building the admin dashboard for the inventory system. This would be where administrators could manage users and view important system information. I focused on making sure the dashboard was easy to navigate and offered the tools needed to manage inventory, view reports, and control user access. I also spent time improving the user interface to make it as clear and intuitive as possible. Learning how to build an admin dashboard was a key milestone in the development of the project, and I continued to refine it as the week progressed.</p>
                    </div>
                </div>

                {/* Background Image for Week 9 */}
                <img 
                    src="https://selftaughttxg.com/static/a35a4e5c99d02f67f071a2be6d15f206/d5b59/Requirements.png" 
                    alt="Mini Project 5" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] right-10 transform rotate-[-5deg] shadow-lg z-0" 
                />

                {/* Week 9 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:mr-8 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 9 (September 30 - October 04)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>By Week 9, I focused on improving the overall functionality of the inventory system. I worked on adding features that would allow admins to manage inventory stock, add new products, and track inventory levels. This week was about making the system as functional as possible, ensuring that all features worked together. I also continued testing the system to make sure that everything, from user authentication to inventory management, was running smoothly. This week was about fine-tuning the system and making sure it met the initial project goals.</p>
                    </div>
                </div>

                {/* Background Image for Week 10 */}
                <img 
                    src="https://i.ibb.co/K0zLj2F/image-1.png" 
                    alt="Mini Project 5" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] left-10 transform rotate-[-10deg] shadow-lg z-0" 
                />

                {/* Week 10 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:ml-20 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 10 (October 07 - October 11)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>Week 10 was focused on connecting the frontend and backend of the inventory system more effectively. I worked on ensuring that data entered by users was reflected in real-time within the system. I also focused on improving the UI/UX to make the application more user-friendly. Additionally, I started to integrate reports and graphs into the dashboard, which allowed the admin to visualize inventory data more effectively. This week was all about improving the user experience and making the system more polished.</p>
                    </div>
                </div>

                {/* Background Image for Week 11 */}
                <img 
                    src="https://techifysolutions.com/wp-content/uploads/2022/11/ReactJS-1.webp" 
                    alt="Mini Project 4" 
                    className="w-96 h-76 rounded absolute top-[calc(5*rem)] right-10 transform rotate-[10deg] shadow-lg z-0" 
                />

                {/* Week 11 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:mr-8 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 11 (October 14 - October 18)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>In Week 11, I completed the final touches on the inventory system, focusing on refining the overall design and ensuring the system was fully functional. I tested everything thoroughly to make sure there were no bugs or errors. I also worked on improving the performance of the application to make it run smoothly, even with a large amount of data. During this week, I received valuable feedback from my mentor, which helped me make improvements and adjustments. It was an important week for polishing the system and preparing it for final presentation.</p>
                    </div>
                </div>

                {/* Week 12 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:ml-20 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 12 (October 21 - October 25)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>Week 12 was the week I prepared for my final presentation. I spent time organizing my work, gathering results, and ensuring the inventory system was ready to showcase. I focused on presenting the project in a way that highlighted the challenges I faced, the solutions I implemented, and the skills I gained throughout the internship. This week was about reflecting on everything I had learned and ensuring that my project was as impressive as possible. I received positive feedback from my mentors and colleagues, which boosted my confidence.</p>
                    </div>
                </div>

                {/* Week 13 */}
                <div className="week-bg bg-white shadow-lg rounded-lg p-10 mx-auto max-w-4xl transform transition-transform duration-500 ease-in-out md:mx-0 md:transform-none md:mr-8 z-10 relative">
                    <h2 className="text-xl font-semibold text-gray-800">Week 13 (October 28 and November 4)</h2>
                    <div className="ml-6 mt-4 text-gray-600 space-y-2">
                        <p>The final week of my internship was focused on offboarding, evaluation, and final feedback. I reflected on the entire internship experience, including the challenges, successes, and lessons learned. I received feedback from my mentor about my performance and contributions, which was valuable for my personal growth. I also wrapped up my final project by documenting my work and ensuring everything was well-organized for handover. This week marked the end of a successful internship, where I had gained significant knowledge and experience in full-stack development.</p>
                    </div>
                </div>
            </div>
            {showButton && (
                <button
                className="fixed bottom-0 right-0 mb-4 mr-4 bg-yellow-500 text-white py-4 px-4 rounded hover:bg-yellow-600 z-10"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <FaArrowUp className="text-2xl" />
              </button>
            )}
        </div>
    );
};
