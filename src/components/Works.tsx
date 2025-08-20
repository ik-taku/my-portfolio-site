import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const Works = () => {
  const worksData = [
    {
      title: "道端バトラーズ",
      description: "2Dアクション格闘ゲーム",
      tags: ["Unity", "C#"],
      imageUrl: "#",
      liveUrl: "#",
      githubUrl: "https://github.com/ik-taku/Asphalt-Warriors.git",
    },
    {
      title: "バスケ部のHP",
      description: "所属するバスケ部のHP",
      tags: ["React", "Vite"],
      imageUrl: "#",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "シフ長",
      description: "AIエージェント",
      tags: ["React", "firebase"],
      imageUrl: "#",
      liveUrl: "https://shift-management-prod-444098581966.asia-northeast1.run.app/",
      githubUrl: "https://github.com/akitozizi818/shift-management-ai.git",
    },
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-2xl rounded-lg">
        <h2 className="text-4xl font-bold text-center tracking-tight text-gray-900">
          Works
        </h2>
        
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {worksData.map((work) => (
            <div key={work.title} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img src={work.imageUrl} alt={work.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{work.title}</h3>
                <p className="mt-2 text-gray-600">{work.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-gray-600 hover:text-black transition-transform duration-300 group-hover:scale-110">
                    <FaGithub size={28} />
                  </a>
                  <a href={work.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-600 hover:text-black transition-transform duration-300 group-hover:scale-110">
                    <FiExternalLink size={28} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;