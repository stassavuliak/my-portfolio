import TestimonialsSlider from "../TestimonialsSlider/TestimonialsSlider";
import './Testimonials.scss';


const Testimonials = () => {
  return (
    <section className="section-testimonials">
      <div className="container">
        <div className="heading">
          <h2>Testimonials</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        </div>
        {/* heading */}

        <div className="testimonials">
          <TestimonialsSlider></TestimonialsSlider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;