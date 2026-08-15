// src/components/Services.jsx
import { motion } from "framer-motion";

const services = [
  { tag: "FOR BUSINESSES", title: "Web & App Development" },
  { tag: "CUSTOM SOLUTIONS", title: "Software Development" },
  { tag: "ONLINE SELLERS", title: "E-commerce Solutions" },
  { tag: "GROWTH FOCUSED", title: "Digital Marketing" },
  { tag: "CREATIVE DESIGN", title: "Branding & UI/UX" },
  { tag: "SCALING BUSINESS", title: "Business Growth" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0d] px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-lime-300"
        >
          We are great at
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl md:text-5xl font-bold tracking-tight"
        >
          Digital Solutions & Development Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-white/50"
        >
          Scalable solutions for modern businesses
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-lime-300/30"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime-300/0 blur-2xl transition group-hover:bg-lime-300/10" />
              <span className="text-xs font-medium tracking-widest text-white/40">
                {s.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <div className="mt-6 flex items-center gap-1 text-sm text-lime-300 opacity-0 transition group-hover:opacity-100">
                Learn more <span aria-hidden>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
