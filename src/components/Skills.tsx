import { FaReact, FaPython, FaGithub, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiUnity } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skillsData = [
  { name: 'Next.js', icon: <SiNextdotjs size={48} className="text-black" /> },
  { name: 'React', icon: <FaReact size={48} className="text-sky-500" /> },
  { name: 'TypeScript', icon: <SiTypescript size={48} className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} className="text-sky-400" /> },
  { name: 'Python', icon: <FaPython size={48} className="text-yellow-400" /> },
  { name: 'VS Code', icon: <DiVisualstudio size={48} className="text-blue-400" /> },
  { name: 'Git&GitHub', icon: <FaGithub size={48} className="text-black" /> },
  { name: 'Docker', icon: <FaDocker size={48} className="text-blue-600" /> },
  { name: 'Unity', icon: <SiUnity size={48} className="text-black" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-2xl rounded-lg">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          私が使用できる技術一覧です。
        </p>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              {skill.icon}
              <p className="mt-3 font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;