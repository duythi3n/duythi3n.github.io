import ProjectBtn from "../../component/Button/ProjectBtn";
import ProjectList from "./ProjectList";

const Project = ({ name, title }) => {
  return (
    <div className="project w-full overflow-hidden mt-20" id="projects">
      <div
        className="text-center pb-10 mt-30 aos-init aos-animate"
        data-aos="zoom-in-up"
        data-aos-duration="1200"
      >
        <h2 className="project-name text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800d0d] to-[#5a0606] aos-init aos-animate">
          <span className="">{name}</span>
        </h2>
        <p className="project-title mt-2 text-gray-400 max-w-2xl mx-auto text-2xl gap-2">
          {title}
        </p>
      </div>
      <div className="project w-[80%] min-h-16 mx-auto ">
        {/* <div className="w-full border border-red-800 rounded-3xl">
          <div className="flex gap-4">
            <div className="w-full">
              <ProjectBtn />
            </div>
            <div className="w-full">
              <ProjectBtn />
            </div>
            <div className="w-full">
              <ProjectBtn />
            </div>
          </div>
        </div> */}
        <ProjectList />
      </div>
    </div>
  );
};

export default Project;
