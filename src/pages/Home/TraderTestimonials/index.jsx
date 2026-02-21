import React from "react";
import { motion } from "framer-motion"; // 1. Import motion
import TraderCarousel from "./TraderCarousel";
// import TestimonialVideo from "../../../assets/images/home/trader_testimonials/testimonial_video_1.mp4";
import MainHeading from "../../../components/MainHeading";

const TraderTestimonials = () => {
  // 2. Define animation variants for cleaner code
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex justify-center my-12">
      <motion.div
        className="w-[90%] md:w-[85%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // 3. Triggers only once when 20% visible
      >
        {/* Animate Heading */}
        <motion.div variants={fadeInUp}>
          <MainHeading>TRADER STORIES</MainHeading>
        </motion.div>

        {/* Animate Subheading with a slight delay */}
        <motion.h2
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-center text-lg md:text-xl mb-8 text-zinc-400 leading-relaxed"
        >
          Meet the traders who transformed their trading journey with our
          funding programs and
          <br />
          <span className="font-bold text-white">
            turned skill into real results.
          </span>
        </motion.h2>

        {/* Animate Carousel container */}

        <TraderCarousel />
      </motion.div>
    </div>
  );
};

export default TraderTestimonials;
