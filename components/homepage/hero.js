import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.section}>
      <span>The blog</span>
      <h1>Writings from our team</h1>
      <p>
        The latest industry news, interviews, technologies, and resources.
      </p>
    </section>
  );
}

export default Hero;
