
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Form validated! Connect a form service to receive messages.");
  }

  return (
    <section className="section contact" id="contact">
      <p className="eyebrow">04 / CONTACT</p>

      <h2 className="section-title">
        Let's create <span>something great.</span>
      </h2>

      <p className="contact-intro">
        Have a project in mind? I'd love to hear about it.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Your name"
          aria-label="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Your email"
          aria-label="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          placeholder="Your message"
          aria-label="Your message"
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="btn primary" type="submit">
          Send Message ↗
        </button>

        {status && (
          <p className="form-status" role="status">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
