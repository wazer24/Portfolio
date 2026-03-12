import './Skills.css';

const skills = [
    { icon: '⚛️', name: 'React', level: 'Advanced', progress: 92 },
    { icon: '📜', name: 'JavaScript', level: 'Advanced', progress: 95 },
    { icon: '🟦', name: 'TypeScript', level: 'Advanced', progress: 88 },
    { icon: '🟢', name: 'Node.js', level: 'Advanced', progress: 90 },
    { icon: '🐍', name: 'Python', level: 'Intermediate', progress: 75 },
    { icon: '🎨', name: 'CSS/SCSS', level: 'Advanced', progress: 93 },
    { icon: '🗄️', name: 'PostgreSQL', level: 'Intermediate', progress: 78 },
    { icon: '☁️', name: 'AWS', level: 'Intermediate', progress: 72 },
    { icon: '🐳', name: 'Docker', level: 'Intermediate', progress: 70 },
    { icon: '📊', name: 'GraphQL', level: 'Intermediate', progress: 76 },
    { icon: '🔥', name: 'Next.js', level: 'Advanced', progress: 87 },
    { icon: '🧪', name: 'Testing', level: 'Advanced', progress: 85 },
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="glow-orb"></div>

            <div className="container">
                <div className="section-header">
                    <h2>Skills & Technologies</h2>
                    <p>The tools and technologies I use to bring ideas to life</p>
                </div>

                <div className="skills-grid stagger-in">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index} style={{ animationDelay: `${0.05 * index}s` }}>
                            <span className="skill-icon">{skill.icon}</span>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-level">{skill.level}</div>
                            <div className="skill-bar" style={{ width: `${skill.progress}%` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
