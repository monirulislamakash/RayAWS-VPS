"use client";
import { Advantage, Support, LogoMain, Inventroy, Fraud, Team, ChooseLogo } from "@/components/Icons";
import { motion } from "motion/react";
import { useState } from "react";


const data =[
    {
        icon: <Team className="-ml-[15px]" width="150px" height="150px"/>
    },
    {
        icon: <Fraud/>   
    },
    {
        icon: <Inventroy  width="120px" height="120px"/>
    },
    {
        icon: <Support />
    },
    {
        icon: <Advantage />
    },
]

const Pentacle = ({ width = 500 }: { width?: number }) => {
  const radius = width / 2; // Distance from the center of the red circle
  const smallCircleSize = width / 4; // Size of the small circles
  const angleOffset = 90; // Set angle offset to 90 degrees for downward star shape

  const [isHovered, setIsHovered] = useState(false);

  

  const widthLogo = isHovered ? 390 : 390;
  const heightLogo = isHovered ? 390 : 390;
  
  
  return (
    <div
      className="relative bg-none rounded-full flex flex-col items-center justify-center"
      style={{ width: `${width}px`, height: `${width}px` }}
    >
      {data?.map((item, index) => {

        const angle = (index * (360 / 5) + angleOffset) * (Math.PI / 180); // Adjusted angle calculation
        const top = radius * Math.sin(angle) + radius - smallCircleSize / 2; // Adjust top position
        const left = radius * Math.cos(angle) + radius - smallCircleSize / 2; // Adjust left position

        return (
          <motion.div
            key={index}
            className="absolute flex rounded  items-center justify-center z-20"
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
        className="absolute rounded-full z-40 cursor-pointer transition-all duration-300"
        style={{ width: `${widthLogo}px`, height: `${heightLogo}px` }}
      >
        <LogoMain className=" transition-all duration-300 relative " width={`${widthLogo}px`} height={`${heightLogo}px`} />
        <div className="absolute top-[15%] left-[14%] w-full h-full"   onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          <ChooseLogo className={`${ isHovered ? "scale-105" : "scale-100"} transition-all duration-300 relative z-20`} width={`${ isHovered ? 280 : 280}px`} height={`${ isHovered ? 280 : 280}px`} />
        </div>
      </div>

    </div>
  );
};

export default Pentacle;