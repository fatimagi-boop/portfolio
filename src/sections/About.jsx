import { skills } from "../data/skills";
import "./About.css";

export default function About() {
    return (
        <section id="about">
            <h2>About me</h2>
            <div className="about">
                <img
                className="about-photo"
                src="/images/me.jpg"
                alt="portfolio of Fati"
                />
                <div>
            
                 <p>
                  Hi, I'm Fatima a student in computer science 
                    
                 </p>
                  <ul className ="skills">
                  {skills.map((skill)=>(
                    <li key={skill}>{skill}</li>
                   ))}
                  </ul>
                 </div>
            </div>

        </section>
    );
}