import React from 'react';

class GoodSide extends React.Component {
    render() {
        return (
            <div className="tv-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div class="top-container">
                    <h1 class="header ml2"> The Good Side </h1>
                    <iframe title="vimeo-player The Good Side" src="https://player.vimeo.com/video/320828946" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div class="line"></div>
                <div class="mid-container">
                    <h2 class="header2"> Missed an Episode? </h2>
                    <a class="video-link" href="https://vimeo.com/249021974" target="_blank" rel="noopener noreferrer"> Episode 1</a>
                    <a class="video-link" href="https://vimeo.com/254373573" target="_blank" rel="noopener noreferrer"> Episode 2 </a>
                    <a class="video-link" href="https://vimeo.com/254366425" target="_blank" rel="noopener noreferrer"> Episode 3 </a>
                    <a class="video-link" href="https://vimeo.com/254359987" target="_blank" rel="noopener noreferrer"> Episode 4 </a>
                    <a class="video-link" href="https://vimeo.com/271692600" target="_blank" rel="noopener noreferrer"> Episode 5 </a>
                    <a class="video-link" href="https://vimeo.com/287733770" target="_blank" rel="noopener noreferrer"> Episode 6 </a>
                    <a class="video-link" href="https://vimeo.com/319323644" target="_blank" rel="noopener noreferrer"> Episode 7 </a>
                </div>
            </div>
        )
    }
}

export default GoodSide;