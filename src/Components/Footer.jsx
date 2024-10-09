import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from "C:/Users/rahul/OneDrive/Desktop/Programs/Web Dev/React/CollegeSite/src/assets/logo.png";
import { faEnvelope, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";

import './Footer.css';

function Footer() {
    return (
        <>
            <div 
                className="footer-background"
            >
                <div className="footer-overlay"></div>
                <div className="footer-content">
                    <div className="logo-section">
                        <div className="logo-name gap-4 mb-[1rem]">
                            <img src={logo} alt="IIIT Kota Logo" className="logo" />
                            <div className="institution-name">INDIAN INSTITUTE OF INFORMATION TECHNOLOGY KOTA</div>
                        </div>
                        <a 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href="https://www.google.com/maps/place/IIIT+Kota,+Main+Gate/@25.049015,75.8326474,17z/data=!3m1!4b1!4m6!3m5!1s0x396f87eb5d14d5ef:0x7472ca83618b5a7d!8m2!3d25.049015!4d75.8326474!16s%2Fg%2F11ssx_ll00?entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D"
                            className="visit-site"
                        >
                            Visit Site
                        </a>
                    </div>
                    <div className="divider"></div>
                    {/*Quick Links */}
                    <div className="quick-links">
                        <h1 className="quick-links-title">Quick Links</h1>
                        <div className="quick-links-list">
                            <ul>
                                <li><a href="https://files.iiitkota.ac.in/pdf/holidays/Holidays2024.pdf">HOLIDAYS</a></li>
                                <li><a href="https://iiitkota.ac.in/iccw">ICCW</a></li>
                                <li><a href="https://iiitkota.ac.in/recruitment">RECRUITMENTS</a></li>
                                <li><a href="https://iiitkota.ac.in/tender-invitations">TENDER INVITATIONS</a></li>
                                <li><a href="https://iiitkota.ac.in/antiragging">ANTI-RAGGING CAMPAIGN</a></li>
                            </ul>
                            <ul>
                                <li>WEB MASTERS</li>
                                <li>Many More Links</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider"></div>
                    {/*Contact Us */}
                    <div className="contact-info">
                        <p className="contact-title">Contact Us</p>
                        <ul className="contact-list">
                            <li>
                                <FontAwesomeIcon icon={faLocationPin} /> 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/IIIT+Kota,+Main+Gate/@25.049015,75.8326474,17z/data=!3m1!4b1!4m6!3m5!1s0x396f87eb5d14d5ef:0x7472ca83618b5a7d!8m2!3d25.049015!4d75.8326474!16s%2Fg%2F11ssx_ll00?entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D"> IIIT Kota Permanent Campus, Kota, 325003</a>
                            </li>
                            <li><FontAwesomeIcon icon={faEnvelope} /> office@iiitkota.ac.in</li>
                            <li><FontAwesomeIcon icon={faPhone} /> 0744-2667000, 0744-2667010</li>
                            <li>
                                <FontAwesomeIcon icon={faLocationPin} /> 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Malaviya+National+Institute+of+Technology+Jaipur+(MNIT)/@26.8639724,75.8107776,17z/data=!3m1!4b1!4m6!3m5!1s0x396db66fe2879c7f:0xdfc843bf9b6f869a!8m2!3d26.8639724!4d75.8107776!16zL20vMDZ3N2Zs?entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D"> MNIT Office, Jaipur, 302017</a>
                            </li>
                            <li><FontAwesomeIcon icon={faPhone} /> 0141-2715071</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-text">
                    © 2024 IIIT Kota
                </div>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
                </div>
            </div>
        </>
    );
}

export default Footer;
