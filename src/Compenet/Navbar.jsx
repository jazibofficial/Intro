import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="flex items-center justify-between text-center fixed z-50  text-[rgb(255,0,0)] bg-black p-[5px] h-15 w-full font-serif"> {/* Set full width */}
      <div className="logo flex shrink-0">
        <img src="./img/logo.png" className="h-[64px] w-auto" alt="Logo" /> {/* Logo height set to 64px */}
      </div>

      <div className="list flex space-x-7">
    

        <a href="Home" className="text-lg hover:text-[rgb(149,1,1)] transition duration-300 ease-in-out hover:bg-[rgb(149,1,1)] hover:text-white rounded-full p-2">Home</a>
        <a href="Aboutus" className="text-lg hover:text-[rgb(149,1,1)] transition duration-300 ease-in-out hover:bg-[rgb(149,1,1)] hover:text-white rounded-full p-2">Aboutus</a>
        <a href="Portflio" className="text-lg hover:text-[rgb(149,1,1)] transition duration-300 ease-in-out hover:bg-[rgb(149,1,1)] hover:text-white rounded-full p-2">Portflio</a>
        <a href="Services" className="text-lg hover:text-[rgb(149,1,1)] transition duration-300 ease-in-out hover:bg-[rgb(149,1,1)] hover:text-white rounded-full p-2">Services</a>
        <a href="Projects" className="text-lg hover:text-[rgb(149,1,1)] transition duration-300 ease-in-out hover:bg-[rgb(149,1,1)] hover:text-white rounded-full p-2">Projects</a>
      </div>

      <div className="contacts flex shrink-0">
        <a href="Contacts" className="text-lg transition duration-300 ease-in-out hover:bg-[rgb(149,1,1)] hover:text-white rounded-full p-2">Contacts</a>
      </div>
    </div>
  );
}

export default Navbar;
