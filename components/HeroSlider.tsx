"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide className="h-full flex justify-end pt-48">
        <div>
          <h1 className="h1 text-center lg:text-left mb-2">
            <span>Where hard</span> work meet success
          </h1>
          <p className="text-white italic text-center lg:text-left mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dolor
            quo tenetur.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
