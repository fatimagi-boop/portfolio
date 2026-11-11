import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (form.message.length < 10) next.message = "At least 10 characters";
    setErrors(next);

    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      setSent(false);
    }
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={onSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={form.email} onChange={onChange} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
      {sent && <p>Thank you! Your message was received.</p>}
    </section>
  );
}