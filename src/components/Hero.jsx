import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section" id="hero">
            {/* Animated background */}
            <div className="hero-bg">
                <div className="glow-orb"></div>
                <div className="glow-orb"></div>
                <div className="glow-orb"></div>
            </div>
            <div className="hero-grid"></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for work
                    </div>

                    <h1>
                        Hi, I'm <span className="gradient-text">Chaitanya D. Pahade</span>
                        <br />
                        Creative Developer
                    </h1>

                    <p className="hero-description">
                        I craft beautiful, performant web experiences that blend cutting-edge
                        technology with thoughtful design. Let's build something extraordinary together.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary">
                            View My Work
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <div className="scroll-indicator">
                    <div className="scroll-dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
