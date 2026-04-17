import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import '../index.css';

function Navbar({ isLightMode, toggleTheme }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--border)', background: 'var(--background)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.2rem' }}>
          <span className="glow-text">Kavi Priyan G</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? 'var(--primary)' : 'var(--foreground)' }}>Home</Link>
          <Link to="/about" style={{ color: location.pathname === '/about' ? 'var(--primary)' : 'var(--foreground)' }}>About</Link>
          <Link to="/contact" style={{ color: location.pathname === '/contact' ? 'var(--primary)' : 'var(--foreground)' }}>Contact</Link>
          
          <button 
            onClick={toggleTheme} 
            style={{ 
              background: 'none', border: 'none', cursor: 'pointer', 
              color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center' 
            }}
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-btn">
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground)', marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground)', display: 'flex', alignItems: 'center' }}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 40 }} 
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div style={{ 
        position: 'fixed', top: 0, right: 0, width: '300px', height: '100vh', 
        background: 'var(--card)', backdropFilter: 'var(--glayd-blur)', 
        borderLeft: '1px solid var(--border)', zIndex: 50, padding: '2rem 1.5rem',
        display: 'flex', flexDirection: 'column', gap: '3rem',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 1.2s ease-in-out'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="glow-text" style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>Menu</span>
          <button onClick={() => setIsMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground)' }}>
            <X size={24} />
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem' }}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: location.pathname === '/' ? 'var(--primary)' : 'var(--foreground)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ color: location.pathname === '/about' ? 'var(--primary)' : 'var(--foreground)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>About</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: location.pathname === '/contact' ? 'var(--primary)' : 'var(--foreground)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
