import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 w-full bg-black text-[rgb(255,0,0)] font-serif">
 
      <div className="flex items-center justify-between p-3">
     
        <div className="logo">
          <img src="./img/logo.png" className="h-12 w-auto" alt="Logo" />
        </div>

        <div className="sm:hidden  text-white flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          
            <svg className="w-6 h-6 text-white " fill="currentColor"  viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

 
        <div className="hidden sm:flex items-center space-x-6">
          <a href="#Home" className="text-lg hover:bg-[rgb(149,1,1)] hover:text-white p-2 rounded-full">Home</a>
          <a href="#Aboutus" className="text-lg hover:bg-[rgb(149,1,1)] hover:text-white p-2 rounded-full">About Us</a>
          <a href="#Portflio" className="text-lg hover:bg-[rgb(149,1,1)] hover:text-white p-2 rounded-full">Portfolio</a>
          <a href="#Services" className="text-lg hover:bg-[rgb(149,1,1)] hover:text-white p-2 rounded-full">Services</a>
          <a href="#Projects" className="text-lg hover:bg-[rgb(149,1,1)] hover:text-white p-2 rounded-full">Projects</a>
          <a href="#Contacts" className="text-lg hover:bg-[rgb(149,1,1)] hover:text-white p-2 rounded-full">Contacts</a>
        </div>
      </div>

    
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-black text-white">
          <a href="#Home" className="p-3 w-full text-center border-t border-gray-700">Home</a>
          <a href="#Aboutus" className="p-3 w-full text-center border-t border-gray-700">About Us</a>
          <a href="#Portflio" className="p-3 w-full text-center border-t border-gray-700">Portfolio</a>
          <a href="#Services" className="p-3 w-full text-center border-t border-gray-700">Services</a>
          <a href="#Projects" className="p-3 w-full text-center border-t border-gray-700">Projects</a>
          <a href="#Contacts" className="p-3 w-full text-center border-t border-gray-700">Contacts</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
