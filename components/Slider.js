import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <p className="doorTitle">{slide.title}</p>
          <a href={'/dorer/' + slide.id}>
            <Image className="doorImage" src={slide.image} alt={slide.title} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
