"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-og-white sm:rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-og-dark text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-og-sec text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-og-pri text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div>
                  <motion.ul
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-4 p-4"
                  >
                    {active.technologies.map((tech) => (
                      <motion.li
                        key={tech}
                        className="px-5 py-4 sm:px-3 sm:py-2 bg-og-dark text-white rounded-full text-xs"
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="pt-2 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-og-sec text-xs md:text-sm lg:text-base h-40 md:h-fit pb-8 flex flex-col items-start gap-4 overflow-auto  [mask:linear-gradient(to_bottom,white, rgba(255,255,255,0.8), transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 items-start gap-5">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-og-white  hover:bg-og-pri hover:text-white rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-black text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-og-ter text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Learning Management System",
    title: "Excalibur",
    src: "/excalibur.png",
    ctaText: "Visit",
    ctaLink: "https://excalibur.omkarlande.me",
    technologies: [
      "Next.js",
      "LiveBlocks",
      "Tailwind CSS",
      "Typescript",
      "Firebase",
    ],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          📚{" "}
          <span className="font-bold text-lg">
            Traditional note-taking and revision methods
          </span>{" "}
          often fall short in helping individuals keep track of vast amounts of
          information and ensuring long-term retention. To address this gap, we
          introduce <span className="text-red-500 italic">Excalibur</span>, a
          cutting-edge 🌟 web and mobile application designed to{" "}
          <span className="underline">transform</span> the way users capture,
          organize, and review their learning materials.
          <br />
          <br />
          Excalibur provides a{" "}
          <span className="text-green-600 font-bold">
            comprehensive solution
          </span>{" "}
          for managing daily learnings by allowing users to document their
          knowledge in multiple formats, including:
          <ul className="list-disc list-inside mt-2">
            <li>
              📝 <span className="font-bold">Text</span>
            </li>
            <li>
              📷 <span className="font-bold">Images</span>
            </li>
            <li>
              🎙️ <span className="font-bold">Audio</span>
            </li>
            <li>
              🔗 <span className="font-bold">Links</span>
            </li>
          </ul>
          This versatile approach caters to{" "}
          <span className="text-blue-500 italic">
            diverse learning preferences
          </span>{" "}
          and ensures users can capture information in the format that suits
          them best! 💡
        </div>
      );
    },
  },
  {
    description: "E-Learning Platform",
    title: "SkillHive",
    src: "/skillhive.png",
    ctaText: "Visit",
    ctaLink: "https://skillhive.omkarlande.me",
    technologies: ["React", "Express.js", "MongoDB", "Node.js", "Razorpay"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            ✨{" "}
            <span className="font-bold text-lg">
              Revolutionized educational accessibility and engagement
            </span>{" "}
            by facilitating content creation, consumption, and rating. This
            innovative approach empowers users to{" "}
            <span className="text-blue-500 font-semibold">
              actively participate
            </span>{" "}
            in the learning process, making education more{" "}
            <span className="italic">interactive</span> and{" "}
            <span className="text-green-600 font-semibold">inclusive</span>.
          </p>
          <br />
          <p>
            🔒 <span className="font-bold text-lg">Additionally</span>,
            seamlessly integrated{" "}
            <span className="text-red-500 font-semibold">Razorpay</span> for
            secure transactions, ensuring an{" "}
            <span className="underline">unparalleled user experience</span>.
            This integration provides users with a{" "}
            <span className="text-green-600 font-bold">reliable</span> and{" "}
            <span className="text-blue-500 font-bold">efficient</span> payment
            system, enhancing the overall functionality and convenience of the
            platform.
          </p>
        </div>
      );
    },
  },
  {
    description: "Blogging Platform",
    title: "KnowledgeWave",
    src: "/KnowledgeWave.png",
    ctaText: "Visit",
    ctaLink: "https://knowledgewave.omkarlande.me",
    technologies: ["MDX", "Next.js", "Javascript"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            ✍️ <span className="font-bold text-lg">Redefined blogging</span> by
            leveraging the power of{" "}
            <span className="text-blue-500 font-semibold">Next.js</span> and{" "}
            <span className="text-green-600 font-semibold">MDX</span>, providing
            content creators with a robust platform to express themselves
            effortlessly. This innovative approach not only{" "}
            <span className="italic">simplifies</span> the content creation
            process but also{" "}
            <span className="text-red-500 font-semibold">enhances</span> the
            overall user experience.
          </p>
          <br />
          <p>
            🚀 <span className="font-bold text-lg">Additionally</span>,
            implemented features that significantly{" "}
            <span className="text-green-600 font-bold">
              boosted user engagement by 25%
            </span>
            , ensuring a seamless and dynamic blogging experience. This
            combination of{" "}
            <span className="text-blue-500 font-semibold">
              cutting-edge technology
            </span>{" "}
            and <span className="text-red-500 italic">user-centric design</span>{" "}
            has set a new standard for the future of content creation.
          </p>
        </div>
      );
    },
  },
  {
    description: "Contact Management System",
    title: "Contact Handler",
    src: "/contact.png",
    ctaText: "Visit",
    ctaLink: "https://contact-management.omkarlande.me",
    technologies: ["React", "GoLang", "Tailwind CSS", "MongoDB", "Node.js"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            📇{" "}
            <span className="font-bold text-lg">
              A Contact Management System (CMS)
            </span>{" "}
            is a <span className="italic">software application</span> designed
            to efficiently{" "}
            <span className="text-blue-500 font-semibold">organize</span>,{" "}
            <span className="text-green-600 font-semibold">store</span>, and{" "}
            <span className="text-red-500 font-semibold">manage</span> contact
            information.
          </p>
          <br />
          <p>
            It serves as a{" "}
            <span className="font-bold underline">centralized hub</span> for
            storing details like:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              📛 <span className="font-semibold">Names</span>
            </li>
            <li>
              📞 <span className="font-semibold">Phone numbers</span>
            </li>
            <li>
              📧 <span className="font-semibold">Email addresses</span>
            </li>
            <li>
              📋 <span className="font-semibold">Other relevant data</span> of
              individuals or organizations
            </li>
          </ul>
        </div>
      );
    },
  },

  {
    description: "Form Builder Application",
    title: "Chisel",
    src: "/chisel.png",
    ctaText: "Visit",
    ctaLink: "https://chisel.omkarlande.me/",
    technologies: ["Next.js", "Tailwind CSS", "Typescript", "Zod", "Prisma"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            📝{" "}
            <span className="font-bold text-lg text-blue-500">
              The Form Builder application
            </span>{" "}
            is designed to{" "}
            <span className="italic text-green-600">streamline</span> the
            creation and management of forms, offering{" "}
            <span className="text-purple-500 font-semibold">
              robust features
            </span>{" "}
            for{" "}
            <span className="text-yellow-500 font-semibold">
              data visualization
            </span>{" "}
            and{" "}
            <span className="text-red-500 font-semibold">user engagement</span>.
          </p>
          <br />
          <p>
            📊 With integrated{" "}
            <span className="font-bold text-blue-500">charts</span> and
            comprehensive{" "}
            <span className="italic text-green-600">
              form data visualization
            </span>
            , users can easily{" "}
            <span className="text-red-500 font-semibold">interpret</span> and{" "}
            <span className="text-purple-500 font-semibold">analyze</span> the
            information collected through their forms.
          </p>
          <br />
          <p>
            🚀 This enhanced functionality not only{" "}
            <span className="italic">simplifies</span> the process of form
            creation but also significantly{" "}
            <span className="font-bold text-yellow-500">
              boosts user engagement
            </span>
            , making it an{" "}
            <span className="underline text-blue-500 font-semibold">
              invaluable tool
            </span>{" "}
            for{" "}
            <span className="font-bold">
              efficient data management and analysis
            </span>
            .
          </p>
        </div>
      );
    },
  },
  {
    description: "Collaborative Figma Clone",
    title: "Sculpt",
    src: "/sculpt.png",
    ctaText: "Visit",
    ctaLink: "https://sculpt.omkarlande.me/",
    technologies: ["Next.js", "LiveBlocks", "Tailwind CSS", "Typescript"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            🎨 <span className="font-bold text-lg text-blue-500">Sculpt</span>{" "}
            is a <span className="italic text-green-600">Figma clone</span>{" "}
            designed for{" "}
            <span className="font-semibold text-purple-500">
              real-time collaboration
            </span>
            , allowing multiple users to{" "}
            <span className="text-blue-500 font-semibold">access</span> and{" "}
            <span className="text-yellow-500 font-semibold">
              work on projects simultaneously
            </span>
            .
          </p>
          <br />
          <p>
            🖥️ This feature significantly enhances the{" "}
            <span className="font-bold text-red-500">user interface (UI)</span>{" "}
            and{" "}
            <span className="font-bold text-red-500">user experience (UX)</span>
            , making it an ideal tool for teams and individuals who need to
            collaborate on design projects efficiently.
          </p>
          <br />
          <p>
            🚀 With <span className="font-semibold text-blue-500">Sculpt</span>,
            users can enjoy a{" "}
            <span className="italic text-green-600">seamless</span> and{" "}
            <span className="font-bold text-purple-500">
              dynamic design process
            </span>
            , fostering <span className="text-orange-500">creativity</span> and{" "}
            <span className="text-yellow-600">productivity</span>.
          </p>
        </div>
      );
    },
  },
  {
    description: "Gamified Learning Platform",
    title: "Eduspark",
    src: "/EduSpark.png",
    ctaText: "Visit",
    ctaLink: "https://eduspark-paradox.vercel.app/",
    technologies: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            🚀 <span className="font-bold text-lg text-blue-500">EduSpark</span>{" "}
            is a{" "}
            <span className="text-green-600 font-semibold">
              cutting-edge e-learning platform
            </span>{" "}
            designed to transform the way people learn by incorporating the
            power of <span className="italic text-red-500">gamification</span>.
          </p>
          <br />
          <p>
            🎓 At <span className="text-blue-500 font-semibold">EduSpark</span>,
            we believe education should be as{" "}
            <span className="font-bold underline">engaging</span> as it is{" "}
            <span className="text-green-600 font-semibold">informative</span>.
            Our platform achieves this by blending{" "}
            <span className="italic">learning</span> with{" "}
            <span className="font-bold text-purple-500">
              interactive game-like features
            </span>
            .
          </p>
        </div>
      );
    },
  },
  {
    description: "Task Management System",
    title: "Task Champ",
    src: "/taskchamp.png",
    ctaText: "Visit",
    ctaLink: "https://task-champ.omkarlande.me",
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "Firebase"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            ✅{" "}
            <span className="font-bold text-lg text-blue-500">Task Champ</span>{" "}
            is a{" "}
            <span className="italic text-green-600">task management app</span>{" "}
            designed specifically for the{" "}
            <span className="text-purple-500 font-semibold">
              Gen Z generation
            </span>
            .
          </p>
          <br />
          <p>
            🖱️ It offers a{" "}
            <span className="font-bold underline">user-friendly interface</span>{" "}
            that allows users to{" "}
            <span className="text-blue-500 font-semibold">
              effortlessly add and remove tasks
            </span>{" "}
            with just a click. This{" "}
            <span className="italic">streamlined approach</span> ensures that
            managing tasks is{" "}
            <span className="font-bold text-green-600">quick</span>,{" "}
            <span className="font-bold text-red-500">efficient</span>, and{" "}
            <span className="font-bold text-yellow-500">hassle-free</span>,
            catering to the{" "}
            <span className="text-purple-500 font-semibold">
              fast-paced lifestyle
            </span>{" "}
            of Gen Z users.
          </p>
        </div>
      );
    },
  },
  {
    description: "Parallax Landing Page",
    title: "Adventure Landing Page",
    src: "/parallax.png",
    ctaText: "Visit",
    ctaLink: "https://parallax-ogom.netlify.app/",
    technologies: ["Html", "Css"],
    content: () => {
      return (
        <div className="font-sans text-gray-800 leading-relaxed">
          <p>
            🌍{" "}
            <span className="font-bold text-lg text-blue-500">
              The Adventure Landing Page
            </span>{" "}
            is designed to{" "}
            <span className="italic text-green-600">captivate</span> users with
            its stunning{" "}
            <span className="font-semibold text-purple-500">
              parallax effect
            </span>
            , creating a{" "}
            <span className="text-yellow-500 font-semibold">dynamic</span> and{" "}
            <span className="text-red-500 font-semibold">
              immersive browsing experience
            </span>
            .
          </p>
          <br />
          <p>
            ✨ This visually engaging feature enhances the overall{" "}
            <span className="font-bold text-blue-600">aesthetic</span> of the
            page, making it perfect for showcasing{" "}
            <span className="text-orange-500 font-semibold">
              adventurous content
            </span>
            .
          </p>
          <br />
          <p>
            🌟 The seamless integration of{" "}
            <span className="font-bold text-purple-500">
              parallax scrolling
            </span>{" "}
            ensures that users are drawn into the{" "}
            <span className="text-green-600 font-semibold">narrative</span>,
            providing an{" "}
            <span className="italic text-yellow-600">
              unforgettable journey
            </span>{" "}
            through the website.
          </p>
        </div>
      );
    },
  },
];
