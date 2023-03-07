import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <a href={'/dorer/' + slide.id}>
            <img className="doorImage" src={slide.image} alt={slide.title} />
            </a>
          </SwiperSlide>
      ))}
    </Swiper>
  );
};
