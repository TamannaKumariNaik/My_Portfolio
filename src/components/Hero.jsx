import { hero } from '../data/portfolioData';
import { MagicBentoSurface } from './MagicBento';

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Student Developer • Web • AI</p>
          <h1>{hero.name}</h1>
          <h2>{hero.title}</h2>
          <p className="lead">{hero.description}</p>

          <div className="cta-row">
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="btn btn-secondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>

        </div>

        <MagicBentoSurface className="hero-card" aria-label="Professional summary card">
          <img
            className="hero-portrait"
            src="https://github.com/TamannaKumariNaik.png?size=640"
            alt="Tamanna Kumari Naik"
            fetchPriority="high"
          />
          <div className="mini-label">Current focus</div>
          <ul>
            <li>Web applications</li>
            <li>AI experiments</li>
            <li>Creative problem-solving</li>
            <li>Leadership and communication</li>
          </ul>
        </MagicBentoSurface>
      </div>
    </section>
  );
}

export default Hero;
