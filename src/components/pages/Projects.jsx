//src/components/pages/Project.jsx

import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import PageWrapper from "../PageWrapper";

const projects = [
  {
    title: "Crime Mapping",
    description:
      "Developed a hybrid model combining DBSCAN and Hierarchical Clustering to analyze spatial crime data. Integrated clustering outputs with Neo4j Aura for graph-based crime analysis and visualization.",
    tags: ["DBSCAN", "Hierarchical Clustering", "Neo4j", "Graph DB", "Data Science"],
    link: "https://github.com/AdityaSanap1821/Crime-Mapping",
  },
  {
    title: "EduTube – UI/UX Design",
    description:
      "Designed a Figma prototype for an educational platform focused on intuitive user experience with responsive UI for desktop and mobile.",
    tags: ["Figma", "UI/UX", "Responsive Design"],
    link: "https://www.figma.com/community/file/1309844649375218987/edutube-a-learning-revolution",
  },
  {
    title: "Stress Predictor",
    description:
      "Built a machine learning model to predict stress from text input using NLP techniques (NLTK) and models like Logistic Regression and Decision Tree. Used TF-IDF for feature extraction.",
    tags: ["Machine Learning", "NLP", "TF-IDF", "NLTK", "Scikit-learn"],
    link: "https://github.com/AdityaSanap1821/ML-Stress-Predictor",
  },
  {
    title: "Inshorts App Clone",
    description:
      "Developed a responsive news app replicating Inshorts UI using a public News API, card-based layout, and Material UI for modern interface.",
    tags: ["React", "News API", "Material UI", "Responsive Design"],
    link: "https://github.com/AdityaSanap1821/Inshorts-Clone",
  },
  {
    title: "Face Detection and Recognition",
    description:
      "Created a real-time face recognition system using OpenCV and LBPH algorithm, with a Tkinter-based GUI and Haar Cascade face detection.",
    tags: ["OpenCV", "LBPH", "Tkinter", "Haar Cascade", "Python"],
    link: "https://github.com/AdityaSanap1821/Face_Detection_Recognition",
  },
  {
    title: "Space Knight – 2D Shooter Game",
    description:
      "Developed a Unity-based 2D space shooter with player mechanics, enemy spawning, and animations, focusing on performance and gameplay.",
    tags: ["Unity", "C#", "2D Game", "Game Development"],
    link: "https://cobra-bts.itch.io/space-knight-2d-shooter",
  },
  {
    title: "Portfolio v1 – Original Developer Portfolio",
    description:
      "Built and deployed the first version of my personal developer portfolio with custom UI components, project showcase, and a contact form.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Responsive Design"],
    link: "https://adityasanap1821.github.io/Portfolio/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  useEffect(() => {
    ScrollReveal().reveal(".featured-text", {
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
  }, []);

  return (
    <PageWrapper>
      <div className="relative flex flex-col items-center text-center min-h-screen w-full pt-16 pb-16">
        {/* Title Section */}
        <div className="relative w-full flex items-center justify-center mt-10">
          <div
            className="absolute z-0 -translate-y-10 px-8 whitespace-nowrap featured-text"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <h1 className="text-[2rem] md:text-[3rem] lg:text-[5rem] uppercase font-extrabold tracking-[0.4em] text-white/20 select-none pointer-events-none">
              PROJECTS
            </h1>
          </div>
          <h1 className="relative text-[2rem] md:text-[3rem] lg:text-[5rem] tracking-[0.4em] uppercase font-Avenir leading-none text-white featured-text z-10 whitespace-nowrap">
            PROJECTS
          </h1>
        </div>
        <a
          href="https://github.com/AdityaSanap1821"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm hover:text-blue-300 mt-10"
        >
          View All →
        </a>

        {/* Animated Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="project-card bg-white/5 border border-white/10 rounded-2xl p-6 text-left text-neutral-300 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out backdrop-blur-lg"
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-md mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="bg-white/10 text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm underline hover:text-blue-300"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

