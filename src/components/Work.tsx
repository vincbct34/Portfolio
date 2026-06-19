import { PROJECTS, projectDescriptions } from "../data/projects";
import { useLang } from "../i18n/useLang";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  const { t, lang } = useLang();
  const descriptions = projectDescriptions(lang);

  const entries = PROJECTS.map((project, i) => ({
    project,
    description: descriptions[i] ?? "",
  }));
  const featured = entries.filter((e) => e.project.featured);
  const rest = entries.filter((e) => !e.project.featured);

  return (
    <section className="work section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2 className="section-title">{t.work.title}</h2>
          </div>
        </div>

        {featured.length > 0 && (
          <div className="projects-featured">
            {featured.map(({ project, description }) => (
              <ProjectCard
                key={project.title}
                project={project}
                description={description}
                lang={lang}
                featuredLabel={t.work.featured}
              />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <h3 className="projects-more">{t.work.more}</h3>
            )}
            <div className="projects">
              {rest.map(({ project, description }) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  description={description}
                  lang={lang}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
