// src/components/about_tabs/EducationTab.jsx

export default function EducationTab() {
  const education = [
    {
      level: "Bachelor's Degree",
      duration: "2021 - Present",
      institution: "BTech in IT Engineering – KJ Somaiya College Of Engineering",
      result: "SEM V SGPA: 8.01",
    },
    {
      level: "HSC",
      duration: "2019 - 2021",
      institution: "Narayana Junior College, Thane",
      result: "Percentage: 95.5%",
    },
    {
      level: "SSC",
      duration: "2019",
      institution: "Vasant Vihar Highschool, Thane",
      result: "Percentage: 95.00%",
    },
  ];

  return (
    <div className="space-y-6 text-sm text-neutral-300">
      {education.map((edu, index) => (
        <div
          key={index}
          className="border border-white/10 bg-white/5 p-4 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
        >
          <div className="flex items-start justify-between mb-1">
            <h4 className="text-white font-semibold text-base">{edu.level}</h4>
            <p className="text-neutral-400 text-xs whitespace-nowrap">{edu.duration}</p>
          </div>
          <p className="italic text-md mb-1">{edu.institution}</p>
          <p className="text-neutral-300 text-md">{edu.result}</p>
        </div>
      ))}
    </div>
  );
}

