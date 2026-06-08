const skillGroups = [
  {
    label: 'Frontend',
    color: 'blue',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    label: 'Backend',
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'Database & Cloud',
    color: 'green',
    skills: ['MongoDB', 'Mongoose', 'MongoDB Atlas'],
  },
  {
    label: 'Tools',
    color: 'orange',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        {/* Left — Single Full Photo */}
        <div className="about-photos">
          <img
            src="/photos/photo4.jpg"
            alt="Kartik Thakur"
            className="about-photo-full"
            onError={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #f0e6d8, #e8d8c4)';
            }}
          />
        </div>

        {/* Right — Text & Skills */}
        <div>
          <div className="about-text">
            <span className="section-label">About Me</span>
            <h2>
              Crafting digital experiences with{' '}
              <span className="gradient-text">purpose & precision</span>
            </h2>
            <p>
              I'm a passionate full-stack developer currently mastering the MERN
              stack. I love building things that live on the internet — from
              performant REST APIs to beautiful, responsive UIs.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source, or working on personal projects to sharpen my skills.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">3+</div>
                <div className="stat-label">Projects Built</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">∞</div>
                <div className="stat-label">Curiosity</div>
              </div>
            </div>
          </div>

          <div className="skills-wrap" style={{ marginTop: '2.5rem' }}>
            {skillGroups.map(group => (
              <div key={group.label}>
                <div className="skill-group-label">{group.label}</div>
                <div className="skill-pills">
                  {group.skills.map(skill => (
                    <span key={skill} className={`skill-pill ${group.color}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;