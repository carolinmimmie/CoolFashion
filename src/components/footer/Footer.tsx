import {
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <footer className="footer py-5 mt-5" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">About Us</h5>
            <p className="text-secondary ml-2">Lorem ipsum dolor sit amet, consectetur adipis elit. Sed eget lorem velit. Aliquam erat.</p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faInstagram} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faYoutube} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">Services</h5>
            <ul className="list-unstyled">
            <li><a href="#">SEO</a></li>
            <li><a href="#">Marketing</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Development</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2 text-secondary"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />123 Main Street, New York, NY 10001</li>
              <li className="mb-2 text-secondary"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-white" />(123) 456-7890</li>
              <li className="mb-2 text-secondary"><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white" />info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-secondary mt-5 text-center">&copy; 2023 Grupp E. All rights reserved.</p>
    </footer> 
    </div>
  )
}

export default Footer