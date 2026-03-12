import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="glow-orb"></div>

            <div className="container">
                <div className="section-header">
                    <h2>About Me</h2>
                    <p>A passionate developer dedicated to crafting exceptional digital experiences</p>
                </div>

                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-image-wrapper">
                            <div className="about-image-placeholder">
                                <span className="about-avatar">👨‍💻</span>
                            </div>
                        </div>

                        <div className="about-float-card card-1">
                            <div className="card-number">5+</div>
                            <div className="card-label">Years Experience</div>
                        </div>

                        <div className="about-float-card card-2">
                            <div className="card-number">50+</div>
                            <div className="card-label">Projects Completed</div>
                        </div>
                    </div>

                    <div className="about-text">
                        <h3>Turning vision into interactive reality</h3>
                        <p>
                            I'm a full-stack developer with a passion for building beautiful, functional,
                            and user-centered digital experiences. With 5+ years of experience in web
                            development, I've had the pleasure of working with startups and established
                            companies to bring their ideas to life.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing
                            to open-source projects, or mentoring aspiring developers. I believe in writing
                            clean, maintainable code that makes a difference.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎨</div>
                                <span className="highlight-label">UI/UX Design</span>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">⚡</div>
                                <span className="highlight-label">Performance</span>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">📱</div>
                                <span className="highlight-label">Responsive</span>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">🔒</div>
                                <span className="highlight-label">Security First</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
