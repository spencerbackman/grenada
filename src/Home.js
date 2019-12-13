import React from 'react';
import movie from './images/movie-theater-small.png';
import pool from './images/pool-small.png';
import lake from './images/grenadaLake.jpg';
import golf from './images/golf-small.jpg';
import nextPage from './icons/next-page2.svg';
import radio from './images/grenada-radio.png';
import eats from './images/eats.png';
import shop from './images/shop.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/scss/home.scss';

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="home-page">
            <Helmet>
                <meta charSet="utf-8"/>
                <title> Local Grenada </title>
                <link rel="canonical" href="https://www.localgrenada.com/"/>
                <meta name="description" content="Local Grenada, your all around guide to Grenada Mississippi. See upcoming events, tv episodes made in Grenada, where to eat, what to do, and Local Grenada's Radio Station." />
            </Helmet>
                <div className="top-wrapper">
                    <div className="video-wrapper">
                        <iframe title="drone footage over grenada" className="background-video" src="https://player.vimeo.com/video/314553822?autoplay=1&loop=1&background=1" frameBorder="0"></iframe>
                        <div className="top-header"> Local Grenada </div>
                    </div>
                </div>
                <a className="weatherwidget-io" target="_blank" rel="noreferrer noopener" href="https://forecast7.com/en/33d77n89d81/grenada/?unit=us" data-label_1="GRENADA" data-label_2="WEATHER" data-theme="clear" data-basecolor="rgba(242, 242, 242, 1)" >GRENADA WEATHER</a>
                <div className="container">
                    <h1 className="home-header"> This is Grenada Mississippi. </h1>
                    <div className="button-wrapper">
                        <div className="column">
                            <a className="fb link" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/localgrenada/">
                                <i className="fab fa-facebook-f"></i>
                                Follow Us!
                            </a>
                            <Link className="contact link" to="/contact">
                                Partner With Us!
                            </Link>
                        </div>
                        <a className="radio link" target="_blank" rel="noreferrer noopener" href="https://radio.securenetsystems.net/cwa/index.cfm?stationCallSign=WOHT">
                            <img src={radio} className="radio-logo" alt="grenada star radio channel 92.3" />
                        </a>
                    </div>
                    <div className="main-video-holder">
                        <iframe className="main-video" title="Good side of Grenada - T&Z Wings" src="https://player.vimeo.com/video/362062854" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        <iframe className="main-video" title="Grenada Baseball World Series Champs" src="https://player.vimeo.com/video/347786648" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="home-container">
                    <Link className="home-column" to="/restaurants">
                        <h2 className="home-header2"> Where to Eat </h2>
                        <img src={nextPage} className="next-page-icon" alt="Right Arrow"/>
                        <p className="home-par"> Grenada is full of great places to eat! Check out our top picks! </p>
                    </Link>
                    <div className="home-column">
                        <img src={eats} className="home-image" alt="Food"/>
                    </div>
                </div>
                <div className="home-container" id="home-shop-container">
                    <div className="home-column">
                        <img src={shop} className="home-image" alt="Shop"/>
                    </div>
                    <Link className="home-column" to="/business">
                        <h2 className="home-header2"> Where to Shop </h2>
                        <img src={nextPage} className="next-page-icon" alt="Right Arrow"/>
                        <p className="home-par"> Grenada isn't the biggest city but it still has tons to offer! Whether you are looking for locally raised beef to buying a new tractor we've put together businesses that we trust. </p>
                    </Link>
                </div>
                <div className="home-container">
                    <Link to="/movie-theater" className="home-column">
                        <h2 className="home-header2"> Grenada Plaza Cinema </h2>
                        <img src={nextPage} className="next-page-icon" alt="Right Arrow"/>
                        <p className="home-par"> Want to go to the movies? Grenada Plaza Cinema is the only theater within a 50 mile radius of Grenada. Check out what movies are playing! </p>
                    </Link>
                    <div className="home-column">
                        <img src={movie} className="home-image" alt="Grenada Plaza Cinema"/>
                    </div>
                </div>
                <div className="home-container" id="home-sports-container">
                    <div className="home-column">
                        <img src={pool} className="home-image" alt="The Sports Center"/>
                    </div>
                    <Link className="home-column" to="/sport-center">
                        <h2 className="home-header2"> The Sports Center </h2>
                        <img src={nextPage} className="next-page-icon" alt="Right Arrow"/>
                        <p className="home-par"> Going through the struggle of wanting a pool table but not having the room or money for it? Okay.. maybe that's not the case but, with happy hour everyday, great food, and pool tournaments every Tuesday and Thursday you need to check out The Sports Center!  </p>
                    </Link>
                </div>
                <div className="home-container">
                    <Link className="home-column" to="/grenada-lake">
                        <h2 className="home-header2"> Grenada Lake </h2>
                        <img src={nextPage} className="next-page-icon" alt="Right Arrow"/>
                        <p className="home-par"> Grenada Lake is one of the best things Grenada has to offer. With great Crappie fishing, boating, beaches, and camping you'll find it hard to pass up a day at Grenada Lake. </p>
                    </Link>1
                    <div className="home-column">
                        <img src={lake} className="home-image" alt="Grenada Lake"/>
                    </div>
                </div>
                <div className="home-container" id="home-golf-container">
                    <div className="home-column">
                        <img src={golf} className="home-image" alt="Dogwoods Golf Course"/>
                    </div>
                    <Link className="home-column" to="/golf-course">
                        <h2 className="home-header2"> Dogwoods Golf Course </h2>
                        <img src={nextPage} className="next-page-icon" alt="Dogwoods Golf Course"/>
                        <p className="home-par"> If you're a golfer in the area you've probably been to Dogwoods Golf Course. If you're unfimiliar with the course Golf Digest says it's "America's Best New Bargain". Go check out Dogwoods Golf Course! </p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;