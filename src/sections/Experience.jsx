import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ul className="timeline">
        {experience.map((item) => (
          <li key={item.id}>
            <strong>{item.year}</strong> · {item.title}
            <br />
            <small>{item.place}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}