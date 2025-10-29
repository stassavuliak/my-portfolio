import './Hero.scss';
import SocialLinks from '../../components/SocialLinks/SocialLinks';

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="hero">
          <div className="hero__info">
            <div className="hero__head">
              <div className="hero__name">Hi I am <span>Stanislav Savuliak</span></div>
              <h1>Front-end <span>Developer</span></h1>
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>

            <button className='btn hero__btn'>Hire Me</button>
          </div>
          {/* hero info */}

          <div className="hero__photo">
            <img src="images/img/hero1.png" className='hero__img' alt="" />

            <SocialLinks/>
          
          </div>
          {/* hero photo */}
        </div>
      </div>
    </section>
  )
}

export default Hero;