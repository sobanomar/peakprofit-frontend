import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";

const MobileHorizontalFeatures = ({ features, cardVariants }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], () => {
    if (!trackRef.current) return 0;
    const trackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    return -(trackWidth - viewportWidth);
  });

  if (!isMobile) return null;

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh]" // controls how long scroll is locked
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-6">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              cardVariants={cardVariants}
              feature={feature}
              index={i}
              className="min-w-[85vw]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHorizontalFeatures;
