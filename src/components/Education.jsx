import { education } from '../data/portfolioData';
import { MagicBentoSurface } from './MagicBento';

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h3>Academic foundation.</h3>
        </div>

        <MagicBentoSurface className="content-card education-card">
          <h4>{education.degree}</h4>
          <p>{education.school}</p>
          <p>{education.year}</p>
        </MagicBentoSurface>
      </div>
    </section>
  );
}

export default Education;
