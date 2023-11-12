"use client";

import React from "react";
import Image from 'next/image';


import { CustomButton } from "..";

const MainstreamNews = () => {

  const handleScroll = () => {
    console.log("handle scroll");
  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h3 className="hero__title" onClick={handleScroll}>
          Новость дня. Автомобили в Узбекистане резко подешевели
        </h3>
      <CustomButton
        title="Открыть"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image 
          src="/hero.png" 
          alt="" 
          fill 
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain" 
          placeholder="blur"
          blurDataURL={'/hero.png'}

        />
          <div className="hero__image-overlay" />
          
        </div>
      </div>
    </div>
  )
};

export default MainstreamNews;
