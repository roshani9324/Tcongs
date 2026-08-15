import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.svg";

const navItems = ["Company", "Solutions", "Work", "About"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`
          fixed top-0 left-1/2 z-50
          flex h-[72px] w-[calc(100%-48px)]
          -translate-x-1/2 items-center justify-between
          px-5
          transition-all duration-500
          ${
            scrolled
              ? "mt-4 rounded-full border border-white/10 bg-[#0a0b0dcc] backdrop-blur-xl"
              : "mt-5"
          }
        `}
      >
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="Tcongs Infotech"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.08,
              }}
              className="
                group relative text-[13px] font-medium
                text-white/55 transition-colors
                hover:text-white
              "
            >
              {item}

              <span
                className="
                  absolute -bottom-2 left-0 h-px w-0
                  bg-[#c8ff3d]
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            hidden items-center gap-2 rounded-full
            bg-[#c8ff3d] px-5 py-3
            text-[13px] font-bold text-[#08090b]
            shadow-[0_0_0_rgba(200,255,61,0)]
            transition-shadow duration-300
            hover:shadow-[0_0_30px_rgba(200,255,61,0.18)]
            md:flex
          "
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </motion.a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full border border-white/10
            bg-white/5 text-white
            md:hidden
          "
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              fixed left-3 right-3 top-[88px] z-40
              rounded-3xl border border-white/10
              bg-[#0c0d0ff5] p-5
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex items-center gap-4
                    border-b border-white/10
                    py-5 text-xl font-semibold
                  "
                >
                  <span className="text-xs text-[#c8ff3d]">0{index + 1}</span>

                  {item}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-5 flex items-center
                  justify-between rounded-xl
                  bg-[#c8ff3d] px-5 py-4
                  font-bold text-[#08090b]
                "
              >
                Start a Project
                <ArrowUpRight size={19} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
