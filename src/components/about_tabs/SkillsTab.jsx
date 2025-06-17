// src/components/about_tabs/SkillsTab.jsx

import FlutterIcon from '../../assets/skills_icons/frontend/flutter_icon.svg';
import ReactIcon from '../../assets/skills_icons/frontend/react_icon.svg';
import HTMLIcon from '../../assets/skills_icons/frontend/html5_icon.svg';
import CSSIcon from '../../assets/skills_icons/frontend/css3_icon.svg';
import JSIcon from '../../assets/skills_icons/frontend/javascript_icon.svg';
import TailwindIcon from '../../assets/skills_icons/frontend/tailwind_css_icon.svg';

import SpringIcon from '../../assets/skills_icons/backend/spring_boot_icon.svg';
import PHPIcon from '../../assets/skills_icons/backend/php_icon.svg';
import PythonIcon from '../../assets/skills_icons/backend/python_icon.svg';

import KotlinIcon from '../../assets/skills_icons/mobile/kotlin_icon.svg';

import PostgresSqlIcon from '../../assets/skills_icons/databases/postgressql_icon.svg';
import MongoDbIcon from '../../assets/skills_icons/databases/mongodb_icon.svg';
import MySqlIcon from '../../assets/skills_icons/databases/mysql_icon.svg';
import Neo4jIcon from '../../assets/skills_icons/databases/neo4j_icon.svg';

import AndroidStudioIcon from '../../assets/skills_icons/mobile/android_studio_icon.svg';
import FigmaIcon from '../../assets/skills_icons/other_tech/figma_icon.svg';
import GitIcon from '../../assets/skills_icons/other_tech/github_icon.svg';
import UnityIcon from '../../assets/skills_icons/other_tech/unity_icon.svg';


const skillData = [
  {
    category: "Frontend",
    icons: [
      { Icon: FlutterIcon, label: "Flutter" },
      { Icon: ReactIcon, label: "React" },
      { Icon: HTMLIcon, label: "HTML" },
      { Icon: CSSIcon, label: "CSS" },
      { Icon: JSIcon, label: "JavaScript" },
      { Icon: TailwindIcon, label: "Tailwind" },
    ],
  },
  {
    category: "Backend",
    icons: [
      { Icon: SpringIcon, label: "Spring Boot" },
      { Icon: PHPIcon, label: "PHP" },
      { Icon: PythonIcon, label: "Python" },
    ],
  },
  {
    category: "Mobile",
    icons: [
      { Icon: KotlinIcon, label: "Kotlin" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { Icon: PostgresSqlIcon, label: "Postgres SQL" },
      { Icon: MongoDbIcon, label: "Mongo DB" },
      { Icon: MySqlIcon, label: "My SQL" },
      { Icon: Neo4jIcon, label: "Neo4j" },
    ],
  },
  {
    category: "Other Technologies",
    icons: [
      { Icon: AndroidStudioIcon, label: "Android Studio" },
      { Icon: FigmaIcon, label: "Figma" },
      { Icon: GitIcon, label: "GitHub" },
      { Icon: UnityIcon, label: "Unity" },
    ],
  },
];

export default function SkillsTab() {
  return (
    <div className="space-y-10 text-sm text-neutral-300">
      {skillData.map(({ category, icons }) => (
        <div
          key={category}
          className="border-b border-white/10 pb-4"
        >
          {/* --- Mobile Layout --- */}
          <div className="md:hidden">
            <h4 className="font-semibold text-white text-lg uppercase mb-6">
              {category}
            </h4>
            <div className="grid grid-cols-3 gap-6 w-full">
              {icons.map(({ Icon, label }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
                >
                  <img src={Icon} alt={label} className="w-10 h-10 mb-1" />
                  <span className="text-white text-xs uppercase tracking-wider text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Desktop & Tablet Layout --- */}
          <div className="hidden md:flex justify-between items-center">
            <h4 className="font-semibold text-white w-1/3 uppercase">
              {category}
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 w-full">
              {icons.map(({ Icon, label }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center hover:scale-105 transition-transform duration-200"
                >
                  <img src={Icon} alt={label} className="w-10 h-10 mb-1" />
                  <span className="text-white text-xs uppercase tracking-wider text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

