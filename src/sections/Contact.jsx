import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(form);
    setSent(true);
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={form.email} onChange={onChange} />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
        />

        <button type="submit">Send</button>
      </form>
      {sent && <p>Thank you! Your message was received.</p>}
    </section>
  );
}