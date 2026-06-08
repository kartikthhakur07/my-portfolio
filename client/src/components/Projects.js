/* ── SVG Icons ── */
const icons = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  landmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22"/>
      <line x1="6" y1="18" x2="6" y2="11"/>
      <line x1="10" y1="18" x2="10" y2="11"/>
      <line x1="14" y1="18" x2="14" y2="11"/>
      <line x1="18" y1="18" x2="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  ),
  barChart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  ),
  droplet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  ),
};

const PROJECTS = [
  {
    id: 1,
    title: 'Vielfi',
    description: 'A modern web application built collaboratively. Focused on delivering a seamless and interactive user experience with clean architecture.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/j25aiml192-hash/vielfi',
    live: null,
    color: 'blue',
    icon: 'globe',
  },
  {
    id: 2,
    title: 'NitiSetu Frontend',
    description: 'Frontend interface for NitiSetu — a civic-tech platform bridging citizens and government policy. Built with modern UI principles.',
    tech: ['React', 'CSS3', 'JavaScript'],
    github: 'https://github.com/j25aiml192-hash/nitisetu-frontend',
    live: null,
    color: 'indigo',
    icon: 'landmark',
  },
  {
    id: 3,
    title: 'NitiYantra',
    description: 'An intelligent policy analysis tool. NitiYantra helps decode complex government policies and makes them accessible to everyone.',
    tech: ['React', 'Node.js', 'REST API'],
    github: 'https://github.com/j25aiml192-hash/NitiYantra',
    live: null,
    color: 'sky',
    icon: 'cpu',
  },
  {
    id: 4,
    title: 'Spendly',
    description: 'A smart personal finance tracker to manage expenses, set budgets, and visualize spending patterns with intuitive charts.',
    tech: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/j25aiml192-hash/spendly',
    live: null,
    color: 'emerald',
    icon: 'barChart',
  },
  {
    id: 5,
    title: 'Honey Voice Assistant',
    description: 'A Python-powered voice assistant that listens, understands, and responds. Features speech recognition, NLP, and task automation.',
    tech: ['Python', 'SpeechRecognition', 'NLP'],
    github: 'https://github.com/kartikthhakur07/honey-voice_assistant',
    live: null,
    color: 'violet',
    icon: 'mic',
  },
  {
    id: 6,
    title: 'Lake Watcher',
    description: 'An environmental monitoring application for tracking lake water quality, pollution levels, and ecological health over time.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/kartikthhakur07/lake-watcher',
    live: null,
    color: 'teal',
    icon: 'droplet',
  },
];


const colorMap = {
  blue:    { grad: 'linear-gradient(135deg,#1e3a5f,#2563eb)', tag: '#1e3a5f', tagBg: '#eff6ff', tagBorder: '#bfdbfe', glow: 'rgba(37,99,235,0.18)'  },
  indigo:  { grad: 'linear-gradient(135deg,#312e81,#6366f1)', tag: '#3730a3', tagBg: '#eef2ff', tagBorder: '#c7d2fe', glow: 'rgba(99,102,241,0.18)' },
  sky:     { grad: 'linear-gradient(135deg,#0369a1,#38bdf8)', tag: '#0c4a6e', tagBg: '#f0f9ff', tagBorder: '#bae6fd', glow: 'rgba(56,189,248,0.18)' },
  emerald: { grad: 'linear-gradient(135deg,#065f46,#10b981)', tag: '#065f46', tagBg: '#ecfdf5', tagBorder: '#a7f3d0', glow: 'rgba(16,185,129,0.18)' },
  violet:  { grad: 'linear-gradient(135deg,#4c1d95,#8b5cf6)', tag: '#4c1d95', tagBg: '#f5f3ff', tagBorder: '#ddd6fe', glow: 'rgba(139,92,246,0.18)' },
  teal:    { grad: 'linear-gradient(135deg,#134e4a,#14b8a6)', tag: '#134e4a', tagBg: '#f0fdfa', tagBorder: '#99f6e4', glow: 'rgba(20,184,166,0.18)'  },
};

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="13" height="13">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
    </svg>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2>Featured <span className="gradient-text">Projects</span></h2>
          <p>A collection of things I've built — from civic-tech to voice assistants.</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, idx) => {
            const c = colorMap[project.color];
            return (
              <div
                key={project.id}
                className="project-card animate-in"
                style={{ animationDelay: `${idx * 0.08}s`, '--card-glow': c.glow }}
              >
                {/* Gradient header banner */}
                <div className="project-card-header" style={{ background: c.grad }}>
                  <div className="project-card-icon">
                    {icons[project.icon]}
                  </div>
                  <span className="project-card-num">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Card body */}
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="tech-tag"
                        style={{ color: c.tag, background: c.tagBg, borderColor: c.tagBorder }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <GitHubIcon />
                      View on GitHub
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="project-link-live" style={{ color: c.tag }}>
                        <ArrowIcon />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all on GitHub */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="https://github.com/kartikthhakur07" target="_blank" rel="noreferrer" className="btn-secondary">
            <GitHubIcon />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;