import React from 'react';

class Golf extends React.Component {
    render() {
        return (
            <div className="golf-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="top-container">
                    <h1 className="header ml2"> Dogwoods Golf Course </h1>
                    <a className="link ml2" href="tel:6622264123"> (662) 226-4123 </a>
                    <a className="link ml2" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/Dogwoods+Golf+Course/@33.7984339,-89.7335267,13.78z/data=!4m5!3m4!1s0x8881cacc111a8b75:0x9cc114f1c8426694!8m2!3d33.8032071!4d-89.7278752"> 2424 Hugh White State Park Rd. <br/> Grenada, MS </a>
                </div>
                <div className="line"></div>
                <div className="mid-container">
                    <h2 className="header2"> From Gold Digest </h2>
                    <p className="quote"> "America's Best New Bargain" </p>
                    <p className="quote"> "Ranked #5 in America's Best New Public Golf Courses under $75" </p>
                    <p className="quote"> "Ranked #8 Overall in Mississippi" </p>
                </div>
                <div className="line"></div>
                <div className="bottom-container">
                <h2 className="header2"> Course Fees </h2>
                <p className="par">  ~ All Fees Include a Cart </p>
                <div className="row">
                    <div className="column">
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
                    <div className="column">
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