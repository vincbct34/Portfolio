import type { Project } from "../data/projects";
import type { Lang } from "../i18n/lang";
import { ArrowUpRight } from "./icons";

interface ProjectCardProps {
  project: Project;
  description: string;
  lang: Lang;
  /** Renders the card in the large highlighted layout with this badge text. */
  featuredLabel?: string;
}

export function ProjectCard({
  project,
  description,
  lang,
  featuredLabel,
}: ProjectCardProps) {
  const isLink = project.href !== "#";
  const className = `project${featuredLabel ? " project--featured" : ""}${
    isLink ? "" : " project--static"
  }`;

  // WIP projects (href "#") render as a plain card — no jump-to-top on click.
  const Wrapper = isLink ? "a" : "div";
  const linkProps = isLink
    ? {
        href: project.href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper className={className} {...linkProps}>
      <div className="project__text">
        <div className="project__head">
          <span className="project__meta">
            {featuredLabel && (
              <span className="project__badge">{featuredLabel}</span>
            )}
            {project.category[lang]} — {project.year}
          </span>
          <ArrowUpRight className="project__arrow" />
        </div>
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{description}</p>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className={`project__media ${project.mediaClass}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project__media-placeholder" aria-hidden="true">
            {project.num}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
