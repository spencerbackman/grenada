import React from 'react';

class GrenadaEvents extends React.Component {
    render() {
        return (
            <div className="tv-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>
                <div className="top-container">
                    <h1 className="header ml2"> Grenada Events </h1>
                    <iframe title="vimeo-player Grenada Elementary Musical" src="https://player.vimeo.com/video/306552300" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="line"></div>
            </div>
        )
    }
}

export default GrenadaEvents;