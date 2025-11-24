import React, { useState } from "react";
import logo from "../assets/MyImage/myLogo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full h-12 items-center top-0 left-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.8)]">
      <nav className="max-w-7xl h-12 mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-6 w-14" src={logo} alt="My Portfolio Logo" />
        </div>

        
        <ul className="hidden md:flex items-center gap-8 text-lg font-semibold text-white">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#profile" className="hover:text-blue-600">MySkills</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

     
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Slide-In Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-30 bg-black/60 backdrop-blur-sm  shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-white font-semibold text-base">
          <li><a href="#home" className="hover:text-blue-600" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-blue-600" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" className="hover:text-blue-600" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#profile" className="hover:text-blue-600" onClick={() => setOpen(false)}>MySkills</a></li>
          <li><a href="#contact" className="hover:text-blue-600" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
