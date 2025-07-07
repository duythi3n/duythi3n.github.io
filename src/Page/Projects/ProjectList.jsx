import projects from "../../data/Projects";
import useAOS from "../../Hooks/useAOS";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  useAOS();
  return (
    <div className="project-list grid lg:grid-cols-2 gap-8">
      {projects.map((project) => {
        return (
          <div key={project.id} data-aos="zoom-in-up" data-aos-duration="1200">
            <ProjectItem
              title={project.title}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              demo={project.demo}
              github={project.github}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ProjectList;
