import { useEffect, useState } from 'react';
import { fetchProjects } from '../api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load projects.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={styles.status}>Loading projects...</p>;
  if (error) return <p style={styles.status}>{error}</p>;

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map(project => (
          <div key={project._id} style={styles.card}>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.description}</p>
            <span style={styles.tech}>{project.tech}</span>
            <div style={styles.links}>
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" style={styles.link}>
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" style={styles.link}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '5rem 2rem', background: '#f8fafc' },
  heading: { textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem', maxWidth: '900px', margin: '0 auto' },
  card: { background: 'white', borderRadius: '12px', padding: '1.5rem',
          border: '1px solid #e2e8f0' },
  title: { margin: '0 0 0.5rem', fontSize: '1.1rem' },
  desc: { color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' },
  tech: { fontSize: '0.8rem', color: '#0369a1', background: '#e0f2fe',
          padding: '0.25rem 0.75rem', borderRadius: '999px' },
  links: { display: 'flex', gap: '0.75rem', marginTop: '1rem' },
  link: { fontSize: '0.85rem', color: '#0369a1', textDecoration: 'none',
          border: '1px solid #0369a1', padding: '0.25rem 0.75rem',
          borderRadius: '6px' },
  status: { textAlign: 'center', padding: '5rem 2rem', color: '#64748b' },
};

export default Projects;