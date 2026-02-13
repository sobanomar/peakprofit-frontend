import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ value, duration = 2, showPlus = false }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  const elementRef = useRef(null);
  const [hasRun, setHasRun] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [displayValue, setDisplayValue] = useState("0"); // Local state for rendering

  // Sync the motion value to local state for rendering
  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          animate(count, value, {
            duration,
            ease: "easeOut",
            onComplete: () => setIsComplete(true),
          });
          setHasRun(true);
        }
      },
      { threshold: 0.1 },
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [value, count, duration, hasRun]);

  return (
    <span ref={elementRef}>
      {displayValue}
      {showPlus && isComplete && (
        <motion.span
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="ml-1"
        >
          +
        </motion.span>
      )}
    </span>
  );
};

export default AnimatedCounter;
