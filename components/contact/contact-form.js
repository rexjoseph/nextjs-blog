import classes from './contact-form.module.css'

function ContactForm() {
  return <section className={classes.section}>
    <h1>How can we help you?</h1>
    <form>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" required />
        </div>
      </div>
      <br></br>
      <div className={classes.control}>
        <label htmlFor="message">Your Message</label>
        <textarea id="message" rows="5"></textarea>
      </div>
      <br></br>
      <div className={classes.buttondiv}>
        <button>Send Message</button>
      </div>
    </form>
  </section>
}

export default ContactForm;