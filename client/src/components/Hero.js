function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-badge">Available for opportunities</div>

      <h1>
        Hi, I'm{' '}
        <span className="gradient-text">Kartik Thakur</span>
        <br />
        Full-Stack Developer
      </h1>

      <p className="hero-sub">
        I build fast, modern web applications using the MERN stack.
        Passionate about clean code, great UX, and turning ideas into reality.
      </p>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          View My Work
        </a>
        <a href="#contact" className="btn-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get In Touch
        </a>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;