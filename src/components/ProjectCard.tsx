type ProjectCardProps = {
    title: React.ReactNode;
    description: React.ReactNode;
    year?: string;
    titleHref?: string;
    tech: string[];
}

const ProjectCard = ({ title, description, year, titleHref, tech }: ProjectCardProps) => {
    return (

        <article className="card">
            <a href={titleHref} className="card-link" >
                <h3>{title}</h3>

                {year && <p style={{ fontSize: 14 }}>{year}</p>}

                <p>{description}</p>

                <ul className="tech-list">
                    {tech.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </a>
        </article>

    )
}

export default ProjectCard
