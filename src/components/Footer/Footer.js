import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <div className="icon">
          <Link to="#"><i className="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to="#"><i className="fa-brands fa-github fa-2x"></i></Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;