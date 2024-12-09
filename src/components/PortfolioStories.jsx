"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectStory } from "./ProjectStory";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const STORY_DURATION = 5000; // 5 seconds per story

export default function PortfolioStories() {
  const data = [
    {
      id: 1,
      title: "Excalibur",
      description:"Excalibur offers a versatile solution for managing daily learnings by allowing users to   document knowledge in text, images, audio, and links, catering to diverse learning preferences.",
      image: "/excalibur.png",
      technologies: ["Next.js", "LiveBlocks", "Tailwind CSS", "Typescript", "Firebase"],
      liveLink: "https://excalibur.omkarlande.me",
    },
    {
      id: 2,
      title: "Contact Management System",
      description:"It efficiently organizes, stores, and manages contact information, serving as a centralized hub for details like names, phone numbers, email addresses, and company affiliations.",
      image: "/contact.png",
      technologies: ["React", "GoLang"],
      liveLink: "https://contact-management.omkarlande.me",
    },
    {
      id: 3,
      title: "SkillHive",
      description:"Enhanced educational accessibility and engagement by enabling content creation, consumption, and rating, and integrated Razorpay for secure transactions, ensuring a seamless payment experience for users.",
      image: "/skillhive.png",
      technologies: ["React", "Express.js", "MongoDB", "Node.js"],
      liveLink: "https://skillhive.omkarlande.me/",
    },
    {
      id: 4,
      title: "KnowledgeWave",
      description:"Redefined blogging with Next.js and MDX, empowering content creators and enhancing user engagement by 25% for a seamless and dynamic experience.",
      image: "/KnowledgeWave.png",
      technologies: ["MDX", "Next.js", "Javascript"],
      liveLink: "https://knowledgewave.omkarlande.me/",
    },
    {
      id: 5,
      title: "EduSpark",
      description:"It transforms learning by incorporating gamification, blending education with interactive game-like features for an engaging experience.",
      image: "/EduSpark.png",
      technologies: ["React", "MongoDB", "Express.js", "Node.js"],
      liveLink: "https://eduspark-paradox.vercel.app/",
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const goToNext = useCallback(() => {
    if (data.length === 0) return;
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  }, [data.length]);

  const goToPrevious = useCallback(() => {
    if (data.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  }, [data.length]);

  useEffect(() => {
    if (isPlaying && data.length > 0) {
      const timer = setTimeout(goToNext, STORY_DURATION);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isPlaying, goToNext, data.length]);

  const handleTouchStart = (e) => {
    if (data.length === 0) return;
    const touch = e.touches[0];
    const startX = touch.clientX;

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;

      if (endX < startX - 50) {
        goToNext();
      } else if (endX > startX + 50) {
        goToPrevious();
      }

      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchend", handleTouchEnd);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  if (data.length === 0) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-800 text-white">
        <p>No projects available</p>
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen overflow-hidden relative bg-og-dark"
      onTouchStart={handleTouchStart}
    >
      <AnimatePresence initial={false} custom={direction}>
        <ProjectStory
          key={currentIndex}
          project={data[currentIndex]}
          direction={direction}
        />
      </AnimatePresence>
      <div className="absolute top-0 left-0 right-0 flex">
        {data.map((_, index) => (
          <motion.div
            key={index}
            className="h-1 bg-white bg-opacity-50 flex-1 mx-0.5 sm:mx-1"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: index === currentIndex ? 1 : 0 }}
            transition={{
              duration: index === currentIndex ? STORY_DURATION / 1000 : 0,
            }}
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-og-dark" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full"
        aria-label="Next project"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-og-dark" />
      </button>
      <button
        onClick={togglePlayPause}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white bg-opacity-50 p-1 sm:p-2 rounded-full"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4 sm:w-6 sm:h-6 text-og-dark" />
        ) : (
          <Play className="w-4 h-4 sm:w-6 sm:h-6 text-og-dark" />
        )}
      </button>

    </div>
  );
}
