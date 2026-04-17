import { Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';

function Footer() {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border)', marginTop: 'auto', background: 'var(--card)', paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}>
      <div className="container footer-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <p style={{ margin: 0, fontFamily: 'var(--font-mono)' }}>© {new Date().getFullYear()} Kavi Priyan G. All rights reserved.</p>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="mailto:kavikavipriyan4137@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)' }}><Mail size={22} /></a>
          <a href="https://www.linkedin.com/in/kavi-priyan-g-b5a3" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)' }}><Linkedin size={22} /></a>
          <a href="https://www.instagram.com/_ka__vi_07?igsh=cGtiM2djcDFqcTlt" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)' }}><Instagram size={22} /></a>
          <a href="https://github.com/Kavi8682" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)' }}><Github size={22} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
