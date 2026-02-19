import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";

const MobileHorizontalFeatures = ({ features, cardVariants }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal shift. "-80%" is an estimate;
  // it depends on how many items you have and their width.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh]  ">
      <div className="sticky top-0 -mt-10  flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-[10vw] ">
          {features.map((feature, index) => (
            <div key={index} className="w-[75vw]   shrink-0">
              <FeatureCard
                key={index}
                cardVariants={cardVariants}
                feature={feature}
                index={index}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MobileHorizontalFeatures;
