import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AddToCartButton from "../AddToCartButton";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Autoplay, Navigation]);

const Carousel = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Best selling phones by user reviews
      </h1>
      <Swiper
        className="swiper-container-products"
        spaceBetween={3}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 1500 }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <Link to="/product/:id">
              <img
                className="product-image"
                src="/apple-iphone-11-dual-esim-64gb-4gb-ram-black.jpg"
                alt="img"
              />
              <h4 className="product-name">Apple iPhone 11 64GB Black</h4>
            </Link>
            <h3 className="product-price">$ 12321</h3>
            <AddToCartButton />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
