import { DiCode } from "react-icons/di";
import useAOS from "../../Hooks/useAOS";

const ProjectBtn = () => {
  useAOS();
  return (
    <div>
      <a
        href="#contact"
        // className="flex items-center gap-2 border border-red-700 text-red-700 font-medium rounded-lg px-6 py-3 min-w-[180px] justify-center hover:bg-[#4f1e1e] transition"
      >
        <button className="group relative w-[160px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c94f4f] to-[#872d2d] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
          <div className="relative h-11 bg-[#370101] px-8 py-10 backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
            <span className="absolute inset-0 flex items-center justify-center gap-2 text-xl group-hover:scale-105 transition-all duration-300">
              <DiCode className="text-3xl" />
              <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
                Projects
              </span>
            </span>
          </div>
        </button>
      </a>
    </div>
  );
};

export default ProjectBtn;
