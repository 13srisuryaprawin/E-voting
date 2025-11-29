import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid bg-dark text-light pt-4" style={{ borderTop: "1px solid white" }}>
        <div className="row px-4">


          <div className="col-md-4 mb-1">
            <h5 className="footer-title">About E-Voting System</h5>
            <p className="footer-text">
              A secure and reliable online voting platform designed to modernize the election process. Our system ensures transparency, accessibility, and integrity at every step — from voter authentication to result verification. Built with advanced encryption and real-time monitoring, it provides institutions and organizations with a trusted solution for conducting fair, efficient, and tamper-proof elections.
              
            </p>
          </div>


          <div className="col-md-3 mb-1 ">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>How It Works</li>
              <li>FAQ</li>
              <li>Security</li>
            </ul>
          </div>


          <div className="col-md-3 mb-1">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="list-unstyled footer-links">
              <li>Email: support@evoting.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Voting St, Digital City</li>
            </ul>
          </div>


          <div className="col-md-2 mb-1">
            <h5 className="footer-title">Follow</h5>
            <ul className="list-unstyled footer-social">
              <li><FaFacebookF /> Facebook</li>
              <li><FaTwitter /> Twitter</li>
              <li><FaInstagram /> Instagram</li>
              <li><FaYoutube /> YouTube</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />
        <div className="row text-center pb-2">
          <div className="col">
            <ul className="list-unstyled d-flex justify-content-center gap-5 small footer-bottom-links">
              <li>© 2025 E-Voting System – All Rights Reserved</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact | Support | Feedback</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
