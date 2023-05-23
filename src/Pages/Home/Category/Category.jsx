import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-8"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-4xl text-center text-white font-bold -mt-14 uppercase">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-4xl text-center text-white font-bold -mt-14 uppercase">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-4xl text-center text-white font-bold -mt-14 uppercase">Desert</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-4xl text-center text-white font-bold -mt-14 uppercase">Cake</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-4xl text-center text-white font-bold -mt-14 uppercase">Desert</h3>
      </SwiperSlide>
  
    </Swiper>
  );
};

export default Category;