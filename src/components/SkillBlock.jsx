import { SkillLogo } from "./SkillLogo";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SkillBlock() {
  const router = useRouter();
  
  const skillData = [
    {
      title: "Java",
      logoImg: "java.svg",
    },
    {
      title: "Typescript",
      logoImg: "typescript.svg",
    },
    {
      title: "React",
      logoImg: "react.svg",
    },
    {
      title: "Next.js",
      logoImg: "nextjs.svg",
    },
    {
      title: "Golang",
      logoImg: "golang.svg",
    },
  ];

  return (
    <div className="flex justify-center items-center pt-4 flex-col">
      <h1 className="text-6xl font-bold">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-4 ">
        {skillData.map((item, index) => (
          <SkillLogo key={index} logoImg={item.logoImg} title={item.title} />
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="py-3 px-5 rounded-lg ring-1 ring-white hover:ring-og-pri hover:text-og-pri"
        onClick={() => router.push("/skills")}
      >
        See All
      </motion.button>
    </div>
  );
}
