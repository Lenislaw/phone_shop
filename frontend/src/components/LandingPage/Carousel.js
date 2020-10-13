import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "./Banner";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Pagination, Autoplay]);

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Banner
          xs={12}
          img={"/banner01.png"}
          slogan={"iPhone 11"}
          paragraf={"Just the right amount of everything"}
          link={"/products"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          xs={12}
          img={"/banner02.png"}
          slogan={"SUPER SALES"}
          paragraf={"Best prices"}
          link={"/sales"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          xs={12}
          img={"/banner03.png"}
          slogan={"CHECK OUR PRODUCTS"}
          paragraf={"XXX+ Phones in offer"}
          link={"/sales"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Banner
          xs={12}
          img={"/banner04.png"}
          slogan={"XIAOMI"}
          paragraf={"EACH BRAND PHONES"}
          link={"/products"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
