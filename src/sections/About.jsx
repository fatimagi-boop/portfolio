import { skills } from "../data/skills";

export default function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <p>Write a short bio about yourself here.</p>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}