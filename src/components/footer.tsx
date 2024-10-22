import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121215] text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com/matheusAI" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/matheus-santos-434ab0200/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
