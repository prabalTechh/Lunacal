'use client';

import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SvgOne from './ui/SvgOne';
import SvgTwo from './ui/SvgTwo';
import Images from './Images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const WidTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5; // Assuming there are 5 slides

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="h-full w-full flex">
      <div className="absolute flex flex-col gap-20 pl-2 lg:pt-4 pt-20">
        <SvgOne />
        <SvgTwo />
      </div>
      <div className="w-full pb-3 pt-5 h-full flex flex-col items-center justify-center gap-6">
        <div className="w-full flex justify-between items-center px-8 lg:px-12 relative">
          <button className="lg:w-[149px] lg:h-[62px] px-4 py-2 rounded-2xl bg-[rgb(23,23,23)] text-white">
            Gallery
          </button>
          <div className="flex items-center lg:gap-8 gap-8">
            <button
              className="text-white text-[1px] rounded-full font-bold border-t-2 border-t-[#4F545A] shadow-lg shadow-gray-900 bg-[#4d5157] hidden sm:block"
              style={{
                width: '131.32px',
                height: '46px',
                background: '#4A4E54',
                boxShadow:
                  '-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25), 9px 10px 7.1px rgba(0, 0, 0, 0.4), inset 0px 0px 48.9064px rgba(255, 255, 255, 0.05), inset 0px 3.26043px 3.26043px rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(52.28px)',
                borderRadius: '104px',
              }}
            >
              + ADD IMAGE
            </button>
            <div className="flex items-center lg:gap-2 gap-1 text-sm text-gray-500">
              <button
                className="h-fit flex p-3 items-center justify-center rounded-full bg-gradient-to-b from-[#303439] to-[#161718]"
                onClick={handlePrevious}
                style={{
                  boxShadow:
                    'rgb(59, 71, 82) 0px 54px 55px, rgb(59, 71, 82) 0px -12px 30px, rgb(0, 0, 0) 2px 10px 30px, rgb(28,33,33) 10px 10px 29px, rgb(99, 112, 124) 0px -3px 5px',
                }}
              >
                <FaArrowLeft />
              </button>
              <button
                className="h-fit flex p-3 items-center justify-center rounded-full bg-gradient-to-b from-[#303439] to-[#161718]"
                onClick={handleNext}
                style={{
                  boxShadow:
                    'rgb(59, 71, 82) 0px 54px 55px, rgb(59, 71, 82) 0px -12px 30px, rgb(0, 0, 0) 4px 10px 30px, rgb(28, 33, 33) 0px 10px 29px, rgb(99, 112, 124) 0px -3px 5px',
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex-row flex flex-col  w-full  justify-center ">
          <Carousel className="w-full max-w-lg   overflow-hidden relative  ">
            <CarouselContent
              className="flex transition-transform duration-300 pl-2   w-full " 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className=" w-full md:basis-1/2 lg:basis-1/3 flex  "
                  style={{ margin: '0 2px' }} 
                >
                  <div className="py-2">
                    <Images />
                  </div>
                  
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WidTwo;
