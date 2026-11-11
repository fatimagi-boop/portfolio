import Button from "../components/Button";

export default function Hero() {
  return (
    <section id="hero">
      <h1>Hi, I'm Fati</h1>
      <p>Frontend developer in progress.</p>
      <Button text="Projects" href="#projects" />
      <Button text="Contact" href="#contact" />
    </section>
  );
}