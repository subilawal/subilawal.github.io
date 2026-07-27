import resume from '../assets/OLASUBOMI_LAWAL__RESUME.pdf';

const Contact = () => {
    return (
        <section id="contact" className="content-section">
            <h2>Contact</h2>
            <p>I'm open to new opportunities and collaborations.</p>

            <div className="contact-actions">
                <a href="mailto:subil0214@gmail.com" className="button primary">
                    <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" />
                        <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
                    </svg>
                    Email Me
                </a>
                <a href="https://www.linkedin.com/in/olasubomi-lawal/" className="button secondary" target="_blank" rel="noreferrer">
                    <svg className="button-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M6.94 5.5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02M3.34 9h3.13v11H3.34zM10 9h3v1.71h.04c.42-.8 1.44-1.64 2.96-1.64 3.16 0 3.75 2.08 3.75 4.78V20h-3.13v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H10z" />
                    </svg>
                    LinkedIn
                </a>
                <a href="https://github.com/subilawal" className="button secondary" target="_blank" rel="noreferrer">
                    <svg className="button-icon" viewBox="0 0 19 19" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clipRule="evenodd" />
                    </svg>
                    GitHub
                </a>
                <a href={resume} className="button secondary" target="_blank" rel="noreferrer" download>
                    Resume
                </a>
            </div>
        </section>
    )
}

export default Contact
