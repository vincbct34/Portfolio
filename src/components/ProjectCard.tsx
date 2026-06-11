import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  description: string;
}

export function ProjectCard({ project, description }: ProjectCardProps) {
  return (
    <a
      className="project"
      href={project.href}
      {...(project.href !== "#"
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="num">{project.num}</span>
      <div className={`media ${project.mediaClass}`}>
        {project.image && (
          <img src={project.image} alt="" loading="lazy" decoding="async" />
        )}
      </div>
      <div className="body">
        <h3>{project.title}</h3>
        <p>{description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
