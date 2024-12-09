import Image from "next/image";
import { motion } from "framer-motion";

export function ProjectStory({ project, direction }) {
  // Add a check for undefined project
  if (!project) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
        <p>No project data available</p>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0, x: 300 * direction }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 * direction }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
    >
      <Image
        src={project.image || "/placeholder.svg?height=1080&width=1920"}
        alt={project.title || "Project Image"}
        layout="fill"
        objectFit="cover"
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-og-pri to-transparent p-4 sm:p-6 text-white"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-9xl sm:text-8xl font-bold mb-2">
          {project.title || "Untitled Project"}
        </h2>
        <p className="text-xl sm:text-xl font-bold mb-2">
          {project.description || "No description available"}
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          {(project.technologies || []).map((tech, index) => (
            <span
              key={index}
              className="bg-og-dark text-og-white px-4 py-2 rounded-full text-lg sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 text-white mt-5 py-3 rounded-lg ring-1 ring-white hover:ring-og-dark hover:text-og-dark"
          >
            View Live
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
