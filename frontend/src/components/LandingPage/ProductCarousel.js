import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AddToCartButton from "../AddToCartButton";
import Product from "../Product";
import { listTopProducts } from "../../actions/productActions";
import Spinner from "../Spinner";
import AlertMessage from "../AlertMessage";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Autoplay, Navigation]);

const Carousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    fetchTopProducts();
  }, [dispatch]);

  const fetchTopProducts = () => {
    dispatch(listTopProducts());
  };
  return loading ? (
    <Spinner />
  ) : error ? (
    <AlertMessage text={error} type={error} />
  ) : (
    <>
      <h1 style={{ textAlign: "center" }}>Best phones by User's reviews</h1>
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
        {products.map((product, index) => (
          <SwiperSlide key={`product-carusel-${product.id}-${index}`}>
            <div className="product">
              <Link to={`/product/${product._id}`}>
                <img className="product-image" src={product.image} alt="img" />
                <h4 className="product-name">{product.name}</h4>
              </Link>
              <h3 className="product-price">{product.price} $</h3>
              <AddToCartButton
                id={product._id}
                disabled={product.countInStock === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
