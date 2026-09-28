import { contact } from '../data/portfolioData';
import { MagicBentoSurface } from './MagicBento';

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h3>Let’s connect.</h3>
        </div>

        <MagicBentoSurface className="content-card contact-card">
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href={contact.github} target="_blank" rel="noreferrer">
              Visit GitHub profile
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              View LinkedIn profile
            </a>
          </p>
        </MagicBentoSurface>
      </div>
    </section>
  );
}

export default Contact;
