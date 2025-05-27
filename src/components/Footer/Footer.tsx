import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__title">Development Resources</h3>
          <ul className="footer__links">
            <li>
              <a href="https://www.typescriptlang.org/docs/" className="footer__link" target="_blank">
                TypeScript
              </a>
            </li>
            <li className="footer__links__divider">|</li>
            <li>
              <a href="https://react.dev/learn" className="footer__link" target="_blank">
                React
              </a>
            </li>
            <li className="footer__links__divider">|</li>
            <li>
              <a href="https://github.com/HackerNews/API" className="footer__link" target="_blank">
                API documentation
              </a>
            </li>
            <li className="footer__links__divider">|</li>
            <li>
              <a href="https://swr.vercel.app/" className="footer__link" target="_blank">
                SWR
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">© {new Date().getFullYear()} Hacker News API Demo. All rights reserved.</p>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
