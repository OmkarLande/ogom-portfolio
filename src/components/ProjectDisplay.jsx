import PortfolioStories from "./PortfolioStories";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter

export default function ProjectDisplay() {
  const router = useRouter(); // Initialize the router
  
  const handleExploreAll = () => {
    router.push("/projects"); // Navigate to /projects
  };

  return (
    <div className="w-screen h-screen bg-og-dark flex flex-col items-center">
      {/* Portfolio Stories */}
      <PortfolioStories />
      
      {/* Centered Explore All Button */}
      <div className="mt-4 py-3"> {/* Adds space below the stories */}
        <motion.button
          onClick={handleExploreAll} // Add the click handler
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
          Explore All
        </motion.button>
      </div>
    </div>
  );
}
