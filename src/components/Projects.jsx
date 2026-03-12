import './Projects.css';

const projects = [
    {
        title: 'Nebula Dashboard',
        description: 'A real-time analytics dashboard with interactive charts, customizable widgets, and dark mode. Built for enterprise data visualization.',
        tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
        gradient: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
        emoji: '📊',
        live: '#',
        code: '#',
    },
    {
        title: 'Pulse Social',
        description: 'A modern social media platform with real-time messaging, content feeds, and AI-powered content recommendations.',
        tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
        gradient: 'linear-gradient(135deg, #ec4899, #a855f7)',
        emoji: '💬',
        live: '#',
        code: '#',
    },
    {
        title: 'Quantum Commerce',
        description: 'Full-stack e-commerce solution with Stripe integration, inventory management, and a headless CMS for content.',
        tags: ['React', 'Stripe', 'AWS', 'GraphQL'],
        gradient: 'linear-gradient(135deg, #34d399, #3b82f6)',
        emoji: '🛒',
        live: '#',
        code: '#',
    },
];

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <div className="glow-orb"></div>

            <div className="container">
                <div className="section-header">
                    <h2>Featured Projects</h2>
                    <p>A selection of my recent work that showcases my skills and passion</p>
                </div>

                <div className="projects-grid stagger-in">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <div
                                    className="project-image-bg"
                                    style={{ background: project.gradient }}
                                >
                                    {project.emoji}
                                </div>
                                <div className="project-overlay">
                                    <a href={project.live} className="project-link live" id={`project-live-${index}`}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a href={project.code} className="project-link code" id={`project-code-${index}`}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="16 18 22 12 16 6"></polyline>
                                            <polyline points="8 6 2 12 8 18"></polyline>
                                        </svg>
                                        Code
                                    </a>
                                </div>
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="project-tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
