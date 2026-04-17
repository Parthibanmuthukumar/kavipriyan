import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Download, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Linkedin } from '../components/Icons';
import '../index.css';

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_61fbkbj', 'template_6psbnw8', formRef.current, {
      publicKey: 'sCDZ3u1SA5b-3hn7L',
    })
      .then((result) => {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          setStatus('error');
          console.error(error);
          setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <div className="page-enter">
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="glass-card" style={{ border: '1px solid var(--border)' }}>
            <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
              
              {/* Contact Info */}
              <div>
                <h2 className="glow-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
                <p style={{ marginBottom: '2.5rem' }}>
                  Interested in discussing VLSI, hardware design, or potential opportunities? Feel free to reach out.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  <a href="mailto:kavikavipriyan4137@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                      <Mail color="var(--primary)" size={20} />
                    </div>
                    <span>kavikavipriyan4137@gmail.com</span>
                  </a>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                      <Phone color="var(--primary)" size={20} />
                    </div>
                    <span>9042951609</span>
                  </div>

                  <a href="https://www.linkedin.com/in/kavi-priyan-g-b5a3" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                      <Linkedin color="var(--secondary)" size={20} />
                    </div>
                    <span>linkedin.com/in/kavi-priyan-g-b5a3</span>
                  </a>
                </div>

                <a href="/resume.pdf" target="_blank" className="btn btn-secondary" download style={{ width: '100%' }}>
                  <Download size={18} />
                  Download Full Resume
                </a>
              </div>

              {/* Form */}
              <div>
                <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Name</label>
                    <input type="text" name="user_name" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', outline: 'none' }} />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Email</label>
                    <input type="email" name="user_email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', outline: 'none' }} />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>Message</label>
                    <textarea name="message" rows="5" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)', outline: 'none', resize: 'vertical' }}></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center' }}>
                    {status === 'sending' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                  </button>

                  {status === 'success' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '8px', marginTop: '1rem' }}>
                      <CheckCircle size={18} />
                      <span>Message sent successfully!</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '8px', marginTop: '1rem' }}>
                      <AlertCircle size={18} />
                      <span>Failed to send message. Please try again.</span>
                    </div>
                  )}
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
