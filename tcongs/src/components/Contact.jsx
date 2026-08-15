// src/components/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const points = [
  "You'll hear from us within one business day.",
  "We'll understand your goals and requirements.",
  "You'll receive a clear proposal with pricing & timeline.",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // hook up to backend/email service as needed
    console.log(form);
  };

  return (
    <section id="contact" className="bg-[#0a0a0d] px-6 py-28 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-lime-300">
            Contact us
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Let's Build Something You'll Be Proud Of
          </h2>
          <p className="mt-4 text-white/50">
            Have a project in mind? Whether you need a website, mobile app, or
            digital solution, our team is ready to turn your ideas into reality.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-lime-300/15 text-lime-300">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-white/40">
            Prefer email instead? Feel free to contact us directly.
            <br />
            <a
              href="mailto:info@tcongsinfotech.com"
              className="text-lime-300 hover:underline"
            >
              info@tcongsinfotech.com
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-7"
        >
          <div>
            <label className="mb-1.5 block text-sm text-white/60">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-[#0a0a0d] px-4 py-2.5 text-sm outline-none transition focus:border-lime-300/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-white/60">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-[#0a0a0d] px-4 py-2.5 text-sm outline-none transition focus:border-lime-300/50"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-white/60">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-[#0a0a0d] px-4 py-2.5 text-sm outline-none transition focus:border-lime-300/50"
              placeholder="Tell us about your project"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-lg bg-lime-300 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
          >
            Submit Inquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
