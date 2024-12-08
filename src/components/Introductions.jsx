"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Abril_Fatface } from "next/font/google";
import { useRouter } from "next/navigation"; // Import useRouter

const AbrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400", // Explicitly specify the only available weight
});

const Introductions = () => {
  const router = useRouter(); // Initialize the router

  // Handle button clicks
  const handleViewMyWork = () => {
    router.push("/projects"); // Navigate to /projects
  };

  const handleContactMe = () => {
    router.push("/contact"); // Navigate to /contact
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-2 lg:gap-7">
        {/* IMAGE CONTAINER */}
        <motion.div
          className="relative w-full h-64 lg:h-auto lg:w-1/2"
          whileHover={{ scale: 1.1, rotate: "2deg" }}
          whileTap={{ scale: 0.9, rotate: "-2deg" }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/omkar.png"
            alt="Omkar's Image"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>

        {/* TEXT CONTAINER */}
        <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-5 items-center justify-center text-center lg:text-left">
          {/* TITLE */}
          <h1
            className={`text-4xl md:text-5xl sm:font-normal font-bold text-og-white md:tracking-wider ${AbrilFatface.className}`}
          >
            Hi, I'm{" "}
            <span className="text-og-pri">Omkar</span>, a Professional{" "}
            <span className="text-og-pri">Software Developer</span> Specializing
            in Innovative Solutions.
          </h1>

          {/* DESC */}
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
            Welcome to my digital canvas. I create user-friendly applications
            that meet diverse needs using advanced technologies. My focus is on
            developing intuitive interfaces and seamless experiences to enhance
            user engagement and satisfaction.
          </motion.p>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:justify-center">
            {/* BUTTON 1 */}
            <motion.button
              onClick={handleViewMyWork} // Add the click handler
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ffffff",
                color: "#F67831",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="p-4 rounded-lg ring-1 ring-og-dark bg-og-pri text-og-white"
            >
              View My Work
            </motion.button>

            {/* BUTTON 2 */}
            <motion.button
              onClick={handleContactMe} // Add the click handler
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              className="p-4 rounded-lg ring-1 ring-white hover:ring-og-pri hover:text-og-pri"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Introductions;
