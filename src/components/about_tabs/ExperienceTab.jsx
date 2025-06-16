// src/components/about_tabs/ExperienceTab.jsx

import { HiOutlineBriefcase } from "react-icons/hi2";

export default function ExperienceTab() {
  const experiences = [
    {
      title: "Software Developer Intern – IF MedTech Pvt. Ltd.",
      duration: "Oct 2024 - May 2025",
      points: [
        "Engineered frontend interfaces for web and mobile platforms using Flutter and Dart within Android Studio, ensuring responsive and user-centric design.",
        "Developed and maintained RESTful APIs using Java Spring Boot, contributing to the backend infrastructure and data integration.",
        "Designed and implemented features in a Kotlin-based Android application utilizing Jetpack Compose for modern, declarative UI development.",
        "Integrated USB camera functionalities within the Kotlin application, enabling seamless hardware interaction and real-time media processing.",
      ],
    },
    {
      title: "Frontend Developer Intern – WAH Care",
      duration: "Jul 2024 - Sep 2024",
      points: [
        "Developed user-friendly and responsive web interfaces, ensuring optimal performance across various devices and platforms.",
        "Collaborated closely with the design team to implement UI/UX designs, translating creative concepts into functional web pages.",
        "Utilized React JS and Tailwind CSS to design and build dashboard report websites/pages, enhancing the overall user experience.",
        "Integrated APIs to fetch and display data dynamically, improving the functionality and interactivity of web applications.",
      ],
    },
    {
      title: "Web Developer Intern – Riddl",
      duration: "Mar 2024 - Jun 2024",
      points: [
        "Developed a responsive, interactive website designed to help users learn Mandarin through engaging games, enhancing the language learning experience.",
        "Collaborated with team members to integrate innovative features and documented comprehensive guides to support ongoing website maintenance and updates.",
        "Created multiple educational games, including the Snake Game, Memory Card Game, and a Word Picking Game, utilizing HTML, CSS, and JavaScript.",
      ],
    },
    {
      title: "AI Intern – ExternsClub",
      duration: "Jun 2023 - Jul 2023",
      points: [
        "Explored and implemented machine learning algorithms to derive insights from data.",
        "Developed a recommendation system using collaborative and content-based filtering techniques.",
        "Utilized Python libraries such as Pandas, NumPy, and Scikit-learn for data analysis and model development.",
      ],
    }

  ];

  return (
    <div className="space-y-6 text-sm text-neutral-300">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border border-white/10 bg-white/5 p-4 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <HiOutlineBriefcase className="text-white w-5 h-5 flex-shrink-0" />
              <h4 className="text-white font-semibold text-base">{exp.title}</h4>
            </div>
            <p className="text-neutral-400 text-xs whitespace-nowrap">{exp.duration}</p>
          </div>

          <ul className="list-disc text-neutral-300 text-left pl-5 space-y-4 text-sm">
            {exp.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


