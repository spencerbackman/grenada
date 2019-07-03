import React from 'react';

class GoodSide extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="tv-page-wrapper">
                <div class="tv-top-container">
                    <h1 class="tv-header"> The Good Side </h1>
                    <iframe title="vimeo-player The Good Side" src="https://player.vimeo.com/video/320828946" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div class="tv-mid-container">
                    <h2 class="tv-header2"> Missed an Episode? </h2>
                    <a class="tv-video-link" href="https://vimeo.com/249021974" target="_blank" rel="noopener noreferrer"> Episode 1</a>
                    <a class="tv-video-link" href="https://vimeo.com/254373573" target="_blank" rel="noopener noreferrer"> Episode 2 </a>
                    <a class="tv-video-link" href="https://vimeo.com/254366425" target="_blank" rel="noopener noreferrer"> Episode 3 </a>
                    <a class="tv-video-link" href="https://vimeo.com/254359987" target="_blank" rel="noopener noreferrer"> Episode 4 </a>
                    <a class="tv-video-link" href="https://vimeo.com/271692600" target="_blank" rel="noopener noreferrer"> Episode 5 </a>
                    <a class="tv-video-link" href="https://vimeo.com/287733770" target="_blank" rel="noopener noreferrer"> Episode 6 </a>
                    <a class="tv-video-link" href="https://vimeo.com/319323644" target="_blank" rel="noopener noreferrer"> Episode 7 </a>
                </div>
            </div>
        )
    }
}

export default GoodSide;