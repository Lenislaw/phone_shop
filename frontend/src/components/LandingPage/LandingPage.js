import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "./Banner";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Pagination, Autoplay]);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "150px 0 0 0",
    maxWidth: "1100px",
    margin: "0 auto",
    zIndex: "2",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
            slogan={"SUPER SALES"}
            paragraf={"Best prices"}
            link={"/sales"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            xs={12}
            img={"/banner04.png"}
            slogan={"XIAOMI"}
            paragraf={"BEST CHOICE"}
            link={"/products"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LandingPage;
