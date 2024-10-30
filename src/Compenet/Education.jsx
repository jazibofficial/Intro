import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-cards'; // Import specific effect styles
import { EffectCards } from 'swiper/modules'; // Import the EffectCards module

function Education() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 py-10'>
      {/* Title Section */}
      <div className="edu text-3xl sm:text-4xl lg:text-5xl flex items-center justify-center font-bold mb-10">
        <i className="fas fa-graduation-cap mr-2"></i> Self-Education
      </div>

      {/* Swiper Section */}
      <div className="swiper-container mx-auto max-w-lg lg:max-w-4xl">
      <Swiper
  effect="cards"
  grabCursor={true}
  modules={[EffectCards]}
  className="mySwiper"
  slidesPerView={1} // Show one slide at a time initially
  spaceBetween={20}
  breakpoints={{
    640: {
      slidesPerView: 1, // 1 slide on small screens
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2, // 2 slides on tablets
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3, // 3 slides on desktops
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 4, // Ensure more space on larger screens (like Pro Max)
      spaceBetween: 50,
    },
  }}
>
  <SwiperSlide>
    <div className="bg-red-600 text-white hover:bg-black hover:text-red-600 transition-colors duration-300 ease-in-out p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl text-center text-sm sm:text-base lg:text-lg">
      <i className="fas fa-graduation-cap mr-2"></i><br />
      University of Central Punjab (UCP) <br />
      BS-Software Engineering (4th Semester)
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-red-600 text-white hover:bg-black hover:text-red-600 transition-colors duration-300 ease-in-out p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl text-center text-sm sm:text-base lg:text-lg">
      <i className="fas fa-book"></i><br />
      1 Courses: Arfa Cream Lahore <br />
      (Frontend Web)
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-red-600 text-white hover:bg-black hover:text-red-600 transition-colors duration-300 ease-in-out p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl text-center text-sm sm:text-base lg:text-lg">
      <i className="fas fa-book"></i><br />
      2 Courses: Nexusberry <br />
      (JavaScript in Frontend)
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-red-600 text-white hover:bg-black hover:text-red-600 transition-colors duration-300 ease-in-out p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl text-center text-sm sm:text-base lg:text-lg">
      <i className="fas fa-book"></i><br />
      3 Courses: Digital Pakistan <br />
      (React JS in Frontend)
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="bg-red-600 text-white hover:bg-black hover:text-red-600 transition-colors duration-300 ease-in-out p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl text-center text-sm sm:text-base lg:text-lg">
      <i className="fas fa-book"></i><br />
      4 Courses: Backend Continue <br />
      (MERN Stack)
    </div>
  </SwiperSlide>
</Swiper>

      </div>
    </div>
  );
}

export default Education;
