import React, { useState } from "react";
import { FaHeart as Heart, FaTimes as X, FaBars as Menu } from "react-icons/fa";
import img2 from "../assets/img2.jpg";
import Aaarogyam from "../assets/aarogyam.png";
import colors from "./colors";
import "./HeroSection.css";
import { Link } from "react-scroll";

export const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900" id='home' >
      <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105">
              <img
                src={Aaarogyam} // Add the path to your Aarogyam logo here
                alt="Aarogyam Logo"
                className="w-16 h-16" // Adjust the size as needed
              />
              <span className="text-2xl font-semibold">Aarogyam</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="relative group hover:text-[#DAA520] transition-colors duration-200"
              >
                Home
                <div className="absolute inset-x-0 h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -bottom-1"></div>
              </button>
              <button
                onClick={() => scrollToSection('service')}
                className="relative group hover:text-[#DAA520] transition-colors duration-200"
              >
                Service
                <div className="absolute inset-x-0 h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -bottom-1"></div>
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="relative group hover:text-[#DAA520] transition-colors duration-200"
              >
                Team
                <div className="absolute inset-x-0 h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -bottom-1"></div>
              </button>
              <button
              onClick={() => scrollToSection('contacts')}
                className="relative group hover:text-[#DAA520] transition-colors duration-200"
              >
                Contacts
                <div className="absolute inset-x-0 h-0.5 bg-[#DAA520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -bottom-1"></div>
              </button>

            </div>



          </div>
        </div>
      </nav>
      <img
        src={img2}
        className="hero-image" // Apply the new class here
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <header className="absolute top-0 left-0 right-0 z-20">
        {/* If you have a separate Navbar component, you can include it here */}
        {/* <Navbar /> */}
      </header>
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
          <span className="font-bold text-yellow-400 ">Aarogyam</span>
          <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
            Digital healthcare at every village doorstep.
            <br />
          </h1>
          <a
            href="https://jatinkumar300403-aarogyam-app-rslaze.streamlit.app/" // Added the link here
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security feature
            className="block px-4 py-3 mt-10 text-lg font-bold text-gray- 800 uppercase bg-white rounded-lg hover:bg-gray-100"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
}