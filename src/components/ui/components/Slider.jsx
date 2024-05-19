import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Slider = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 2,
      centeredSlides: true,
      effect: 'coverflow',
      coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="swiper-container w-800 h-400">
      <div className="swiper-wrapper">
        <div className="swiper-slide flex justify-center items-center text-2xl font-mono">
          Slide 1
        </div>
        <div className="swiper-slide flex justify-center items-center text-2xl font-mono">
          Slide 2
        </div>
        <div className="swiper-slide flex justify-center items-center text-2xl font-mono">
          Slide 3
        </div>
        <div className="swiper-slide flex justify-center items-center text-2xl font-mono">
          Slide 4
        </div>
        <div className="swiper-slide flex justify-center items-center text-2xl font-mono">
          Slide 5
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Slider;
