import React from "react";
import { FaHeart as Heart, FaPhone as Phone } from "react-icons/fa"; // Adjust imports based on the icons you need

export const Footer = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id='contacts' className="bg-blue-900 text-white py-12">
      {" "}
      {/* Changed to high-contrast background */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="text-yellow-400" />{" "}
              {/* Changed accent color for better visibility */}
              <span className="text-xl font-semibold">Aarogyam</span>
            </div>
            <p className="text-gray-300">
              Empowering rural communities with AI-powered healthcare solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200" onClick={() => scrollToSection('home')}>
                  {" "}
                  {/* Changed hover color for better contrast */}
                  Home
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200" onClick={() => scrollToSection('service')}>
                  {" "}
                  {/* Changed hover color for better contrast */}
                  Service
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200" onClick={() => scrollToSection('team')}>
                  {" "}
                  {/* Changed hover color for better contrast */}
                  Team
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-yellow-400 transition-colors duration-200" onClick={() => scrollToSection('contacts')}>
                  {" "}
                  {/* Changed hover color for better contrast */}
                  About
                </button>
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> +91 1234567890
              </p>
              <p>kunal.sinha2022@vitstudent.ac.in</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow" // Changed input background for contrast
              />
              <button className="bg-yellow-500 px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition-colors duration-200">
                {" "}
                {/* Changed button colors for contrast */}
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          © 2024 Aarogyam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


