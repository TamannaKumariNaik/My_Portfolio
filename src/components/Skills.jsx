import { skills } from '../data/portfolioData';
import MagicBento, { MagicBentoSurface } from './MagicBento';

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h3>Technical ability and creative thinking.</h3>
        </div>

        <div className="skills-grid">
          <MagicBentoSurface className="content-card">
            <h4>Technical Skills</h4>
            <ul className="chip-list">
              {skills.technical.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </MagicBentoSurface>

          <div className="skills-bento">
            <h4>Creative and Interpersonal Skills</h4>
            <MagicBento
              cards={skills.creative.map((skill, index) => ({
                title: skill,
                description: '',
                label: ['Creative', 'Proficient In', 'Analytical', 'Communication', 'Teamwork'][index],
                color: 'var(--panel)',
              }))}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={true}
              clickEffect={true}
              glowColor="201, 232, 108"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
