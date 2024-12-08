"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-og-dark font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="sm:text-4xl font-bold md:text-5xl text-7xl mb-4 text-white max-w-4xl">
          Experience with <span className="text-og-pri">
            Modern Frameworks </span> and Libraries
        </h2>
        <motion.p
            whileHover={{
              scale: 1.05,
              color: "#ffffff",
              // textShadow: "0px 0px 16px rgba(251, 251, 251, 0.8)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="md:text-xl text-og-sec leading-5 md:tracking-wide"
          >
          Full-Stack Web Developer proficient in both front-end and back-end development. Experienced in using well-known libraries and frameworks such as React, Next.js, and Flask. Demonstrated capability to create responsive user interfaces, manage user authentication, and enhance database performance.
        </motion.p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-og-sec border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-og-white ">
                {item.startDate}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full ">
              <h3 className="md:hidden block text-2xl mb-3 text-left font-bold text-white">
                {item.startDate}
              </h3>
              <Image 
                src={item.logo} 
                alt="logo" 
                width={200} 
                height={200} 
                className="rounded-full"
              />
              <h4 className="py-2 font-bold text-4xl">{item.company} </h4>
              <p className="text-og-white text-2xl "> {item.position}</p>
              <p className="text-og-sec py-1 text-xl">{item.startDate} - {item.endDate}</p>
              <div>
                {item.description.map((desc, index) => (
                  <p key={index} className="text-og-sec py-2 leading-5 tracking-wider font-normal normal-case sm:text-xl">
                    - {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-og-sec to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-orange-600 via-og-pri to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
