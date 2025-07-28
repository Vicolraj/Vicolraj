import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const resumeURL = "https://vicolraj.github.io/Pictures/MyResume.pdf";

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeURL;
    link.download = "VicolRaj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="footer" data-aos = "fade">
      <div className="footer-container">
        {/* Left Section - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="footer-brand"
        >
          <h3 className="footer-logo">Vicolraj</h3>
          <p className="footer-tagline">Front-end Developer</p>
          <button onClick={handleDownload} className="download-btn" type="button">
            View CV <FaFileDownload className="download-icon" />
          </button>
        </motion.div>

        {/* Middle Section - Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="footer-nav"
        >
          <h4 className="footer-heading">Navigation</h4>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        {/* Right Section - Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="footer-social"
        >
          <h4 className="footer-heading">Connect With Me</h4>
          <div className="social-links">
            <a href="https://github.com/vicolraj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/vicolraj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/vicolraj" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="mailto:vicolraj@gmail.com" aria-label="Email">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {currentYear} Vicolraj. All rights reserved.</p>
        <p>Built with React</p>
      </div>

      {/* Original CSS untouched */}
      <style jsx>{`
     
        .footer {
          background: #121212ff;
          margin-top: 20px;
          color: #e0e0e0;
          padding: 2rem 1rem 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer * {
            font: var(--bodyText);
            font-size: var(--BodyTextFontSize)
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          padding-bottom: 2rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          background: linear-gradient(90deg, #d83affff, #ef63ffff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .footer-tagline {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .download-btn {
          background: rgba(255, 58, 186, 0.1);
          color: #ef3affff;
          border: 1px solid rgba(255, 58, 212, 0.3);
          border-radius: 6px;
          padding: 0.8rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .download-btn:hover {
          background: rgba(255, 58, 209, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 58, 235, 0.1);
        }

        .download-icon {
          margin-top: -10px;
        }

        .footer-heading {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: #fff;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: #f23affff;
        }

        .nav-links {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .nav-links a:hover {
          color: #d83affff;
          padding-left: 5px;
        }

        .social-links {
          display: flex;
          gap: 1.2rem;
        }

        .social-icon {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #b73affff;
          transform: translateY(-3px);
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-brand, .footer-nav, .footer-social {
            align-items: center;
            text-align: center;
          }

          .footer-heading::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .nav-links {
            align-items: center;
          }

          .download-btn {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 3rem 1.5rem 1.5rem;
          }
        }
     
      `}</style>
    </footer>
  );
}
