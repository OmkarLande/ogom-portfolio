import { SkillLogo } from "@/components/SkillLogo";

export default function Skills() {

  const Languages = [
    {
      logoImg: "/java.svg",
      title: "Java",
    },
    {
      logoImg: "/csharp.svg",
      title: "C#",
    },
    {
      logoImg: "/html.svg",
      title: "HTML",
    },
    {
      logoImg: "/css.svg",
      title: "CSS",
    },
    {
      logoImg: "/python.svg",
      title: "Python",
    },
    {
      logoImg: "/javascript.svg",
      title: "Javascript",
    },
    {
      logoImg: "/typescript.svg",
      title: "TypeScript",
    },
    {
      logoImg: "/golang.svg",
      title: "Go/Golang",
    },
  ];
  const Frameworks = [
    {
      logoImg: "/react.svg",
      title: "React.js",
    },
    {
      logoImg: "/express.svg",
      title: "Express.js",
    },
    {
      logoImg: "/flask.svg",
      title: "Flask",
    },
    {
      logoImg: "/nextjs.svg",
      title: "Next.js",
    },
    {
      logoImg: "/nodejs.svg",
      title: "Node.js",
    },
  ];

  const Databases = [
    {
      logoImg: "/mongodb.svg",
      title: "MongoDB",
    },
    {
      logoImg: "/postgresql.svg",
      title: "PostgreSQL",
    },
    {
      logoImg: "/mysql.svg",
      title: "MySQL",
    },
    {
      logoImg: "/supabase.svg",
      title: "Supabase",
    },
    {
      logoImg: "/prisma.svg",
      title: "Prisma",
    },
  ];

  const VersionControlAndDeployment = [
    {
      logoImg: "/git.svg",
      title: "Git",
    },
    {
      logoImg: "/github.svg",
      title: "GitHub",
    },
    {
      logoImg: "/vercel.svg",
      title: "Vercel",
    },
    {
      logoImg: "/netlify.svg",
      title: "Netlify",
    },
    {
      logoImg: "/render.svg",
      title: "Render",
    },
  ];

  const CloudAndDevelopmentPlatforms = [
    {
      logoImg: "/gcp.svg",
      title: "Google Cloud Platform (GCP)",
    },
  ];

  return (
    <div className="flex justify-center items-center pt-4 flex-col">
      <div>
        <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold ">Languages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-4 ">
          {Languages.map((item, index) => (
            <SkillLogo key={index} logoImg={item.logoImg} title={item.title} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold ">Frameworks</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-4 ">
          {Frameworks.map((item, index) => (
            <SkillLogo key={index} logoImg={item.logoImg} title={item.title} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold ">Databases</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-4 ">
          {Databases.map((item, index) => (
            <SkillLogo key={index} logoImg={item.logoImg} title={item.title} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold ">Version Control and Deployment</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 p-4 ">
          {VersionControlAndDeployment.map((item, index) => (
            <SkillLogo key={index} logoImg={item.logoImg} title={item.title} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold ">Cloud Platforms</h1>
        <div className="grid grid-cols-1 gap-5 p-4 ">
          {CloudAndDevelopmentPlatforms.map((item, index) => (
            <SkillLogo key={index} logoImg={item.logoImg} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
