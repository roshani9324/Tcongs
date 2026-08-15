// src/components/Process.jsx
import { motion } from "framer-motion";
import { useTilt } from "../hooks/useTilt";

const steps = [
  {
    n: "01",
    title: "Discovery",
    sub: "Business & Market Analysis",
    desc: "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <circle cx="10" cy="10" r="6" />
        <path d="M20 20l-5.5-5.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Planning",
    sub: "Strategy & Architecture",
    desc: "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path d="M4 19V6a1 1 0 011-1h11l4 4v10a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
        <path d="M9 9h6M9 13h6M9 17h3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Design",
    sub: "UI/UX & Branding",
    desc: "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="14" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Development",
    sub: "Web & App Development",
    desc: "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path
          d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    n: "05",
    title: "Testing",
    sub: "Quality Assurance",
    desc: "We test every feature to ensure performance, security, and usability across all devices before launch.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "06",
    title: "Launch & Growth",
    sub: "Deployment & Marketing",
    desc: "After launch, we help you scale with SEO, digital marketing, and continuous optimization to grow your business online.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-7 w-7"
      >
        <path d="M12 2c2 2 3 5 3 8 0 2-1 4-3 6-2-2-3-4-3-6 0-3 1-6 3-8z" />
        <path d="M9 15l-3 5M15 15l3 5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function StepCard({ step, i }) {
  const { ref, rotateX, rotateY, glowX, glowY, onMouseMove, onMouseLeave } =
    useTilt(10);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (i % 3) * 0.08 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(180px circle at ${glowX} ${glowY}, rgba(200,255,61,0.12), transparent 70%)`,
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-lime-300/25 bg-lime-300/10 text-lime-300">
            {step.icon}
          </div>
          <span className="text-3xl font-bold text-white/10">{step.n}</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
        <p className="text-sm font-medium text-lime-300/80">{step.sub}</p>
        <p className="mt-2 text-sm text-white/50">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="bg-[#0a0a0d] px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-lime-300">
          Our Process, Your Growth
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl font-bold tracking-tight">
          From Idea to Scalable Digital Solution
        </h2>
        <p className="mt-4 max-w-2xl text-white/50">
          At Tcongs Infotech, we follow a proven process to transform your ideas
          into high-performing digital products. From strategy to execution, we
          focus on delivering scalable and result-driven solutions.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <StepCard key={s.n} step={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
