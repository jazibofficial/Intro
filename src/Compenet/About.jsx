import React from 'react';

function About() {
  
  return (
    <div className="relative bg-[url('./img/jazii.jpeg')] bg-cover bg-[center_top] bg-no-repeat bg-fixed h-[500px] w-full">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
      
      <div className=" z-10 text absolute bottom-[15px] left-0 right-[32%] flex flex-col items-center justify-center p-4 text-center space-y-4">
        <p className="text-lg font-medium text-white">About My Self</p>
        <h1 className="text-[rgb(255,0,0)] text-4xl md:text-6xl lg:text-6xl font-bold">
          I'm a Developer <br /> JazibTech
        </h1>
        <p className="text-base md:text-lg lg:text-2xl text-white max-w-[80%] md:max-w-[60%]">
          Jazib is a dedicated web developer who transforms innovative ideas into, functional websites.
        </p>
        <button className="bg-[rgb(255,0,0)] text-white px-6 py-3 rounded-full text-sm md:text-base lg:text-lg hover:bg-[rgb(149,1,1)] transition duration-300 ease-in-out">
          About Me
        </button>
      </div>
    </div>
  );
}



export default About;
