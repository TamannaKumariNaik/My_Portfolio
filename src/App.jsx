import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GhostCursor from './components/GhostCursor';

function App() {
  return (
    <>
      <div className="page-shell">
        <GhostCursor
          color="#B497CF"
          brightness={0.5}
          edgeIntensity={0.12}
          trailLength={24}
          inertia={0.45}
          grainIntensity={0.015}
          bloomStrength={0.05}
          bloomRadius={0.9}
          bloomThreshold={0.04}
          fadeDelayMs={800}
          fadeDurationMs={1200}
          zIndex={0}
          mixBlendMode="screen"
        />
        <Navigation />
        <main className="page-main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
