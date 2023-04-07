import Logo from "../layout/logo";
import classes from "./footer.module.css"

const date = new Date().getFullYear()
function Footer() {
  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <h1 className={classes.title}>Let's get started on something great</h1>
        <p>Join over 4000+ startups already growing with Undercode.</p>
      </div>
      <div className={classes.bottom}>
        <Logo />
        <p className={classes.copy}>&copy; {date} Undercode. All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer;