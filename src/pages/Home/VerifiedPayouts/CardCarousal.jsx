import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

import verifiedPayout1 from "../../../assets/images/home/verified_payouts/5-3.webp";
import verifiedPayout2 from "../../../assets/images/home/verified_payouts/5-4.webp";
import verifiedPayout3 from "../../../assets/images/home/verified_payouts/5-5.webp";
import verifiedPayout4 from "../../../assets/images/home/verified_payouts/5-6.webp";
import verifiedPayout5 from "../../../assets/images/home/verified_payouts/5-11.webp";
import verifiedPayout6 from "../../../assets/images/home/verified_payouts/5-12.webp";
import verifiedPayout7 from "../../../assets/images/home/verified_payouts/5-13.webp";
import verifiedPayout8 from "../../../assets/images/home/verified_payouts/5-14.webp";
import verifiedPayout9 from "../../../assets/images/home/verified_payouts/5-15.webp";

const CardCarousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const verifiedPayouts = [
    verifiedPayout1,
    verifiedPayout2,
    verifiedPayout3,
    verifiedPayout4,
    verifiedPayout5,
    verifiedPayout6,
    verifiedPayout7,
    verifiedPayout8,
    verifiedPayout9,
  ];

  const duplicatedImages = [
    ...verifiedPayouts,
    ...verifiedPayouts,
    ...verifiedPayouts,
  ];

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;
  const cardWidth = isMobile ? 150 : 215;
  const totalWidth = duplicatedImages.length * cardWidth;
  const carouselWidth =
    typeof window !== "undefined" ? Math.min(window.innerWidth, 1152) : 1152;

  const customEasing = [0.25, 0.1, 0.25, 1.0];

  useEffect(() => {
    const preventImageDrag = (e) => {
      e.preventDefault();
      return false;
    };

    const images = document.querySelectorAll(".carousel-image");
    images.forEach((img) => {
      img.addEventListener("dragstart", preventImageDrag);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("dragstart", preventImageDrag);
      });
    };
  }, []);

  const handleUpdate = (latest) => {
    if (latest.x < -(cardWidth * verifiedPayouts.length * 2)) {
      x.set(latest.x + cardWidth * verifiedPayouts.length);
    } else if (latest.x > -(cardWidth * verifiedPayouts.length)) {
      x.set(latest.x - cardWidth * verifiedPayouts.length);
    }

    const newIndex =
      Math.round(Math.abs(latest.x) / cardWidth) % verifiedPayouts.length;
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.x;
    const offset = velocity * 0.2;

    const targetPosition =
      Math.round((x.get() + offset) / cardWidth) * cardWidth;

    controls.start({
      x: targetPosition,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 30,
        ease: customEasing,
      },
    });

    setIsDragging(false);
  };

  useEffect(() => {
    const autoScroll = () => {
      if (!isDragging) {
        const currentX = x.get();
        controls.start({
          x: currentX - cardWidth,
          transition: {
            duration: 3,
            ease: customEasing,
          },
        });
      }
    };

    const interval = setInterval(autoScroll, 3000);
    return () => clearInterval(interval);
  }, [cardWidth, controls, x, isDragging]);

  return (
    <div
      ref={carouselRef}
      className="relative w-full px-2 sm:px-4 md:px-0 max-w-6xl mx-auto mb-8 overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 md:w-60 bg-gradient-to-r from-[#130025] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 md:w-60 bg-gradient-to-l from-[#130025] to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex cursor-grab"
        style={{ x }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: -(totalWidth - carouselWidth), right: 0 }}
        onUpdate={handleUpdate}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        dragElastic={0.1}
        dragTransition={{
          bounceStiffness: 400,
          bounceDamping: 40,
          power: 0.2,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {duplicatedImages.map((image, index) => (
          <motion.div
            key={`image-${index}`}
            className="flex-shrink-0 w-36 sm:w-44 md:w-54 px-2"
            style={{ opacity: 1, scale: 1 }}
          >
            <div className="rounded-lg select-none">
              <img
                src={image}
                alt={`Verified payout ${(index % verifiedPayouts.length) + 1}`}
                className="w-full h-14 sm:h-16 md:h-24 object-cover rounded-lg carousel-image select-none"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardCarousel;
