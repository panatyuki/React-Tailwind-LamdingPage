// import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-700 p-4 sticky top-0">
      <div className="container mx-auto flex justify-around items-center">
        {/* Logo & Title */}
        <div className="flex flex-row items-center space-x-2">
          <img
            src="http://tech-pic.com/resources/materials/3/3/20_01_0003.png"
            alt="Logo"
            className="h-10"
          />
          <a href="#" className="text-white text-2xl font-semibold">
            <span className="text-cyan-300">React</span>
            <span> & </span>
            <span className="text-blue-400">Tailwind</span>
          </a>
        </div>

        <ul className="flex">
          <li className="space-x-4">
            <a href="#" className="text-white hover:text-green-500">
              Home
            </a>
            <a href="#" className="text-white hover:text-green-500">
              About
            </a>
            <a href="#" className="text-white hover:text-green-500">
              Services
            </a>
            <a href="#" className="text-white hover:text-green-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

