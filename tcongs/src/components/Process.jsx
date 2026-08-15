// src/components/Process.jsx

import { motion } from "framer-motion";
import { useTilt } from "../hooks/useTilt";

// Process Images
import discovery from "../assets/Discovery Business Market Analysis.jpg";
import planning from "../assets/Planning.jpg";
import design from "../assets/Design UIUX Branding.jpg";
import development from "../assets/Development Web App Development.jpg";
import testing from "../assets/quality.jpg";
import launch from "../assets/Launch.jpg";

const steps = [
  {
    n: "01",
    title: "Discovery",
    sub: "Business & Market Analysis",
    desc: "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation.",
    image: discovery,

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
    image: planning,

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
    image: design,

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
    image: development,

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
    image: testing,

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
    image: launch,

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
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.6,
        delay: (i % 3) * 0.08,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className="
        group relative overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.025]
        p-5
        transition-colors
        duration-500
        hover:border-lime-300/20
      "
    >
      {/* Mouse Glow */}
      <motion.div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            180px circle at ${glowX} ${glowY},
            rgba(200,255,61,0.12),
            transparent 70%
          )`,
        }}
      />

      <div className="relative">
        {/* IMAGE */}
        <div
          className="
            relative mb-6
            h-48
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-white/[0.03]
          "
        >
          <img
            src={step.image}
            alt={step.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Image Overlay */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-transparent
            "
          />

          {/* Step Number */}
          <span
            className="
              absolute
              right-4
              top-4
              rounded-full
              border border-white/10
              bg-black/40
              px-3
              py-1
              text-xs
              font-medium
              text-white/60
              backdrop-blur-md
            "
          >
            {step.n}
          </span>
        </div>

        {/* Icon + Number */}
        <div className="flex items-center justify-between">
          <div
            className="
              flex h-12 w-12
              items-center justify-center
              rounded-xl
              border border-lime-300/25
              bg-lime-300/10
              text-lime-300
              transition-all
              duration-300
              group-hover:border-lime-300/40
              group-hover:bg-lime-300/15
              group-hover:shadow-[0_0_25px_rgba(200,255,61,0.08)]
            "
          >
            {step.icon}
          </div>

          <span
            className="
              text-3xl
              font-bold
              text-white/[0.06]
              transition-colors
              duration-300
              group-hover:text-lime-300/10
            "
          >
            {step.n}
          </span>
        </div>

        {/* Content */}
        <h3
          className="
            mt-5
            text-xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-1
            text-sm
            font-medium
            text-lime-300/80
          "
        >
          {step.sub}
        </p>

        <p
          className="
            mt-3
            text-sm
            leading-6
            text-white/50
          "
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        bg-[#0a0a0d]
        px-6
        py-28
        text-white
        md:py-36
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[400px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-lime-300/[0.035]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-widest
              text-lime-300
            "
          >
            Our Process, Your Growth
          </p>

          <h2
            className="
              mt-3
              max-w-2xl
              text-3xl
              font-bold
              tracking-tight
              sm:text-4xl
              md:text-5xl
            "
          >
            From Idea to Scalable Digital Solution
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-white/50
              md:text-base
            "
          >
            At Tcongs Infotech, we follow a proven process to transform your
            ideas into high-performing digital products. From strategy to
            execution, we focus on delivering scalable and result-driven
            solutions.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {steps.map((step, i) => (
            <StepCard key={step.n} step={step} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
