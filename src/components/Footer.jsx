import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Footer = ({ highlighted }) => {
  const borderClass = highlighted ? 'border-4 border-red-500' : '';

  return (
    <footer id="footer" className="bg-gray-800 text-white py-8 flex flex-col items-center">
      <div className="flex gap-1 mb-4 p-2">
        <a
          href="https://www.facebook.com/sayge2/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center w-12 h-12 ${borderClass}`}
        >
          <FaFacebook
            className="w-6 h-6 hover:text-yellow-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/christian-gil-alaan-9a32a431a/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center w-12 h-12 ${borderClass}`}
        >
          <FaLinkedin
            className="w-6 h-6 hover:text-yellow-500"
          />
        </a>
        <a
          href="mailto:christiangilalaan@gmail.com"
          className={`flex justify-center items-center w-12 h-12 ${borderClass}`}
        >
          <FaEnvelope
            className="w-6 h-6 hover:text-yellow-500"
          />
        </a>
        <a
          href="https://github.com/christianGil1"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex justify-center items-center w-12 h-12 ${borderClass}`}
        >
          <FaGithub
            className="w-6 h-6 hover:text-yellow-500"
          />
        </a>
      </div>
      <p className="text-gray-400 text-sm">&copy; Christian Gil Alaan 2024</p>
    </footer>
  );
};
