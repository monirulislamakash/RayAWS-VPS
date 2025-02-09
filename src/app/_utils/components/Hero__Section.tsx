'use client'
import CustomButton from "@/components/common/Custom__Button";
import { Oswald } from "next/font/google";
import CountDown from "./Count__Down";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
    ssr: false,
  });

const oswald = Oswald({
    subsets: ['latin'],
    weight: '400'
})

export interface IHome_Hero_SectionData {
    id: number;
    created_at: string;
    title: string;
    button_label_1: string;
    button_variant_1: string;
    button_link_1: string;
    button_label_2: string;
    button_variant_2: string;
    button_link_2: string;
    campaign_number: string;
    affiliate_number: string;
    sponsor_number: string;
    page: string;
    bg: string | null;
    sub_title: string | null;
}


export default function HeroSection({ data }: { data: IHome_Hero_SectionData }) {

    // const data = await getSectionData('home_hero_section')

    // split the title into an array of characters
    const globeConfig = {
        pointSize: 4,
        globeColor: "#0f2457",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
      };
      const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
      const sampleArcs = [
        {
          order: 1,
          startLat: -19.885592,
          startLng: -43.951191,
          endLat: -22.9068,
          endLng: -43.1729,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 1,
          startLat: 28.6139,
          startLng: 77.209,
          endLat: 3.139,
          endLng: 101.6869,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 1,
          startLat: -19.885592,
          startLng: -43.951191,
          endLat: -1.303396,
          endLng: 36.852443,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 2,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: 35.6762,
          endLng: 139.6503,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 2,
          startLat: 51.5072,
          startLng: -0.1276,
          endLat: 3.139,
          endLng: 101.6869,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 2,
          startLat: -15.785493,
          startLng: -47.909029,
          endLat: 36.162809,
          endLng: -115.119411,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 3,
          startLat: -33.8688,
          startLng: 151.2093,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 3,
          startLat: 21.3099,
          startLng: -157.8581,
          endLat: 40.7128,
          endLng: -74.006,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 3,
          startLat: -6.2088,
          startLng: 106.8456,
          endLat: 51.5072,
          endLng: -0.1276,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 4,
          startLat: 11.986597,
          startLng: 8.571831,
          endLat: -15.595412,
          endLng: -56.05918,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 4,
          startLat: -34.6037,
          startLng: -58.3816,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 4,
          startLat: 51.5072,
          startLng: -0.1276,
          endLat: 48.8566,
          endLng: -2.3522,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 5,
          startLat: 14.5995,
          startLng: 120.9842,
          endLat: 51.5072,
          endLng: -0.1276,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 5,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: -33.8688,
          endLng: 151.2093,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 5,
          startLat: 34.0522,
          startLng: -118.2437,
          endLat: 48.8566,
          endLng: -2.3522,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 6,
          startLat: -15.432563,
          startLng: 28.315853,
          endLat: 1.094136,
          endLng: -63.34546,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 6,
          startLat: 37.5665,
          startLng: 126.978,
          endLat: 35.6762,
          endLng: 139.6503,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 6,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: 51.5072,
          endLng: -0.1276,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 7,
          startLat: -19.885592,
          startLng: -43.951191,
          endLat: -15.595412,
          endLng: -56.05918,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 7,
          startLat: 48.8566,
          startLng: -2.3522,
          endLat: 52.52,
          endLng: 13.405,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 7,
          startLat: 52.52,
          startLng: 13.405,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 8,
          startLat: -8.833221,
          startLng: 13.264837,
          endLat: -33.936138,
          endLng: 18.436529,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 8,
          startLat: 49.2827,
          startLng: -123.1207,
          endLat: 52.3676,
          endLng: 4.9041,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 8,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: 40.7128,
          endLng: -74.006,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 9,
          startLat: 51.5072,
          startLng: -0.1276,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 9,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: -22.9068,
          endLng: -43.1729,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 9,
          startLat: 1.3521,
          startLng: 103.8198,
          endLat: -34.6037,
          endLng: -58.3816,
          arcAlt: 0.5,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 10,
          startLat: -22.9068,
          startLng: -43.1729,
          endLat: 28.6139,
          endLng: 77.209,
          arcAlt: 0.7,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 10,
          startLat: 34.0522,
          startLng: -118.2437,
          endLat: 31.2304,
          endLng: 121.4737,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 10,
          startLat: -6.2088,
          startLng: 106.8456,
          endLat: 52.3676,
          endLng: 4.9041,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 11,
          startLat: 41.9028,
          startLng: 12.4964,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 11,
          startLat: -6.2088,
          startLng: 106.8456,
          endLat: 31.2304,
          endLng: 121.4737,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 11,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: 1.3521,
          endLng: 103.8198,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 12,
          startLat: 34.0522,
          startLng: -118.2437,
          endLat: 37.7749,
          endLng: -122.4194,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 12,
          startLat: 35.6762,
          startLng: 139.6503,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.2,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 12,
          startLat: 22.3193,
          startLng: 114.1694,
          endLat: 34.0522,
          endLng: -118.2437,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 13,
          startLat: 52.52,
          startLng: 13.405,
          endLat: 22.3193,
          endLng: 114.1694,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 13,
          startLat: 11.986597,
          startLng: 8.571831,
          endLat: 35.6762,
          endLng: 139.6503,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 13,
          startLat: -22.9068,
          startLng: -43.1729,
          endLat: -34.6037,
          endLng: -58.3816,
          arcAlt: 0.1,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
          order: 14,
          startLat: -33.936138,
          startLng: 18.436529,
          endLat: 21.395643,
          endLng: 39.883798,
          arcAlt: 0.3,
          color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
      ];

    const title = {
        title1: ['P', 'E', 'R', 'F', 'E', 'C', 'T'],
        title2: ['M', 'A', 'R', 'K', 'E', 'T', 'I', 'N', 'G'],
        title3: ['W', 'I', 'T', 'H'],
        title4: ['P', 'E', 'R', 'F', 'E', 'C', 'T'],
        title5: ['P', 'A', 'R', 'T', 'N', 'E', 'R']
    }
    // console.log(title)

    return (
        <div className={`py-[40px]  relative ${oswald.className} overflow-hidden `}>
            <div className="container relative z-20 md:flex items-center justify-between py-[80px]">
                <div className="w-full md:w-[45%]">
                    <motion.h1
                        // fade in opacity
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className=" flex flex-wrap gap-2 tracking-tighter leading-[42px] md:leading-[66px] text-[34px] md:text-[54px] font-[500] uppercase pb-5 text-white cursor-pointer">
                        <div className="flex items-center tracking-normal">
                        {
                            title.title1.map((char, index) => (
                                <span key={index} className="inline-block hover:scale-125 hover:text-secondary transition-all duration-300">
                                    {char}
                                </span>
                            ))
                        }   
                        </div>
                        <div className="flex items-center tracking-normal">
                        {
                            title.title2.map((char, index) => (
                                <span key={index} className="inline-block hover:scale-125 hover:text-secondary transition-all duration-300">
                                    {char}
                                </span>
                            ))
                        }
                        </div>
                        <div className="flex items-center tracking-normal">
                        {
                            title.title3.map((char, index) => (
                                <span key={index} className="inline-block hover:scale-125 hover:text-secondary transition-all duration-300">
                                    {char}
                                </span>
                            ))
                        }
                        </div>
                        <div className="flex items-center tracking-normal">
                        {
                            title.title4.map((char, index) => (
                                <span key={index} className="inline-block hover:scale-125 hover:text-secondary transition-all duration-300">
                                    {char}
                                </span>
                            ))
                        }
                        </div>
                        <div className="flex items-center tracking-normal">
                        {
                            title.title5.map((char, index) => (
                                <span key={index} className="inline-block hover:scale-125 hover:text-secondary transition-all duration-300">
                                    {char}
                                </span>
                            ))
                        }
                        </div>
                    </motion.h1>

                    <motion.div
                        // left to right    
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center gap-5 mb-[50px]">
                        <CustomButton
                            label="Publisher"
                            href={data?.button_link_1}
                            className="slide_from_top text-[16px] md:text-[22px] py-[8px] md:py-[16px] px-[14px] md:px-[22px] rounded-[4px] uppercase"
                        />
                        <CustomButton
                            label="Advertiser"
                            href={data?.button_link_2}
                            className="slide_from_top text-[16px] md:text-[22px] bg-secondary text-white py-[8px] md:py-[16px] px-[14px] md:px-[22px] rounded-[4px] uppercase"
                        />
                    </motion.div>
                    <motion.div
                        // down to up
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <CountDown
                            campaign_number={data.campaign_number}
                            affiliate_number={data.affiliate_number}
                            sponsor_number={data.sponsor_number}
                        />
                    </motion.div>
                </div>
                <motion.div
                    // right to left fast
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="m-5 md:m-0 bg-primary rounded-full max-w-[546px] max-h-[546px]">
                    {/* <Image className="" src="/images/Globe.png" width={546} height={546} alt="globe" /> */}
                    {/* gif file  */}
                </motion.div>
            </div>

            <div className="z-[2] w-full h-full absolute left-0 top-0 bg-black">
                {/* <ParticleBackground /> */}
                {/* <Image className=" w-full h-full object-cover object-bottom" src="/images/Globe.gif" width={2000} height={600} alt="ss" /> */}   
                {/* video background */}
                {/* Add By Akash */}
                <div className="absolute z-50 w-[50%] aspect-square right-0 bottom-100 bg-transparent">
                    <World data={sampleArcs} globeConfig={globeConfig} /> 
                </div>
                <div className="relative w-full h-full object-cover object-bottom hero_akash" >
                    {/* <source src="https://kqenfstzpxtowvuhsbht.supabase.co/storage/v1/object/public/ray/Untitled%20design%20(8).mp4?t=2025-01-01T21%3A17%3A23.069Z" type="video/mp4" /> */}
                </div>
            </div>
            {/* Add the SVG curve here */}

            <svg
                className="absolute bottom-0 left-0 w-full z-[10] h-[80px] transform translate-y-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                fill="white"
      >
        <path
                    d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
                />
            </svg>
        </div>
    )
}


// 