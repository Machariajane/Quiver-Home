import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            
             <h2 className='item'><i class="fas fa-phone-square-alt"></i> Phone</h2>

             <h2 className='item'><i class="fas fa-envelope"></i> Email</h2>
            </div> 
           </div>
           <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2><i class="fas fa-map-marker-alt"></i> Location</h2>
           <p>Aristrocats Kenya,James Gichuru Road</p>
           </div> 
           </div>
        <div className='footer-link-wrapper'>
         <div className='footer-link-items'>
            <h2><i class="fas fa-users"></i> Social </h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className='fas fa-syringe'></i>
              QUIVER
            </Link>
          </div>
          <small className='website-rights'>QUIVER © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            
            
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;