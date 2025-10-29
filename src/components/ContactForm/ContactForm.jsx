import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.scss';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzkbnvn");

  return (
    <div className="form-wrap">
      {state.succeeded ? (
        <p>Thanks for joining!</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <input id="email" type="email" name="email" placeholder="Enter Your Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <button type="submit" className="btn" disabled={state.submitting}>
            Contact Me
          </button>
        </form>
      )}
    </div>
  );
}


export default ContactForm;