import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzkbnvn");
  if (state.succeeded) {
    return (<p>Thanks for joining!</p>)
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Enter Your Email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      {/* <textarea
        id="message"
        name="message"
      /> */}
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className='btn' disabled={state.submitting}>
        Contact Me
      </button>
    </form>
  );
}

export default ContactForm;