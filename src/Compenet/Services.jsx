import React from 'react';
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
    <div className="container px-4 md:px-20 lg:px-32 pt-36"> 
      <h1 id="Projects" className="flex items-center justify-center p-6 text-3xl md:text-4xl font-bold text-center">
        VIEW MY LATEST PROJECTS
      </h1>
      
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,  
          },
          768: {
            slidesPerView: 2,  
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="relative group">
          <img
            src="./img/lodo.webp"
            alt="Dice-Roll Project"
            className="w-full h-full object-cover"
            onClick={() => navigateTo('https://dicegame-pyt3.vercel.app/')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        </SwiperSlide>

        <SwiperSlide className="relative group">
          <img
            src="./img/quiz.webp"
            alt="Quiz-Game Project"
            className="w-full h-full object-cover"
            onClick={() => navigateTo('https://quiz-game-eight-theta.vercel.app/')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        </SwiperSlide>

        <SwiperSlide className="relative group">
          <img
            src="./img/shop.png"
            alt="Shopping-Store Project"
            className="w-full h-full object-cover"
            onClick={() => navigateTo('https://shopping-store-pink.vercel.app/')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        </SwiperSlide>

        <SwiperSlide className="relative group">
          <img
            src="./img/wea.png"
            alt="Weather-App Project"
            className="w-full h-full object-cover"
            onClick={() => navigateTo('https://weather-app-sigma-woad-96.vercel.app/')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        </SwiperSlide>

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

      <div className="btn mt-10 text-center">
        <button onClick={() => navigateTo('https://dicegame-pyt3.vercel.app/')} className="m-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
          Dice-Roll Project
        </button>
        <button onClick={() => navigateTo('https://quiz-game-eight-theta.vercel.app/')} className="m-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
          Quiz-Game Project
        </button>
        <button onClick={() => navigateTo('https://shopping-store-pink.vercel.app/')} className="m-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
          Shopping-Store Project
        </button>
        <button onClick={() => navigateTo('https://weather-app-sigma-woad-96.vercel.app/')} className="m-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
          Weather-App Project
        </button>
        <button onClick={() => navigateTo('https://fooda-jazibofficials-projects.vercel.app/')} className="m-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
          Foody-Zone Project
        </button>
      </div>
    </div>
  );
}
