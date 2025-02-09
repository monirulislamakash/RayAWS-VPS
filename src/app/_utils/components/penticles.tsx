"use client";
import { motion } from "motion/react";

const Pentacle = ({ width = 200 }: { width?: number }) => {
  const radius = width / 2; // Distance from the center of the red circle
  const smallCircleSize = width / 4; // Size of the small circles
  const angleOffset = 90; // Set angle offset to 90 degrees for downward star shape

  return (
    <div
      className="relative bg-none rounded-full flex flex-col items-center justify-center"
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const angle = (index * (360 / 5) + angleOffset) * (Math.PI / 180); // Adjusted angle calculation
        const top = radius * Math.sin(angle) + radius - smallCircleSize / 2; // Adjust top position
        const left = radius * Math.cos(angle) + radius - smallCircleSize / 2; // Adjust left position

        return (
          <motion.div
            key={index}
            className="absolute hidden min-[700px]:flex bg-blue-500 rounded  items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: "50%",
              scale: 1,
              top: `${top}px`,
              left: `${left}px`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              width: `${smallCircleSize}px`,
              height: `${smallCircleSize}px`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            {index + 1}
          </motion.div>
        );
      })}
      <div
        className="absolute bg-red-500 rounded-full z-10"
        style={{ width: `${width / 2}px`, height: `${width / 2}px` }}
      ></div>
    </div>
  );
};

export default Pentacle;
