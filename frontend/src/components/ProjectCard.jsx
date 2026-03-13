export default function ProjectCard({ project }) {
  return (
    <article className="card card--glass">
      <header className="card__header">
        <h3>{project.title}</h3>
      </header>
      <p className="card__body">{project.description}</p>
      <footer className="card__footer">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </footer>
    </article>
  );
}
