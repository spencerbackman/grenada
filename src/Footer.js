import React from 'react';

const Footer = () => {
    return (
        <div id="footerWrapper">
            <footer className="footer">
                <a className="footer-icon" href="mailto:charlie@cwhitfieldmedia.com"><i className="far fa-envelope fa-2x"></i> </a>
                <a className="footer-icon" href="https://www.facebook.com/wemakeadvertisements/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
                <a className="footer-icon" href="tel:6628091975"> <i className="fas fa-phone"></i> </a>
            </footer>
        </div>
    )
}

export default Footer;