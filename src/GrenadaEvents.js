import React from 'react';

class GrenadaEvents extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="tv-page-wrapper">
                <div id="tv-top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>
                <div className="tv-top-container">
                    <h1 className="tv-header"> Grenada Events </h1>
                    <iframe title="Thunder on Water" src="https://player.vimeo.com/video/337607858" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="tv-mid-container">
                    <h2 className="tv-header2"> Missed an Episode? </h2>
                    <a className="tv-video-link"  href="https://vimeo.com/306552300"> Grenada Elementary Musical </a>
                </div>
            </div>
        )
    }
}

export default GrenadaEvents;