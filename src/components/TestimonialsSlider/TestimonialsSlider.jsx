import { Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialsSlider.scss';

import testimonialsData from '../../data/testimonials.json'

const TestimonialsSlider = () => {
  return (
    <Swiper
      pagination={true}
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoHeight={true}
      // autoplay={{
      //   // delay: 3500,
      //   disableOnInteraction: false
      // }}
    >

      {testimonialsData.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonials__slide">
            <img src={testimonial.img} className="testimonials__img" alt={testimonial.name} />
            <div className="testimonials__info">
              <p>{testimonial.text}</p>
              <b>{testimonial.name}</b>
              <span>{testimonial.role}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider;