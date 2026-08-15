// src/components/MidCTA.jsx
import { motion } from "framer-motion";

export default function MidCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0d] px-6 py-24 text-white">
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,61,0.15), transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-16 text-center md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Build. Scale. <span className="text-lime-300">Grow</span> Your Digital
          Business.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-xl text-white/50"
        >
          At Tcongs Infotech, we deliver powerful web, app, and marketing
          solutions designed to help your business grow faster, scale smarter,
          and succeed globally.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="rounded-full bg-lime-300 px-8 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
        >
          Start Your Project 🚀
        </motion.a>
      </div>
    </section>
  );
}
