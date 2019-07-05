import React from 'react';
import image from './images/dogwoods-golf.jpg';
import { Helmet } from 'react-helmet';
import './styles/css/golf.css';

class Golf extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="golf-page-wrapper">
                <Helmet>
                    <title> Dogwoods Golf Course ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="If you're a golfer in the area you've probably been to Dogwoods Golf Course. If you're unfimiliar with the course Golf Digest says it's 'America's Best New Bargain'. Go check out Dogwoods Golf Course!" />
                    <link rel="canonical" href="https://www.localgrenada.com/golf" />
                </Helmet>
                <div className="golf-top-container">
                    <h1 className="golf-header"> Dogwoods Golf Course </h1>
                    <div className="golf-top-row">
                        <a className="golf-link" href="tel:6622264123"> (662) 226-4123 </a>
                        <a className="golf-link" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/Dogwoods+Golf+Course/@33.7984339,-89.7335267,13.78z/data=!4m5!3m4!1s0x8881cacc111a8b75:0x9cc114f1c8426694!8m2!3d33.8032071!4d-89.7278752"> 2424 Hugh White State Park Rd. Grenada, MS </a>
                    </div>
                </div>
                <div className="golf-image-container">
                    <img src={image} className="golf-image" alt="Dogwoods Golf Course"/>
                </div>
                <div className="golf-mid-container">
                    <h2 className="golf-header2"> From Gold Digest </h2>
                    <p className="golf-quote"> "America's Best New Bargain" </p>
                    <p className="golf-quote"> "Ranked #5 in America's Best New Public Golf Courses under $75" </p>
                    <p className="golf-quote"> "Ranked #8 Overall in Mississippi" </p>
                </div>
                <div className="golf-bottom-container">
                <div className="golf-row">
                    <div className="golf-column">
                        <table>
                            <caption> Guest Fees </caption>
                            <tr>
                                <th> 18 Holes </th>
                                <td> $40.00 </td>
                            </tr>
                            <tr>
                                <th> 9 Holes </th>
                                <td> $25.00 </td>
                            </tr>
                            <tr>
                                <th> Twilight </th>
                                <td> $30.00 </td>
                            </tr>
                            <tr>
                                <th> Replay </th>
                                <td> $20.00 </td>
                            </tr>
                            <tr>
                                <th> Juniors </th>
                                <td> $27.00 </td>
                            </tr>
                            <tr>
                                <th>  Senior <br/> (60 & Over) </th>
                                <td> $35.00 </td>
                            </tr>
                        </table>
                    </div>
                    <div className="golf-column">
                        <table>
                            <caption> Annual Pass Fees </caption>
                            <tr>
                                <th> Single Golf Pass </th>
                                <td> $1,750 </td>
                            </tr>
                            <tr>
                                <th> Couple Golf Pass </th>
                                <td> $2,000 </td>
                            </tr>
                            <tr>
                                <th> Family Golf Pass </th>
                                <td> $2,250 </td>
                            </tr>
                            <tr>
                                <th> Corporate Golf Pass <br/> (Per Person) </th>
                                <td> $1,500 </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Golf;