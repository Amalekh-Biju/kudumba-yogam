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
      <div className="text-after-swiper">
        <h1>വേരുകൾ തേടി...</h1>
        <p>കേരളത്തിൽ ആദിമ ക്രൈസ്തവ സമൂഹം രൂപപ്പെട്ട കൊടുങ്ങല്ലൂരിൽ നിന്നു തന്നെയാണ് പട്ടണത്ത് പാറങ്കി കുടുംബത്തിന്റെ ഉത്ഭവവും. 
          ചരിത്രപരമായ പല കാരണങ്ങളാൽ കൊടുങ്ങല്ലൂർ നിന്നും മാറി താമസിച്ച വർക്കിയും അദ്ദേഹത്തിന്റെ നാല് മക്കളും ഈ കുടുംബത്തിന്റെ 
          വംശാവലിയിൽ ആദ്യ കണ്ണികളായി കരുതപ്പെടുന്നു.നാല് മക്കളിൽ ഒരാൾ കോട്ടപ്പടിയിൽ താമസിച്ചു. അയാളുടെ കുടുംബം പുതുക്കുന്നത്ത് 
          എന്ന് അറിയപ്പെട്ടു. മറ്റൊരാൾ കോതമംഗലത്തു താമസിച്ചു. അയാളുടെ തലമുറ പാറങ്കി എന്ന് അറിയപ്പെട്ടു.വടക്കൻ പറവൂർ അടുത്ത് പട്ടണം 
          ( ഇന്ന് ഇത് പഷ്ണം എന്ന് അറിയപ്പെടുന്നു.) എന്ന ഗ്രാമത്തിൽ നിന്ന് പോന്നതിനാൽ ഈ കുടുംബം പട്ടണത്ത് പാറങ്കി എന്ന് അറിയപ്പെട്ടു.
          ചരിത്രരേഖകളിൽ   കോതമംഗലം വലിയപള്ളിയിൽ പട്ടണത്ത് കുടുംബവും പട്ടണത്ത് പുതുക്കുന്നത്ത്‌ കുടുംബവും അംഗങ്ങളായിരുന്നു എന്ന് 
          തെളിയുന്നു. എന്നാൽ കൂനൻ കുരിശു സത്യത്തിനു ശേഷം പുതുക്കുന്നത്ത് കുടുംബം യാക്കോബായ വിശ്വാസവും പാറങ്കി കുടുംബം
           കത്തോലിക്കാ വിശ്വാസവും സ്വീകരിച്ചു.കുന്തിരിക്കം, ചെഞ്ചിര എന്നും അർത്ഥമുള്ള പാലങ്കി ആണ് പിന്നീട് പാറങ്കി ആയത്.
        </p>
        <br /><br />
        <p>പട്ടണത്ത് പാറങ്കി കുടുംബത്തിലെ മഹാപൂർവികനായ വർക്കിയുടെ മൂന്ന് ആൺമക്കളായിരുന്നു വർക്കി, ഇട്ടിയവിര, കുര്യൻ. 
          വർക്കിയുടെ പിൻതലമുറ പട്ടണത്ത് പാറങ്കിമാലിലും ഇട്ടിയവിരയുടെ കുടുംബക്കാർ പട്ടണത്ത് നെടുമ്പുറത്ത് എന്നും കുര്യന്റെ മക്കളും 
          പിൻതലമുറയും പട്ടണത്ത് കോയിക്കകുടി എന്നും കാലാന്തരത്തിൽ അറിയപ്പെട്ടു.
        </p>
      </div>
      
    </div>
  );
}

export default Home;