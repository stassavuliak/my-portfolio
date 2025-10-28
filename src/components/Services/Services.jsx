import './Services.scss';

const Services = () => {
  return (
    <section className="section-services">
      <div className="container">
        <div className="heading">
          <h2>Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        </div>
        {/* heading */}

        <div className="services">
          <div className="services__wrap">
            <div className="services__item">
              <img src="images/icons/serv1.svg" alt="" />
              <b>UI/UX</b>
              <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>

            <div className="services__item">
              <img src="images/icons/serv2.svg" alt="" />
              <b>Web Design </b>
              <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>

            <div className="services__item">
              <img src="images/icons/serv3.svg" alt="" />
              <b>App Design</b>
              <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>

            <div className="services__item">
              <img src="images/icons/serv4.svg" alt="" />
              <b>Graphic Design </b>
              <p>Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;