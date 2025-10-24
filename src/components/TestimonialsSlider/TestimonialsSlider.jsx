// import Swiper core and required modules
import { Pagination, Autoplay} from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialsSlider.scss';

const TestimonialsSlider = () => {
  return (
    <Swiper
      pagination={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
    >


      <SwiperSlide>
        <div className="testimonials__slide">
          <img src="images/img/test1.png" className='testimonials__img' alt="" />
          <div className="testimonials__info">
            <p>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
            <b>Name</b>
            <span>CEO</span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonials__slide">
          <img src="images/img/test2.png" className='testimonials__img' alt="" />
          <div className="testimonials__info">
            <p>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
            <b>Name</b>
            <span>CEO</span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonials__slide">
          <img src="images/img/test1.png" className='testimonials__img' alt="" />
          <div className="testimonials__info">
            <p>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
            <b>Name</b>
            <span>CEO</span>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonials__slide">
          <img src="images/img/test2.png" className='testimonials__img' alt="" />
          <div className="testimonials__info">
            <p>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
            <b>Name</b>
            <span>CEO</span>
          </div>
        </div>
      </SwiperSlide>

      

   



    </Swiper>
  );
};

export default TestimonialsSlider;