import React from 'react';

function Footer() {
  return (
    <div className='bg-black flex flex-col items-center justify-center p-8'>
      {/* Grid Layout with responsive controls */}
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 text-left sm:text-center sm:justify-center sm:w-[100]'>
        
        {/* Logo Section */}
        <div className="logo flex justify-start sm:justify-center">
          <img src="./img/logo.png" className="h-16 w-auto sm:h-24 md:h-36" alt="Logo" /> 
        </div>

        {/* Contact Us Section */}
        <div className='text-[rgb(255,0,0)] mt-10 sm:mt-0 sm:ml-0 lg:ml-16'>
          <h1 className='flex justify-start sm:justify-center font-bold text-lg sm:text-xl md:text-2xl'>
            <i className="fas fa-phone mr-2 text-white"></i> Contact Us
          </h1>
          <p className="text-white"><i className="fas fa-phone mr-2"></i> +92187364391</p>
          <a href="https://www.linkedin.com/in/muhammad-jazib-ali-Sher-433b962b9" className="text-white block mt-2">
            <i className="fab fa-linkedin mr-2"></i> LinkedIn: (muhammadjazibalisher)
          </a>
          <p className="text-white mt-2"><i className="fas fa-map-marker-alt mr-2"></i> Lahore: Joher-Town</p>
          <p className="text-white mt-2"><i className="fas fa-calendar-day mr-2"></i> Monday to Friday</p>
        </div>

        {/* Our Services Section */}
        <div className='text-[rgb(255,0,0)] mt-10 sm:mt-0 sm:ml-0 lg:ml-16'>
          <h1 className='flex justify-start sm:justify-center font-bold text-lg sm:text-xl md:text-2xl'>
            <i className="fas fa-briefcase mr-2 text-white"></i> OUR SERVICES
          </h1>
          <p className="text-white mt-2"><i className="fas fa-paint-brush mr-2"></i> Web Design</p>
          <p className="text-white mt-2"><i className="fas fa-chart-bar mr-2"></i> Branding webs</p>
          <p className="text-white mt-2"><i className="fas fa-search mr-2"></i> SEO</p>
          <p className="text-white mt-2"><i className="fas fa-images mr-2"></i> Graphics</p>
        </div>

        {/* Quick Links Section */}
        <div className='text-[rgb(255,0,0)] hover:text-white mt-10 sm:mt-0 sm:ml-0 lg:ml-16'>
          <h1 className='flex justify-start sm:justify-center font-bold text-lg sm:text-xl md:text-2xl'>
            <i className="fas fa-link mr-2 text-white"></i> Quick Links
          </h1>
          <p className="text-white mt-2"><i className="fas fa-home mr-2"></i> Home</p>
          <p className="text-white mt-2"><i className="fas fa-info-circle mr-2"></i> About Us</p>
          <p className="text-white mt-2"><i className="fas fa-briefcase mr-2"></i> Portfolio</p>
          <p className="text-white mt-2"><i className="fas fa-cogs mr-2"></i> Services</p>
          <p className="text-white mt-2"><i className="fas fa-project-diagram mr-2"></i> Projects</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
