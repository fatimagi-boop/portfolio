import "./Navbar.css";
const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
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
        </ul>
      </nav>
    </header>
  );
}