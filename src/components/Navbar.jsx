import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header>
      <nav>
        <a href="#hero">Fati</a>
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
          <li>
            <button onClick={toggle} aria-label="Toggle theme">
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}