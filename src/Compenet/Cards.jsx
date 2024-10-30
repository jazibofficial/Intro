import React from 'react';

function Cards() {
  return (
    <div className='container'>
    <h1 className='text-2xl items-center text-center justify-center m-7 font-bold grid 
                whitespace-normal sm:whitespace-nowrap sm:text-3xl md:text-5xl'>
  Explore Our Best Services
</h1>




      <div className="bigcards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-auto  ">
        <div className="cards shadow-lg  rounded p-5 m-2 bg-[rgb(255,0,0)] text-white hover:bg-black hover:text-[rgb(255,0,0)] transition-colors duration-300 ease-in-out">
          <span className='flex justify-center p-2'>
            <i className="fa-solid fa-globe"></i>
          </span>
          <h1 className='font-bold text-2xl flex p-1 justify-center text-center items-center'>Web Development</h1>
          <p>I am passionate about web development, focusing on creating dynamic and responsive websites with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React and Tailwind CSS.</p>
        </div>

        <div className="cards shadow-lg rounded p-5 m-2 bg-[rgb(255,0,0)] text-white hover:bg-black hover:text-[rgb(255,0,0)] transition-colors duration-300 ease-in-out">
          <span className='flex justify-center p-2'>
            <i className="fa-solid fa-camera"></i>
          </span>
          <h1 className='font-bold text-2xl flex p-1 justify-center text-center items-center'>Photography</h1>
          <p>I have a keen interest in photography. Photography can span various fields, from portrait and landscape to product and fashion photography, and is widely used for both personal and commercial purposes.</p>
        </div>

        <div className="cards shadow-lg rounded p-5 m-2 bg-[rgb(255,0,0)] text-white hover:bg-black hover:text-[rgb(255,0,0)] transition-colors duration-300 ease-in-out">
          <span className='flex justify-center p-2'>
            <i className="fa-solid fa-pencil-ruler"></i>
          </span>
          <h1 className='font-bold text-2xl flex p-1 justify-center text-center items-center'>Web Designing (UI, UX)</h1>
          <p>I am also dedicated to enhancing user experiences through thoughtful UI/UX design, ensuring websites are not only visually appealing but also intuitive and user-friendly.</p>
        </div>

        <div className="cards shadow-lg rounded p-5 m-2 bg-[rgb(255,0,0)] text-white hover:bg-black hover:text-[rgb(255,0,0)] transition-colors duration-300 ease-in-out">
          <span className='flex justify-center p-2'>
            <i className="fa-solid fa-pen"></i>
          </span>
          <h1 className='font-bold text-2xl flex p-1 justify-center text-center items-center'>Content Strategy</h1>
          <p>I have a keen interest in content strategy. It is the planning, development, and management of content—whether written, visual, or multimedia. It involves understanding the target audience and setting goals for the content.</p>
        </div>

        <div className="cards shadow-lg rounded p-5 m-2 bg-[rgb(255,0,0)] text-white hover:bg-black hover:text-[rgb(255,0,0)] transition-colors duration-300 ease-in-out">
          <span className='flex justify-center p-2'>
            <i className="fa-solid fa-paint-brush"></i>
          </span>
          <h1 className='font-bold text-2xl flex p-1 justify-center text-center items-center'>Designing</h1>
          <p>I have a keen interest in design tools like Adobe Photoshop, Illustrator, and Figma to execute design ideas.</p>
        </div>

        <div className="cards shadow-lg rounded p-5 m-2 bg-[rgb(255,0,0)] text-white hover:bg-black hover:text-[rgb(255,0,0)] transition-colors duration-300 ease-in-out">
          <span className='flex justify-center p-2'>
            <i className="fa-solid fa-code"></i>
          </span>
          <h1 className='font-bold text-2xl flex p-1 justify-center text-center items-center'>Development Tech Programs</h1>
          <p>I am deeply committed to development technologies, with hands-on experience in building web applications using modern frameworks like React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
