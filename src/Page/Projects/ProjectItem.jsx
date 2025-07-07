import { CgArrowsExpandUpRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({
  title,
  image,
  description,
  techStack,
  demo,
  github,
}) => {
  return (
    <div
      className="aos-init aos-animate"
      // data-aos="zoom-in-out"
      // data-aos-duration="1200"
    >
      <div className="group relative w-full">
        <div className="project-item relative overflow-hidden rounded-xl bg-gradient-to-br from-[#200101] to-[#151111] backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-red-500/20">
          <div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-red-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative p-5 z-10">
              <div className="project-img relative overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src={image}
                  alt=""
                />
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="project-title text-2xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  {title}
                </h3>
                <p className="profect-des text-gray-300/80 text-xl leading-relaxed line-clamp-1">
                  {description}
                </p>
                <div className="project-tech flex gap-4">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex items-center justify-between">
                  <a
                    className="project-demo inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200"
                    href={demo}
                  >
                    <span className="text-xl font-medium"> Live Demo</span>
                    <CgArrowsExpandUpRight className="lucide lucide-external-link w-6 h-6" />
                  </a>
                  <a
                    className="project-github inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-red-900 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    href={github}
                  >
                    <span className="text-xl font-medium">Github</span>
                    <FaGithub className="lucide lucide-external-link w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
