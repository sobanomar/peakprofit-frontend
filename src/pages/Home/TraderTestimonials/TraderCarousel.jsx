import React from "react";

// Import testimonial images
import Testimonial1 from "../../../assets/images/home/trader_testimonials/Group-23-1.webp";
import Testimonial2 from "../../../assets/images/home/trader_testimonials/Group-23-2.webp";
import Testimonial3 from "../../../assets/images/home/trader_testimonials/Group-23-3.webp";
import Testimonial4 from "../../../assets/images/home/trader_testimonials/Group-23-4.webp";
import Testimonial5 from "../../../assets/images/home/trader_testimonials/Group-23-5.webp";
import Testimonial6 from "../../../assets/images/home/trader_testimonials/Group-23-6.webp";
import Testimonial8 from "../../../assets/images/home/trader_testimonials/Group-23-8.webp";
import Testimonial9 from "../../../assets/images/home/trader_testimonials/Group-23-9.webp";
import AutoCarousel from "../../../components/AutoCarousel";
import { motion } from "framer-motion";

const TraderCarousel = () => {
  const testimonialImages = [
    Testimonial1,
    Testimonial2,
    Testimonial3,
    Testimonial4,
    Testimonial5,
    Testimonial6,
    Testimonial8,
    Testimonial9,
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        // This ensures the auto-scroll starts AFTER the fade is mostly done
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      // Adding a CSS mask creates a professional "fade-out" on the edges
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <AutoCarousel
        items={testimonialImages}
        renderItem={(image, index) => (
          <div className="w-64 h-64 mx-4">
            {" "}
            {/* Square container */}
            <img
              src={image}
              alt={`Trader testimonial ${index + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        )}
        direction="left"
        itemWidth={260} // Match the width of your square
        speed={4}
        gap={16} // Adjust gap between items
        pauseOnHover={false}
      />
    </motion.div>
  );
};

export default TraderCarousel;
