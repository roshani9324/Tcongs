import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      const interactive = target.closest(
        "a, button, input, textarea, select, [data-cursor]",
      );

      setHovering(Boolean(interactive));
    };

    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-32 w-32 rounded-full bg-[#c8ff3d]/5 blur-3xl md:block"
        animate={{
          x: position.x - 64,
          y: position.y - 64,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Main cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden items-center justify-center rounded-full md:flex"
        animate={{
          x: position.x,
          y: position.y,
          width: hovering ? 52 : 14,
          height: hovering ? 52 : 14,
          x: position.x - (hovering ? 26 : 7),
          y: position.y - (hovering ? 26 : 7),
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.35,
        }}
      >
        <div
          className={`h-full w-full rounded-full border transition-all duration-200 ${
            hovering
              ? "border-[#c8ff3d]/70 bg-[#c8ff3d]/10"
              : "border-[#c8ff3d] bg-[#c8ff3d]"
          }`}
        />

        {hovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute text-[9px] font-semibold uppercase tracking-wider text-[#c8ff3d]"
          >
            View
          </motion.span>
        )}
      </motion.div>

      {/* Click ripple */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden rounded-full border border-[#c8ff3d]/50 md:block"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          width: clicking ? 40 : 0,
          height: clicking ? 40 : 0,
          opacity: clicking ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
