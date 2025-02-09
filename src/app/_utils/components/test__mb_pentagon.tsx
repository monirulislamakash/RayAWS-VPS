"use client";
import { Advantage, Support, LogoMain, Inventroy, Fraud, Team } from "@/components/Icons";
import { motion } from "motion/react";
import { useState } from "react";

const data =[
    {
        icon: <Team className="-ml-3" width="80px" height="80px"/>
    },
    {
        icon: <Fraud/>   
    },
    {
        icon: <Inventroy  width="60px" height="60px"/>
    },
    {
        icon: <Support />
    },
    {
        icon: <Advantage />
    },
]

const PentacleMb = ({ width = 300 }: { width?: number }) => {
  const radius = width / 2; // Distance from the center of the red circle
  const smallCircleSize = width / 4; // Size of the small circles
  const angleOffset = 90; // Set angle offset to 90 degrees for downward star shape

  const [isHovered, setIsHovered] = useState(false);

  

  const widthLogo = isHovered ? 220 : 220;
  const heightLogo = isHovered ? 220 : 220;
  
  
  return (
    <div
      className="relative bg-none rounded-full flex flex-col items-center justify-center"
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      {data.map((item, index) => {

        const angle = (index * (360 / 5) + angleOffset) * (Math.PI / 180); // Adjusted angle calculation
        const top = radius * Math.sin(angle) + radius - smallCircleSize / 2; // Adjust top position
        const left = radius * Math.cos(angle) + radius - smallCircleSize / 2; // Adjust left position

        return (
          <motion.div
            key={index}
            className="absolute flex rounded  items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: "100%",
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
            {item.icon}
          </motion.div>
        );
      })}
      <div
        className="absolute rounded-full z-20 cursor-pointer transition-all duration-300"
        style={{ width: `${widthLogo}px`, height: `${heightLogo}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LogoMain className=" transition-all duration-300" width={`${widthLogo}px`} height={`${heightLogo}px`} />
      </div>
    </div>
  );
};

export default PentacleMb;