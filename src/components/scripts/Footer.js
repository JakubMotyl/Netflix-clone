import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

// Generate Footer Function

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer__icons-container'>
        <div className='footer__icon-box'>
          <FontAwesomeIcon className='footer__icon' icon={faFacebook} />       
        </div>
        <div className='footer__icon-box'>
          <FontAwesomeIcon className='footer__icon' icon={faInstagram} />       
        </div>
        <div className='footer__icon-box'>
          <FontAwesomeIcon className='footer__icon' icon={faTwitter} />     
        </div>
        <div className='footer__icon-box'>
          <FontAwesomeIcon className='footer__icon' icon={faYoutube} />       
        </div>
      </div>
      <div className='footer__links-container'>
        <div className='footer__link-box'>
          <ul>
            <li><a href='#'>FAQ</a></li>      
            <li><a href='#'>Investor Relations</a></li>      
            <li><a href='#'>Ways to Watch</a></li> 
            <li><a href='#'>Corporate Information</a></li> 
            <li><a href='#'>Legal Notices</a></li> 
          </ul>
        </div>
        <div className='footer__link-box'>
          <ul>
            <li><a href='#'>Help Center</a></li>      
            <li><a href='#'>Jobs</a></li>      
            <li><a href='#'>Terms of Use</a></li> 
            <li><a href='#'>Contact Us</a></li> 
            <li><a href='#'>Only on Netflix</a></li> 
          </ul>
        </div>
        <div className='footer__link-box'>
          <ul>
            <li><a href='#'>Account</a></li>      
            <li><a href='#'>Redeem Gift Cards</a></li>      
            <li><a href='#'>Privacy</a></li> 
            <li><a href='#'>Speed Test</a></li> 
            <li><a href='#'>Ad Choices</a></li> 
          </ul>
        </div>
        <div className='footer__link-box'>
          <ul>
            <li><a href='#'>Media Center</a></li>      
            <li><a href='#'>Buy Gift Cards</a></li>      
            <li><a href='#'>Cookie Preferences</a></li> 
            <li><a href='#'>Legal Guarantee</a></li> 
          </ul>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>&#169; 1997-2024 Netflix, Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
