import React from 'react';

class GrownWoman extends React.Component {
    render() {
        return (
            <div className="tv-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="top-container">
                    <h1 className="header ml2"> Grown Woman </h1>
                    <iframe title="vimeo-player Grown Woman Episode 3" src="https://player.vimeo.com/video/278746719" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="line"></div>
                <div className="mid-container">
                    <h2 className="header2"> Missed an Episode? </h2>
                    <a className="video-link" href="https://vimeo.com/288175354" target="_blank" rel="noopener noreferrer"> Pilot</a>
                    <a className="video-link" href="https://vimeo.com/278689780" target="_blank" rel="noopener noreferrer"> Episode 1 </a>
                    <a className="video-link" href="https://vimeo.com/278702700" target="_blank" rel="noopener noreferrer"> Episode 2 </a>
                </div>
            </div>
        )
    }
}

export default GrownWoman;