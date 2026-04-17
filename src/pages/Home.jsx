import { ArrowRight, Download, Award, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../index.css';
import profilePic from '../assets/kavi.jpeg';

function Home() {
  const projects = [
    {
      title: '128-bit Processor',
      desc: 'Designed with integrated Wallace Tree Multiplier; implemented complete VLSI flow (RTL to layout) using Cadence tools for high-speed AI computations.',
      tech: ['Cadence Tools', 'VLSI Flow', 'RTL to Layout']
    },
    {
      title: 'Asynchronous FIFO',
      desc: 'Designed with CDC handling using Gray code and synchronizers; verified functionality using SystemVerilog testbench with assertions.',
      tech: ['SystemVerilog', 'CDC', 'Gray Code']
    },
    {
      title: 'AXI-protocol',
      desc: 'Designed and verified module with VALID/READY handshake; performed RTL-to-GDSII implementation and timing validation.',
      tech: ['RTL-to-GDSII', 'Valid/Ready Handshake']
    },
    
    {
      title: 'CRC (Cyclic Redundancy Check)',
      desc: 'Developed algorithms for error detection and correction to ensure data integrity in digital communication.',
      tech: ['Algorithm Design', 'Data Integrity']
    }
  ];

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', flexWrap: 'wrap-reverse' }}>
            <div style={{ maxWidth: '700px', textAlign: 'left' }}>
            
            {/* Pill Badge */}
            <div style={{ 
              display: 'inline-block', 
              padding: '0.4rem 1.25rem', 
              borderRadius: '9999px', 
              border: '1px solid var(--primary)', 
              background: 'rgba(16, 185, 129, 0.1)', 
              color: 'var(--primary)', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.875rem', 
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}>
              Aspiring VLSI Professional
            </div>
            
            {/* Main Heading & Bold Value Statement */}
            <h1 className="hero-heading" style={{ marginBottom: '1rem', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              <span className="glow-text">Kavi Priyan G.</span>
            </h1>
            <h2 className="hero-subheading" style={{ color: 'var(--foreground)', fontWeight: 'bold', lineHeight: '1.3' }}>
              Specializing in RTL-to-GDSII flow.<br/>
              Bridging algorithms to high-performance silicon.
            </h2>
            
            {/* Body Text */}
            <p className="hero-p" style={{ maxWidth: '700px', lineHeight: '1.8', color: 'var(--text-muted)' }}>
              I am an Electronics & Communication Engineer with a strong foundation in digital design and hardware verification.
            </p>
            
            {/* Navigation Buttons Row */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="/resume.pdf" target="_blank" className="btn btn-primary" download style={{ padding: '0.875rem 2.5rem', borderRadius: '999px', fontSize: '0.9rem' }}>
                Download Resume
              </a>
             
              <Link to="/about" className="btn btn-secondary" style={{ padding: '0.875rem 2.5rem', borderRadius: '999px', border: '2px solid var(--border)', fontSize: '0.9rem' }}>
                View Skills
              </Link>

              <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.875rem 2.5rem', borderRadius: '999px', border: '2px solid var(--border)', fontSize: '0.9rem' }}>
                Contact Me
              </Link>
            </div>
            
            {/* Data Row / Stats */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '1.5rem', justifyContent: 'start' }}>
              <div className="glass-card" style={{ padding: '1.5rem 2.5rem', border: '1px solid rgba(16, 185, 129, 0.3)', borderLeft: '4px solid var(--primary)', borderRadius: '12px' }}>
                <h3 className="stats-number" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem', lineHeight: '1' }}>10+</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects Handled</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem 2.5rem', border: '1px solid rgba(59, 130, 246, 0.3)', borderLeft: '4px solid var(--secondary)', borderRadius: '12px' }}>
                <h3 className="stats-number" style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.5rem', lineHeight: '1' }}>5+</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Major Achievements</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem 2.5rem', border: '1px solid var(--border)', borderLeft: '4px solid var(--foreground)', borderRadius: '12px' }}>
                <h3 className="stats-heading" style={{ fontSize: '1.5rem', color: 'var(--foreground)', marginBottom: '0.5rem', lineHeight: '1', display: 'flex', alignItems: 'center', height: '2.5rem' }}>Founder & Head</h3>
                <p style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--foreground)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hardware <span style={{ color: 'var(--primary)' }}>@ Nanozenix</span></p>
              </div>
            </div>
            </div>

            {/* Image Section */}
            <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', paddingBottom: '2rem' }}>
              <img 
                src={profilePic} 
                alt="Kavi Priyan G." 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section integrated into Home */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <h2 className="glow-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Featured Projects</h2>
          
          <div className="grid grid-cols-2">
            {projects.map((project, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Cpu color="var(--primary)" size={24} />
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--foreground)' }}>{project.title}</h3>
                </div>
                <p style={{ flex: 1 }}>{project.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', padding: '0.25rem 0.5rem', background: 'rgba(250, 250, 250, 0.05)', borderRadius: '4px', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Highlight Banner */}
      <section style={{ padding: '3rem 0 5rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem', 
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, var(--card) 100%)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1.5rem', borderRadius: '50%' }}>
              <Award size={40} color="var(--primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                Winner of Makeathon 3.0
              </h3>
              <p style={{ margin: 0 }}>
                St. Joseph’s College of Engineering • Project: <strong>'AI & ML Enabled Video Analysis and Interpretation'</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section style={{ padding: '0 0 5rem 0' }}>
        <div className="container">
          <h2 className="glow-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Certifications</h2>
          <div className="grid grid-cols-2">
            {[
              'RTL-to-GDSII - Cadence',
              'SystemVerilog Accelerated Certification - Cadence',
              'Digital Design with Verilog - NPTEL (Elite)',
              'VLSI for Beginners - NIELIT',
              'Analog IC Design Flow - Cadence'
            ].map((cert, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: '2px solid var(--secondary)' }}>
                <div style={{ marginTop: '0.25rem' }}>
                  <Award size={20} color="var(--secondary)" />
                </div>
                <span style={{ color: 'var(--foreground)' }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
