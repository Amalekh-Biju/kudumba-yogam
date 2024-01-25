import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './home.css';
import slide_image_1 from '../../assets/images/slide1.jpg';
import slide_image_2 from '../../assets/images/slide2.jpg';
import slide_image_3 from '../../assets/images/slide3.jpg';
import slide_image_4 from '../../assets/images/slide4.jpg';
Swiper.modules = [Navigation, Pagination, Scrollbar, A11y];


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
        pagination={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide_image_1} alt="Slide 1" className="slide-image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_2} alt="Slide 2" className="slide-image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_3} alt="Slide 3" className="slide-image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_4} alt="Slide 4" className="slide-image" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home