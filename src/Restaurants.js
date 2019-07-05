import React from 'react';
import './styles/scss/restaurants.scss';
import spencerLogo from './images/spencers.png';
import tzLogo from './images/T&ZS.png';
import papsLogo from './images/Paps+Logo1.png';
import papsMenu from './images/Paps_menu.png';
import { Helmet } from 'react-helmet';

class Restaurants extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            display: 'none'
        }
    }
    componentDidMount() {
        window.scrollTo(0,0)
    }
    openPaps = () => {
        this.setState({
            isOpen: true,
            display: 'block'
        })
    }
    closePaps = () => {
        this.setState({
            isOpen: false,
            display: 'none'
        })
    }
    render() {
        return (
            <div className="restaurant-page-wrapper">
                <Helmet>
                    <title> Restaurants ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Grenada is full of great places to eat! Check out Local Grenada's top picks!" />
                    <link rel="canonical" href="https://www.localgrenada.com/restaurants"/>
                </Helmet>
                <div className="food-top-container">
                    <h1 className="food-header"> Restaurants </h1>
                    <div className="food-container">
                        <div className="food-box">
                            <img className="food-partner-logo" src={tzLogo} alt="T&Z Wings" />
                            <iframe title="vimeo-player T&Z Wings" src="https://player.vimeo.com/video/310376432" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="food-box">
                            <img className="food-partner-logo" src={spencerLogo} alt="Spencer's" />
                            <iframe title="vimeo-player Spencer's" src="https://player.vimeo.com/video/257173453" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="food-box">
                            <img className="food-partner-logo" src={papsLogo} alt="Pap's" />
                            <div className="food-popup-container">
                            <p className="menu-link" onClick={this.openPaps}> View Menu </p>
                            </div>
                            <iframe title="vimeo-player Pap's Leigh Ann" src="https://player.vimeo.com/video/323557903" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="food-popup" id="paps-popup" style={{display: this.state.display}}>
                        <div className="food-inner-popup">
                            <div className="food-popupCloseButton" onClick={this.closePaps}>X</div>
                            <img src={papsMenu} alt="Pap's Grenada Mississippi Menu" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurants;