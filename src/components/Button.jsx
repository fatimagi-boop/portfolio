export default function Button({ text, href }) {
  return <a className="btn" href={href}>{text}</a>;
}