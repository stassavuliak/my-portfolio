import CustomRangeSlider from "../../components/CustomRangeSlider/CustomRangeSlider";
import './About.scss'

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <div className="about">
          <div className="about__photo">
            <img src="images/img/hero2.png" alt="" />
          </div>
          {/* about photo */}

          <div className="about__info">
            <div className="heading">
              <h2>About Me</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
            </div>
            {/* heading */}

            <div className="about__skills">
              <div className="about__skills-item">
                <span>UX</span>
                <CustomRangeSlider defaultValue={90}/>
              </div>

              <div className="about__skills-item">
                <span>Website Design</span>
                <CustomRangeSlider defaultValue={86}/>
              </div>

              <div className="about__skills-item">
                <span>App Design </span>
                <CustomRangeSlider defaultValue={97}/>
              </div>

              <div className="about__skills-item">
                <span>Graphic Design </span>
                <CustomRangeSlider defaultValue={92}/>
              </div>
            </div>
          </div>
          {/* about info */}
        </div>
      </div>
    </section>
  )
}

export default About;