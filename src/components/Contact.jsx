import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="container">
        <div className="row">
          <div className="contact-box contact-info">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: 'red' }} /> contact@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} style={{ color: 'red' }} /> 0123456789
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ color: 'red' }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={{ color: 'red' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ color: 'red' }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: 'red' }} />
              </a>
            </div>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'red' }} /> Location
            </p>
            <div id="map">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.63726521533!2d77.55284285!3d12.93471595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e2c22c358b7%3A0x157068107f36f2ef!2sBanashankari%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711197870027!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="contact-box contact-form">
            <form name="submit-to-google-sheet">
              <h1 className="sub-title">Contact Form</h1>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn">
                Submit
              </button>
              <button type="submit" className="btn">
               <FontAwesomeIcon icon={faDownload} className="download-icon" />
                Download CV
             </button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
