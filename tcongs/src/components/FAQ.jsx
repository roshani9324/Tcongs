// src/components/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does Tcongs Infotech offer?",
    a: "We offer web development, mobile app development, custom software solutions, eCommerce management, and digital marketing services to help businesses grow online.",
  },
  {
    q: "How long does it take to build a website or app?",
    a: "The timeline depends on project complexity. A basic website may take 7–15 days, while advanced platforms or mobile apps can take 3–8 weeks or more.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients from the USA, Canada, Dubai, and globally. We provide remote support and communication throughout the project.",
  },
  {
    q: "Can you help grow my business after development?",
    a: "Yes, we offer SEO, digital marketing, and marketplace management services to help you generate leads, increase traffic, and boost sales.",
  },
  {
    q: "What makes Tcongs Infotech different?",
    a: "We focus on complete business solutions — not just development. From idea to execution and marketing, we help you build, launch, and scale successfully.",
  },
  {
    q: "How can I get started?",
    a: "Simply click on “Book a Free Call 🚀”, share your requirements, and our team will guide you with the best solution for your business.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#0a0a0d] px-6 py-28 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-lime-300">
          FAQs
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
          Questions? We've Got Answers
        </h2>
        <p className="mt-4 text-white/50">
          Tcongs Infotech helps businesses grow with web development, mobile apps,
          eCommerce solutions, and digital marketing. Here are answers to common
          questions from our clients.
        </p>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="ml-4 text-2xl text-lime-300"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-white/50">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          
         <a   href="https://calendly.com/tcongsinfotech/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-lime-300 px-7 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
          >
            Book a Free Call 🚀
          </a>
        </div>
      </div>
    </section>
  );
}