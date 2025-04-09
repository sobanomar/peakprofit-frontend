import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

/**
 * AutoCarousel - A smooth auto-scrolling carousel with no dragging or snapping
 *
 * @param {Object} props
 * @param {Array} props.items - Array of items to display in the carousel
 * @param {Function} props.renderItem - Function to render each item
 * @param {string} props.direction - Direction of scroll ('left', 'right')
 * @param {number} props.itemWidth - Width of each item in pixels
 * @param {number} props.speed - Speed factor (higher = faster)
 * @param {number} props.gap - Gap between items in pixels
 * @param {boolean} props.pauseOnHover - Whether to pause on hover
 */
const AutoCarousel = ({
  items = [],
  renderItem,
  direction = "left",
  itemWidth = 200,
  speed = 25,
  gap = 16,
  pauseOnHover = false,
}) => {
  const carouselRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimationControls();
  const isReverse = direction === "right";

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial measurement
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate number of items needed
  const viewportWidth =
    containerWidth || typeof window !== "undefined" ? window.innerWidth : 1200;
  const itemsPerScreen = Math.ceil(viewportWidth / (itemWidth + gap)) + 1;
  const minItemsNeeded = Math.max(items.length, itemsPerScreen * 2);

  // Generate enough copies of items to fill viewport
  const repeats = Math.ceil(minItemsNeeded / items.length);
  const displayItems = Array.from({ length: repeats }, () => [...items]).flat();

  // Total width of all items
  const totalWidth = items.length * (itemWidth + gap);

  // Animation duration (lower = faster)
  const duration = totalWidth / (speed * 10);

  // Setup animation
  useEffect(() => {
    // Only start animation when we have a valid container width
    if (!containerWidth) return;

    const startAnimation = () => {
      const xFrom = isReverse ? -totalWidth : 0;
      const xTo = isReverse ? 0 : -totalWidth;

      controls.start({
        x: xTo,
        transition: {
          from: xFrom,
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        },
      });
    };

    startAnimation();

    // Setup pause on hover
    if (pauseOnHover && carouselRef.current) {
      const element = carouselRef.current;

      const handleMouseEnter = () => controls.stop();
      const handleMouseLeave = () => startAnimation();

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [containerWidth, controls, totalWidth, duration, isReverse, pauseOnHover]);

  return (
    <div
      ref={carouselRef}
      className="relative w-full overflow-hidden"
      style={{ height: "auto" }}
    >
      {/* Gradient overlay for left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#130025] to-transparent z-10 pointer-events-none"></div>

      {/* Gradient overlay for right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#130025] to-transparent z-10 pointer-events-none"></div>

      <div className="flex">
        {/* First copy for smooth animation */}
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          animate={controls}
          initial={{ x: isReverse ? -totalWidth : 0 }}
        >
          {displayItems.map((item, index) => (
            <div
              key={`carousel-item-${index}`}
              className="select-none flex-shrink-0"
              style={{
                width: `${itemWidth}px`,
              }}
            >
              {renderItem(item, index % items.length)}
            </div>
          ))}
        </motion.div>

        {/* Second copy for seamless looping */}
        <motion.div
          className="flex"
          style={{ gap: `${gap}px` }}
          animate={controls}
          initial={{ x: isReverse ? -totalWidth : 0 }}
        >
          {displayItems.map((item, index) => (
            <div
              key={`carousel-item-duplicate-${index}`}
              className="select-none flex-shrink-0"
              style={{
                width: `${itemWidth}px`,
              }}
            >
              {renderItem(item, index % items.length)}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AutoCarousel;
