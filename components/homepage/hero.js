import Image from "next/image";

function Hero() {
  return (
    <section>
      <div>
        <Image src="" alt="A photo of Rex" width={300} height={300} />
      </div>
      <h1>Hi, I'm Rex</h1>
      <p>
        I blog about software engineering - especially MERN stack and Artificial
        Intelligence.
      </p>
    </section>
  );
}

export default Hero;
