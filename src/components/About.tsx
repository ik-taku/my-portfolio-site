import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white shadow-2xl rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="flex-shrink-0">
            <img 
              src="/introduce_icon_1024.png" 
              alt="プロフィール写真" 
              className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover" 
            />
          </div>

          <div className="w-full text-center md:text-left">
            
            <div className="text-4xl font-bold tracking-tight text-gray-900">
              ike.taku
            </div>

            <div className="mt-6 text-lg text-gray-600 space-y-4">
              {/* 所属・分野・趣味セクション... */}
              <div>
                <p className="font-semibold text-gray-800">所属</p>
                <p>大阪公立大学 工学部 情報工学科</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">分野</p>
                <p>AIエージェント / アプリ開発 / Web開発</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">趣味</p>
                <p>バスケ / 筋トレ / プログラミング</p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-6">
              <a 
                href="https://github.com/ik-taku/my-portfolio-site.git"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub size={28} />
              </a>
              <a 
                href="https://www.instagram.com/taaaaakun3150?igsh=M2x4bnFqYWpjb2t1&utm_source=qr"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram size={28} />
              </a>
              <a 
                href="https://x.com/ike_taku13"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                <FaXTwitter size={28} />
              </a>
              <a 
                href="https://zenn.dev/ike_taku"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Zenn"
                className="text-gray-500 hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                <SiZenn size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;