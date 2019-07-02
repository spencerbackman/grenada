import React from 'react';

class GrenadaTalks extends React.Component {
    render() {
        return (
            <div className="tv-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="top-container">
                    <h1 className="header ml2"> Grenada Talks </h1>
                    <iframe title="vimeo-player Grenada Talks Episode 11" src="https://player.vimeo.com/video/297775029" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="line"></div>
                <div className="mid-container">
                    <h2 className="header2"> Missed an episode? </h2>
                    <a className="video-link" href="https://vimeo.com/276291029" target="_blank" rel="noopener noreferrer"> Episode 1 </a>
                    <a className="video-link" href="https://vimeo.com/278182472" target="_blank" rel="noopener noreferrer"> Episode 2 </a>
                    <a className="video-link" href="https://vimeo.com/280385028" target="_blank" rel="noopener noreferrer"> Episode 3 </a>
                    <a className="video-link" href="https://vimeo.com/281328684" target="_blank" rel="noopener noreferrer"> Episode 4 </a>
                    <a className="video-link" href="https://vimeo.com/282396151" target="_blank" rel="noopener noreferrer"> Episode 5 </a>
                    <a className="video-link" href="https://vimeo.com/285889095" target="_blank" rel="noopener noreferrer"> Episode 6 </a>
                    <a className="video-link" href="https://vimeo.com/289088606" target="_blank" rel="noopener noreferrer"> Episode 7 </a>
                    <a className="video-link" href="https://vimeo.com/290383940" target="_blank" rel="noopener noreferrer"> Episode 8 </a>
                    <a className="video-link" href="https://vimeo.com/292784618" target="_blank" rel="noopener noreferrer"> Episode 9 </a>
                    <a className="video-link" href="https://vimeo.com/294224309" target="_blank" rel="noopener noreferrer"> Episode 10 </a>
                </div>
            </div>
        )
    }
}

export default GrenadaTalks;