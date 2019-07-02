import React from 'react';

class GrenadaNews extends React.Component {
    render() {
        return (
            <div className="tv-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="top-container">
                    <h1 className="header ml2"> Local Grenada News </h1>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/283453878" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="line"></div>
                <div className="mid-container">
                    <h2 className="header2"> Misses an episode? </h2>
                    <a className="video-link" href="https://vimeo.com/273738532" target="_blank" rel="noopener noreferrer"> Episode 1 </a>
                    <a className="video-link" href="https://vimeo.com/275322990" target="_blank" rel="noopener noreferrer"> Episode 2 </a>
                    <a className="video-link" href="https://vimeo.com/277345785" target="_blank" rel="noopener noreferrer"> Episode 3 </a>
                </div>
            </div>
        )
    }
}

export default GrenadaNews;