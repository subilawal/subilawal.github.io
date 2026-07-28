import resume from '../assets/OLASUBOMI_LAWAL__RESUME.pdf';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <p className="portfolio">Portfolio</p>
            <h1>Subi Lawal</h1>
            <p className="intro">
                (tbd)
            </p>
            <div className="hero-actions">
                <a href="#projects" className="button primary">
                    View Projects
                </a>
                <a href={resume} className="button secondary" target="_blank" rel="noreferrer" download>
                    Resume
                </a>
                <a href="#contact" className="button secondary">
                    Contact Me
                </a>
            </div>
        </section>
    )
}

export default HeroSection
