// src/components/Hero.jsx
import { motion } from "framer-motion";

const trustIcons = [
  { label: "React", icon: "⚛" },
  { label: "Development", icon: "⌘" },
  { label: "Figma", icon: "◆" },
  { label: "Branding", icon: "◈" },
  { label: "AI", icon: "✦" },
];

// signature element — pure CSS 3D rotating cube, no three.js needed
function FloatingCube() {
  const faceStyle =
    "absolute inset-0 border border-lime-300/25 bg-lime-300/[0.03] backdrop-blur-sm";
  return (
    <div
      className="absolute right-[6%] top-1/2 hidden -translate-y-1/2 md:block"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative h-40 w-40"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <div className={faceStyle} style={{ transform: "translateZ(80px)" }} />
        <div
          className={faceStyle}
          style={{ transform: "rotateY(180deg) translateZ(80px)" }}
        />
        <div
          className={faceStyle}
          style={{ transform: "rotateY(90deg) translateZ(80px)" }}
        />
        <div
          className={faceStyle}
          style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
        />
        <div
          className={faceStyle}
          style={{ transform: "rotateX(90deg) translateZ(80px)" }}
        />
        <div
          className={faceStyle}
          style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
        />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0d] text-white px-6 pt-40 pb-28 md:pt-48 md:pb-36">
      {/* ambient glow — lime accent, matches brand */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,255,61,0.18), transparent 70%)",
        }}
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "linear-gradient(180deg, #0a0a0d 0%, #0a0a0d 100%)",
            "linear-gradient(180deg, #0a0a0d 0%, #131316 100%)",
            "linear-gradient(180deg, #0a0a0d 0%, #0a0a0d 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <FloatingCube />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-lime-300"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Trusted by businesses worldwide to build scalable digital solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight"
        >
          Smart Digital Solutions
          <br />
          <span className="text-lime-300">for Modern Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/50"
        >
          We help brands grow with web, apps & marketing solutions across the
          globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="https://calendly.com/tcongsinfotech/30min"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-lime-300 px-7 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
          >
            Schedule Meeting
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#services"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
          >
            Services
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30"
        >
          {trustIcons.map((t, i) => (
            <motion.div
              key={t.label}
              className="flex items-center gap-2 text-sm"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            >
              <span className="text-lg">{t.icon}</span>
              {t.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
