import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

const Home = () => {
  console.log("Home");
  return (
    <>
      <main className="container">
        <div className="inner">
          {/* <h2>Home</h2> */}
          <section className="slide_main">
            <Swiper
              loop={true}
              // spaceBetween={50}
              // slidesPerView={3}
              // navigation
              // pagination={{ clickable: true }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img src="./assets/images/main_hubilon_01.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="./assets/images/main_Indoor-Positioning_02.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="./assets/images/main_bigdata_03.jpg" alt="" /></SwiperSlide>
              <SwiperSlide><img src="./assets/images/main_gis_04.jpg" alt="" /></SwiperSlide>
            </Swiper>
          </section>
          <section className="tit_main">
            <p>Hubilon, Technology that increases the value of your life</p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
