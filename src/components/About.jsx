import { about } from '../data/portfolioData';
import { MagicBentoSurface } from './MagicBento';

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h3>Curious builder with a creative lens.</h3>
        </div>

        <MagicBentoSurface className="content-card about-card">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </MagicBentoSurface>
      </div>
    </section>
  );
}

export default About;
