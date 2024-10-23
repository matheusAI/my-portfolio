import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121215] text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
        <div className="mt-2 space-x-4 flex justify-center ">
          <a
            href="https://github.com/matheusAI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-santos-434ab0200/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
