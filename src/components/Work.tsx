import { PROJECTS } from "../data/projects";
import { useTheme } from "../theme/useTheme";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  const { copy } = useTheme();

  return (
    <section className="work" id="work">
      <h2 className="section-title">{copy.workTitle}</h2>
      <div className="projects">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            description={copy.projectDescriptions[i] ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
