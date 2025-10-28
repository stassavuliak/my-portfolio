import ContactForm from '../ContactForm/ContactForm';
import './Form.scss';

const Form = () => {
  return (
    <section className="section-form">
      <div className="container">
        <div className="heading">
          <h2>Lets Design Together</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima error quia illum est praesentium delectus vel vitae totam quasi?</p>
        </div>
        {/* heading */}

        <ContactForm/>
      </div>
    </section>
  )
}

export default Form;