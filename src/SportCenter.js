import React from 'react';

class SportCenter extends React.Component {
    render() {
        return (
            <div className="sport-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="top-container"></div>
                <div className="top-header">
                    <h1 className="main-header ml2" > The Sports Center </h1>
                    <a className="top-link ml2" href="tel:6622261322"> (662) 226-1322 </a> <br/> <br/>
                    <a className="top-link ml2" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/Sports+Center/@33.7759305,-89.8225888,17z/data=!3m1!4b1!4m5!3m4!1s0x8881cd214db132c9:0x8e5a5bf8bfcde3fe!8m2!3d33.7759263!4d-89.8205164"> 893 Springhill Rd. Grenada, MS </a>
                </div>

                <div className="mid-wrapper">
                <iframe title="sport center video" src="https://player.vimeo.com/video/310375946" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                <div className="wrapper">
                    <h2 className="header2"> Pool tournaments every Tuesday and Thursday starting at 8 pm. <br/> ($10 entry fee) </h2>
                    <div>
                        <div className="icon-holder">"</div>
                        <p className="quote">"Friends and Family love this place! Pool tables are awesome! Food is great as well!"</p>
                        <p className="name"> ~Tarren Poynor </p>
                    </div>
                </div>
                    <div className="mid-container">
                    <div className="wrapper">
                        <div className="box">
                            <h3 className="header3"> Happy Hour </h3>
                            <p className="par"> Everyday from 4-7! </p>
                        </div>
                        <img src="images/sport-center-outside.png" className="image" alt="The Sports Center"/>
                    </div>
                    <div className="wrapper">
                        <table className="table">
                            <caption>OPEN</caption>
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