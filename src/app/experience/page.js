
import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
  const data = [
    {
      company: "Rajiv Gandhi Institute of Technology",
      position: "Full Stack Developer Intern",
      startDate: "Sep 2023",
      endDate: "Feb 2024",
      description: [
        "Utilized Python, Flask, and SQL to create a cutting-edge web application that received a 95% user satisfaction rating for its intuitive interface.",
        "Implemented a robust authentication system in accordance with college security protocols, resulting in zero reported security breaches and ensuring data confidentiality.",
        "Optimized database performance by 40%, reducing query times by implementing indexing strategies and enhancing data retrieval efficiency critical for seamless data management.",
        "Transformed the standard file system into an online web application with seamless integration to a relational database, improving user experience and efficiency by 50%.",
      ],
      logo: "/RGIT-logo.svg",
    },
    {
      company: "Prodigy Infotech",
      position: "Software Developer Intern",
      startDate: "May 2024",
      endDate: "May 2024",
      description: [
        "Utilized HTML, CSS, and Go/Golang to redesign the user interface of an existing software solution, leading to a 15% increase in user satisfaction and a 10% decrease in bounce rate.",
        " Implemented a new feature using JavaScript that improved system performance by reducing loading times by 40%, resulting in higher user retention rates.",
      ],
      logo: "/Prodigy-Infotech-logo.svg",
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
