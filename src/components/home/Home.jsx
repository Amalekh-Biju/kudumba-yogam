import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper/core';

import './home.css';
import slide_image_1 from '../../assets/images/slide1.jpg';
import slide_image_2 from '../../assets/images/slide2.jpg';
import slide_image_3 from '../../assets/images/slide3.jpg';
import slide_image_4 from '../../assets/images/slide4.jpg';
import  { Navigation, Pagination, Autoplay } from 'swiper/modules';


// install Swiper modules
SwiperCore.use([Autoplay, Navigation,Pagination ]);

function Home() {
  return (
    <div className="home">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide><img src={slide_image_1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_4} alt="Slide 4" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;