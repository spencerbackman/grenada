import React from 'react';
import logo from './images/whitfieldMediaLogo.png';
import { Helmet } from 'react-helmet';
import './styles/scss/contact.scss';

class Contact extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="contact-page-wrapper">
                <Helmet>
                    <title> Contact Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="If you have any questions or would like to contact us shoot us a email using the form below or give us a call!" />
                </Helmet>
                <div className="contact-top-container">
                    <div className="contact-column">
                        <img src={logo} className="whitfield-logo" alt="Whitfield Media Logo" />
                        <h1 className="contact-header"> Whitfield Media </h1>
                    </div>
                    <div className="contact-column2">
                        <a className="fb-link contact-link" href="https://www.facebook.com/wemakeadvertisements/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook"></i> Follow Us! </a>
                        <a className="mail-link contact-link" href="mailto:charlie@cwhitfieldmedia.com"> <i className="far fa-envelope"></i> charlie@cwhitfieldmedia.com</a>
                        <a className="phone-link contact-link" href="tel:6628091975"> <i className="fas fa-phone"></i> (662) 809-1975 </a>
                        <a className="site-link contact-link" href="http://www.wemakeads.com" target="_blank" rel="noopener noreferrer"> www.wemakeads.com </a>
                    </div>
                </div>
                <form id="formContainer" action="https://formspree.io/charlie@cwhitfieldmedia.com" method="POST">
                    <div className="contactRow">
                        <div className="contactColumn">
                            <label for="form_name" className="form_label"><i className="far fa-user"></i></label>
                            <input type="text" name="name" className="input" placeholder="NAME*"/>
                        </div>
                        <div className="contactColumn">
                            <label for="form_email" className="form_label"><i className="far fa-envelope"></i></label>
                            <input type="text" name="email" className="input" placeholder="EMAIL*"/>
                        </div>
                    </div>
                    <div className="contactRow">
                        <div className="contactColumn">
                            <label for="form_date" className="form_label"><i className="fas fa-briefcase"></i></label>
                            <input type="text" name="company" className="input" placeholder="COMPANY" />
                        </div>
                        <div className="contactColumn">
                            <label for="form_number" className="form_label"><i className="fas fa-phone"></i></label>
                            <input type="tel" name="phone" className="input" placeholder="PHONE NUMBER" />
                        </div>
                    </div>
                    <div className="message_row">
                        <label for="form_message" className="form_label"><i className="fas fa-envelope"></i></label>
                        <input type="text" className="message_input" placeholder="MESSAGE*" />
                    </div>
                    <div className="contactRow">
                        <button id="form-button"><i className="far fa-paper-plane"></i> SEND </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;