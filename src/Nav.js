import React from 'react';
import { Link } from 'react-router-dom';
import './styles/css/nav.css';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            isClicked: false,
            class: 'closed',
            class2: 'toggle-closed',
            isDropClicked: false,
            dropdown: 'dropdown-closed',
            isDropClicked2: false,
            dropdown2: 'dropdown2-closed',
            isDropClicked3: false,
            dropdown3: 'dropdown3-closed'
        }
    }
    handleClick = () => {
        if(!this.state.isClicked) {
            this.setState({
                isClicked: true,
                class: 'open',
                class2: 'toggle-open'
            })
        } else {
            this.setState({
                isClicked: false,
                class: 'closed',
                class2: 'toggle-closed'
            })
        }
    }
    handleDropClick = () => {
        if(!this.state.isDropClicked) {
            this.setState({
                isDropClicked: true,
                dropdown: 'dropdown-open',
                dropdown2: 'dropdown2-closed',
                dropdown3: 'dropdown3-closed'
            })
        } else {
            this.setState({
                isDropClicked: false,
                dropdown: 'dropdown-closed'
            })
        }
    }
    handleDropClick2 = () => {
        if(!this.state.isDropClicked2) {
            this.setState({
                isDropClicked2: true,
                dropdown: 'dropdown-closed',
                dropdown2: 'dropdown2-open',
                dropdown3: 'dropdown3-closed'
            })
        } else {
            this.setState({
                isDropClicked2: false,
                dropdown2: 'dropdown2-closed'
            })
        }
    }
    handleDropClick3 = () => {
        if(!this.state.isDropClicked3) {
            this.setState({
                isDropClicked3: true,
                dropdown: 'dropdown-closed',
                dropdown2: 'dropdown2-closed',
                dropdown3: 'dropdown3-open'
            })
        } else {
            this.setState({
                isDropClicked3: false,
                dropdown3: 'dropdown3-closed'
            })
        }
    }
    handleClose = () => {
        this.setState({
            isClicked: false,
            isDropClicked: false,
            isDropClicked2: false,
            isDropClicked3: false,
            class: 'closed',
            class2: 'toggle-closed',
            dropdown: 'dropdown-closed',
            dropdown2: 'dropdown2-closed',
            dropdown3: 'dropdown3-closed'
        })
    }
    render() {
        return (
            <div>
                <header className="navbar nav-down">
                    <div className="nav-top-row">
                        <a className="top-nav-icon" href="tel:6628091975"><i className="fas fa-phone"></i></a>
                        <a className="top-nav-icon" href="mailto:charlie@cwhitfieldmedia.com"> <i className="far fa-envelope"></i> </a>
                        <a className="top-nav-icon" href="https://www.facebook.com/wemakeadvertisements/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square"></i></a>
                    </div>
                    <div className="nav-line"></div>
                    <div className="nav-row">
                        <ul className="main-nav">
                            <li className="nav-link">
                                <Link className="nav-links" to="/"> HOME </Link>
                            </li>
                            <li className="dropdown">
                                <div className="dropbtn"> EXPLORE </div>
                                <div className="dropdown-content">
                                    <Link className="dropdown-link" to="/restaurants"> RESTAURANTS </Link>
                                    <Link className="dropdown-link" to="/business"> BUSINESSES </Link>
                                </div>
                            </li>
                            <li className="dropdown">
                                <div className="dropbtn"> PLAY </div>
                                <div className="dropdown-content">
                                    <Link className="dropdown-link" to="/movie-theater"> MOVIE THEATER </Link>
                                    <Link className="dropdown-link" to="/sport-center"> SPORTS CENTER </Link>
                                    <Link className="dropdown-link" to="/grenada-lake"> GRENADA LAKE </Link>
                                    <Link className="dropdown-link" to="/golf-course"> GOLF COURSE </Link>
                                </div>   
                            </li>
                            <li className="dropdown">
                                <div className="dropbtn"> TV EPISODES </div>
                                <div className="dropdown-content">
                                    <Link className="dropdown-link" to="/grenada-news"> LOCAL GRENADA NEWS </Link>
                                    <Link className="dropdown-link" to="/the-good-side"> THE GOOD SIDE </Link>
                                    <Link className="dropdown-link" to="/grenada-talks"> GRENADA TALKS </Link>
                                    <Link className="dropdown-link" to="/grown-woman"> GROWN WOMAN </Link>
                                    <Link className="dropdown-link" to="/grenada-events"> GRENADA EVENTS </Link>
                                    <Link className="dropdown-link" to="/rotary-club"> ROTARY CLUB </Link>
                                </div>
                            </li>
                            <li className="nav-link">
                                <Link className="nav-links" to="/contact"> CONTACT </Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <header className="navbar2">
                    <span className={this.state.class2} onClick={this.handleClick}> {!this.state.isClicked ? <i id="open" className="fas fa-bars"></i> : null }</span>
                    <Link className="logo-holder2" to="/" onClick={this.handleClose}>
                        <h2 className="nav-header"> Local Grenada </h2>
                    </Link>
                    <ul className={this.state.class}>
                        <li onClick={this.handleClose}>
                            <p className="nav-x">X</p>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link to="/" className="nav-links" onClick={this.handleClose}> HOME </Link>
                        </li>
                        <li className="dropdown">
                            <div className="dropbtn" onClick={this.handleDropClick3}> EXPLORE </div>
                            <div className={this.state.dropdown3}>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/restaurants"> RESTAURANTS </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/business"> BUSINESSES </Link>
                            </div> 
                        </li>
                        <li className="dropdown">
                            <div className="dropbtn" onClick={this.handleDropClick}> PLAY </div>
                            <div className={this.state.dropdown}>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/movie-theater"> MOVIE THEATER </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/sport-center"> SPORTS CENTER </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/grenada-lake"> GRENADA LAKE </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/golf-course"> GOLF COURSE </Link>
                            </div>
                        </li>
                        <li className="dropdown">
                            <div className="dropbtn" onClick={this.handleDropClick2}> TV EPISODES </div>
                            <div className={this.state.dropdown2}>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/grenada-news"> LOCAL GRENADA NEWS </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/the-good-side"> THE GOOD SIDE </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/grenada-talks"> GRENADA TALKS </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/grown-woman"> GROWN WOMAN </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/grenada-events"> GRENADA EVENTS </Link>
                                <Link onClick={this.handleClose} className="dropdown-link" to="/rotary-club"> ROTARY CLUB </Link>
                            </div>
                        </li>
                        <li className="nav-link" onClick={this.handleClose}>
                            <Link className="nav-links" onClick={this.handleClose} to="/contact"> CONTACT </Link>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Nav;