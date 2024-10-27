import React from 'react';

// Robot Component
const AnimatedRobot = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-32 h-32 bg-gray-400 rounded-lg relative animate-bounce">
        {/* Head */}
        <div className="w-24 h-24 bg-gray-500 rounded-full absolute top-0 left-4 flex items-center justify-center">
          {/* Eyes */}
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>
        {/* Body */}
        <div className="w-20 h-20 bg-gray-600 rounded-md absolute top-24 left-6" />
        {/* Arms */}
        <div className="absolute top-16 left-0 w-20 h-2 bg-gray-600 animate-swing"></div>
        <div className="absolute top-16 right-0 w-20 h-2 bg-gray-600 animate-swing"></div>
        {/* Legs */}
        <div className="absolute bottom-0 left-6 w-8 h-16 bg-gray-500 rounded-md" />
        <div className="absolute bottom-0 right-6 w-8 h-16 bg-gray-500 rounded-md" />
      </div>
    </div>
  );
};

export default AnimatedRobot;
