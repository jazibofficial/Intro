import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className="container p-[155px]">
      <>
  
      <h1 className='flex items-center justify-center p-6  text-4xl font-bold text-center'>
  VIEWED MY LATEST PROJECTS
</h1>
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        
          {/* First Slide - Dice-Roll Project */}
          <SwiperSlide className="relative group">
            <img
              src="./img/lodo.webp"
              alt="Dice-Roll Project"
              className="w-full h-full object-cover"
              onClick={() => navigateTo('https://dicegame-pyt3.vercel.app/')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </SwiperSlide>

          {/* Second Slide - Quiz-Game Project */}
          <SwiperSlide className="relative group">
            <img
              src="./img/quiz.webp"
              alt="Quiz-Game Project"
              className="w-full h-full object-cover"
              onClick={() => navigateTo('https://quiz-game-eight-theta.vercel.app/')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </SwiperSlide>

          {/* Third Slide - Shopping-Store Project */}
          <SwiperSlide className="relative group">
            <img
              src="./img/shop.png"
              alt="Shopping-Store Project"
              className="w-full h-full object-cover"
              onClick={() => navigateTo('https://shopping-store-pink.vercel.app/')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </SwiperSlide>

          {/* Fourth Slide - Weather-App Project */}
          <SwiperSlide className="relative group">
            <img
              src="./img/wea.png"
              alt="Weather-App Project"
              className="w-full h-full object-cover"
              onClick={() => navigateTo('https://weather-app-sigma-woad-96.vercel.app/')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </SwiperSlide>

          {/* Fifth Slide - Foody-Zone Project */}
          <SwiperSlide className="relative group">
            <img
              src="./img/foodyyy.png"
              alt="Foody-Zone Project"
              className="w-full h-full object-cover"
              onClick={() => navigateTo('https://fooda-jazibofficials-projects.vercel.app/')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          </SwiperSlide>
        </Swiper>

        {/* Project Buttons */}

        <div className="btn mt-14">
        <div className="append-buttons mt-5">
          <button onClick={() => navigateTo('https://dicegame-pyt3.vercel.app/')} className="prepend-2-slides ">
            Dice-Roll Project
          </button>
          <button  onClick={()=>navigateTo('https://quiz-game-eight-theta.vercel.app/')} className="prepend-slide">
            Quiz-Game Project
          </button>
          <button onClick={() => navigateTo('https://shopping-store-pink.vercel.app/')} className="append-slide">
            Shopping-Store Project
          </button>
          <button onClick={() => navigateTo('https://weather-app-sigma-woad-96.vercel.app/')} className="append-2-slides ">
            Weather-App Project
          </button>
          <button  onClick={() => navigateTo('https://fooda-jazibofficials-projects.vercel.app/')} className="append-2-slides">
            Foody-Zone Project
          </button>
        </div>
        </div>
      </>
    </div>
  );
}
