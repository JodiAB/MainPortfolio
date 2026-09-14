import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const change = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setFeedback(null);
    try {
      await emailjs.send(
        "service_63gz2xs",
        "template_ohw15fy",
        {
          from_name: form.name,
          to_name: "Jodi",
          from_email: form.email,
          to_email: "jodiabrahams9@gmail.com",
          message: form.message,
        },
        "Vx50QTme9PSXQ21ZH",
      );
      setForm({ name: "", email: "", message: "" });
      setFeedback({
        type: "success",
        text: "Your message has been sent. Thanks for getting in touch!",
      });
    } catch {
      setFeedback({
        type: "danger",
        text: "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      tabIndex={-1}
      id="contact"
      className="c-space section-spacing contact-section"
    >
      <div className="surface contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Have a role or product in mind?</p>
          <h2 className="text-heading">Let’s Talk</h2>
          <p>
            Whether you’re hiring for a development role, looking for a
            technical collaborator, or building a product that needs thoughtful
            engineering, I’d be glad to connect.
          </p>
          <a className="text-link" href="mailto:jodiabrahams9@gmail.com">
            jodiabrahams9@gmail.com ↗
          </a>
        </div>
        <form onSubmit={submit} aria-busy={loading}>
          <div role="status" aria-live="polite">
            {feedback && (
              <p className={`form-feedback ${feedback.type}`}>
                {feedback.text}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="field-label" htmlFor="contact-name">
              Full name
            </label>
            <input
              className="field-input"
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={change}
              required
            />
          </div>
          <div className="mb-5">
            <label className="field-label" htmlFor="contact-email">
              Email
            </label>
            <input
              className="field-input"
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={change}
              required
            />
          </div>
          <div className="mb-5">
            <label className="field-label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              className="field-input"
              id="contact-message"
              name="message"
              rows="5"
              placeholder="Tell me about the role, project or problem you’re working on…"
              value={form.message}
              onChange={change}
              required
            />
          </div>
          <button
            className="button button-primary w-full disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
