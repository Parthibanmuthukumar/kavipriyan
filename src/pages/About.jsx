import { BookOpen, GraduationCap, CheckCircle, Award } from 'lucide-react';
import '../index.css';

function About() {
  return (
    <div className="page-enter">
      <section>
        <div className="container">
          <h2 className="glow-text" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>About</h2>
          
          <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
            {/* Education Column */}
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
                <GraduationCap color="var(--primary)" />
                Education
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="glass-card" style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '2rem', left: '-1rem', width: '0.5rem', height: '0.5rem', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></div>
                  <h4 style={{ color: 'var(--foreground)', fontSize: '1.2rem' }}>B.E. Electronics & Communication Engineering</h4>
                  <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', margin: '0.25rem 0' }}>2023 – 2027</p>
                  <p style={{ margin: 0 }}>St. Joseph’s College of Engineering</p>
                </div>

                <div className="glass-card" style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '2rem', left: '-1rem', width: '0.5rem', height: '0.5rem', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></div>
                  <h4 style={{ color: 'var(--foreground)', fontSize: '1.2rem' }}>HSLC</h4>
                  <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', margin: '0.25rem 0' }}>2022 – 2023</p>
                  <p style={{ margin: 0 }}>Sri Vidhya Mandhir Higher Secondary School</p>
                </div>

                <div className="glass-card" style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '2rem', left: '-1rem', width: '0.5rem', height: '0.5rem', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary)' }}></div>
                  <h4 style={{ color: 'var(--foreground)', fontSize: '1.2rem' }}>SSLC</h4>
                  <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)', margin: '0.25rem 0' }}>2020 – 2021</p>
                  <p style={{ margin: 0 }}>Sri Vidhya Mandhir Higher Secondary School</p>
                </div>
              </div>
            </div>

            {/* Skills Column */}
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
                <BookOpen color="var(--primary)" />
                Technical Skills
              </h3>

              <div className="glass-card" style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--foreground)', fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Programming</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {['C', 'Python', 'Verilog', 'SystemVerilog'].map(skill => (
                    <span key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--secondary)', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card" style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--foreground)', fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>EDA Tools</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {['Synopsys VCS', 'IC Compiler II', 'Design Compiler', 'Xilinx ISE', 'Xilinx Vivado', 'Cadence Virtuoso', 'Cadence Layout', 'Cadence Assura (DRC, LVS)', 'Cadence PVS', 'Cadence Genus'].map(skill => (
                    <span key={skill} style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card">
                <h4 style={{ color: 'var(--foreground)', fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Domain Specific</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {['Embedded C', 'FPGA (Zed Board 7000)'].map(skill => (
                    <span key={skill} style={{ background: 'rgba(161, 161, 170, 0.1)', color: '#d4d4d8', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', border: '1px solid rgba(161, 161, 170, 0.2)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships & Certifications */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
            
            {/* Internships */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Internships & Exposure</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Fantasy Solution Company (IoT Internship)',
                  'Lenovo (India) Private Limited (Manufacturing Operation)',
                  'Chennai Port Authority (5-Day Industrial Exposure)'
                ].map((item, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '0.25rem' }}>
                      <CheckCircle size={20} color="var(--primary)" />
                    </div>
                    <span style={{ color: 'var(--foreground)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Certifications</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'RTL-to-GDSII - Cadence',
                  'SystemVerilog Accelerated Certification - Cadence',
                  'Digital Design with Verilog - NPTEL (Elite)',
                  'VLSI for Beginners - NIELIT',
                  'Analog IC Design Flow - Cadence'
                ].map((item, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', borderLeft: '2px solid var(--secondary)' }}>
                    <div style={{ marginTop: '0.25rem' }}>
                      <Award size={20} color="var(--secondary)" />
                    </div>
                    <span style={{ color: 'var(--foreground)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
