import React from 'react';
import './styles/scss/sportCenter.scss';
import image from './images/sport-center-outside.png';
import { Helmet } from 'react-helmet';

class SportCenter extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="sport-page-wrapper">
                <Helmet>
                    <title> The Sports Center ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Going through the struggle of wanting a pool table but not having the room or money for it? Okay.. maybe that's not the case but, with happy hour everyday, great food, and pool tournaments every Tuesday and Thursday you need to check out The Sports Center!" />
                    <link rel="canonical" href="https://www.localgrenada.com/sport-center"/>
                </Helmet>
                <div className="sport-header-wrapper">
                    <h1 className="sport-header" > The Sports Center </h1>
                    <div className="sport-header-row">
                        <a className="sport-top-link" href="tel:6622261322"> (662) 226-1322 </a> 
                        <a className="sport-top-link" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/Sports+Center/@33.7759305,-89.8225888,17z/data=!3m1!4b1!4m5!3m4!1s0x8881cd214db132c9:0x8e5a5bf8bfcde3fe!8m2!3d33.7759263!4d-89.8205164"> 893 Springhill Rd. Grenada, Ms </a>
                    </div>
                </div>
                <div className="sport-mid-wrapper">
                <iframe title="sport center video" src="https://player.vimeo.com/video/310375946" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                <div className="sport-wrapper">
                    <h2 className="sport-header2"> Pool tournaments every Tuesday and Thursday starting at 8 pm. <br/> ($10 entry fee) </h2>
                    <div>
                        <p className="sport-quote">"Friends and Family love this place! Pool tables are awesome! Food is great as well!"</p>
                        <p className="sport-name"> ~Tarren Poynor </p>
                    </div>
                </div>
                    <div className="sport-mid-container">
                    <div className="sport-wrapper">
                        <div className="sport-box">
                            <h3 className="sport-header3"> Happy Hour </h3>
                            <p className="sport-par"> Everyday from 4-7! </p>
                        </div>
                        <img src={image} className="sport-image" alt="The Sports Center"/>
                    </div>
                    <div className="sport-wrapper">
                        <table className="table">
                            <caption>HOURS</caption>
                            <tr>
                                <th>Monday</th>
                                <td> 11 am - 12 am </td>
                            </tr>
                            <tr>
                                <th> Tuesday </th>
                                <td> 11 am - 12 am </td>
                            </tr>
                            <tr>
                                <th> Wednesday </th>
                                <td> 11 am - 12 am </td>
                            </tr>
                            <tr>
                                <th> Thursday </th>
                                <td> 11 am - 2 am </td>
                            </tr>
                            <tr>
                                <th> Friday </th>
                                <td> 11 am - 2 am </td>
                            </tr>
                            <tr>
                                <th> Saturday </th>
                                <td> 12 pm - 2 am </td>
                            </tr>
                            <tr>
                                <th> Sunday </th>
                                <td> 2 pm - 12 am </td>
                            </tr>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SportCenter;