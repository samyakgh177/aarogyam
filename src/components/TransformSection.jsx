import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import colors from "./colors"; // Adjust the path as necessary

export const TransformSection = () => {
  return (
    <div
      className="py-16"
      style={{
        background: `linear-gradient(to bottom, #FAF3E0 0%, #FAF3E0 40%, #1e40af 90%, #1e3a8a 100%)`,
      }}
      
      
      
      
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center text-gray-800">
          <FaHeartbeat className="mr-2 text-4xl text-yellow-500" />
          Ready to Transform Rural Healthcare?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-700">
          Join us in our mission to bring quality healthcare to every corner of
          rural India.
        </p>
        <button
          className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold 
          hover:bg-yellow-400 transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          style={{ backgroundColor: colors.accent }} // Use accent color for the button
        >
          Join Our Mission
        </button>
      </div>
    </div>
  );
};


