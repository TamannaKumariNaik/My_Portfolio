import { achievement } from '../data/portfolioData';
import { MagicBentoSurface } from './MagicBento';

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Achievements</p>
          <h3>Milestones that reflect my learning journey.</h3>
        </div>

        <div className="achievement-layout single-achievement-layout">
          <MagicBentoSurface className="content-card certificate-card">
            <div className="certificate-header">
              <span className="certificate-tag">{achievement.certificateLabel}</span>
            </div>
            <h4>{achievement.title}</h4>
            <ul>
              <li>
                <strong>Profile:</strong> {achievement.organization}
              </li>
              <li>
                <strong>Status:</strong> {achievement.dates}
              </li>
              <li>
                <strong>Focus:</strong> {achievement.location}
              </li>
              <li>
                <strong>Update frequency:</strong> {achievement.certificateDate}
              </li>
              <li>
                <strong>Note:</strong> {achievement.summary}
              </li>
            </ul>
          </MagicBentoSurface>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
