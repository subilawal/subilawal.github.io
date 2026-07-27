import ProjectCard from './ProjectCard'

const projects = [
    {
        title: 'Upcoming Mobile App',
        description: (
            <p>
                Details to be revealed <span style={{ fontWeight: 700, fontStyle: 'italic' }}>very</span> soon.
            </p>
        ),
        year: '2026',
        tech: ['React Native', 'TypeScript', 'Firebase',],
    },
    {
        title: 'Subi Lawal Web Portfolio',
        description: 'My personal portfolio website to showcase me as an individual, as well as my experience and skills.',
        year: '2026',
        tech: ['React', 'TypeScript', 'Vite', 'HTML', 'CSS'],
    },
    {
        title: 'Walmart\'s Associates in Critical Need Trust (ACNT) Web Application',
        titleHref: 'https://acnt.walmart.com/',
        description: 'A full-stack scalable associate grant application that streamlines the application process for associates and reviewers.',
        year: '2025',
        tech: ['React', 'TypeScript', 'JavaScript', 'Java', 'MongoDB', 'Spring Boot'],
    },
    {
        title: 'MyFit',
        titleHref: 'https://my-fit-webapp.vercel.app',
        description: 'A fitness journey webpage to track workouts and log personal records.',
        year: '2024',
        tech: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    },
    {
        title: 'Edgewood Athletics Database',
        description: 'A database for managing athletic records and information for Edgewood Athletics.',
        year: '2024',
        tech: ['MySQL', 'Java Swing'],
    },
    {
        title: 'Robotnist',
        titleHref: 'https://tugdc.itch.io/robotnist',
        description: 'A 2D, top-down view game in which a player controls a robot that has a handful of objectives to complete to protect his garden.',
        year: '2023',
        tech: ['Godot', 'GDScript'],
    },
]

const Projects = () => {
    return (
        <section id="projects" className="content-section">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
