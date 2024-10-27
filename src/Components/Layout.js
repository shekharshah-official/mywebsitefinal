import React, { useState } from 'react';
import AnimatedRobot from './AnimatedRobot';

const projects = [
  { id: 1, name: 'Project Alpha' },
  { id: 2, name: 'Project Beta' },
  { id: 3, name: 'Project Gamma' },
];

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">Projects</h2>
      <ul className="p-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="py-2 px-4 hover:bg-gray-700 rounded-md cursor-pointer">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-4">
      <button
        className="md:hidden text-2xl"
        onClick={toggleSidebar}>
        ☰
      </button>
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} />

      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-4 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the shekhar Dashboard</h2>
          <p>Every thing will be here soon...
          <AnimatedRobot />
            
          </p>
        </main>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 md:hidden"></div>
      )}
    </div>
  );
};

export default Layout;
