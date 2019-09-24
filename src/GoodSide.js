import React from 'react';
import { Helmet } from 'react-helmet';

class GoodSide extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="tv-page-wrapper">
                <Helmet>
                    <title> The Good Side ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="The Good Side is a t.v. episode by Local Grenada. It's goal is to find all the good things in Grenada." />
                    <link rel="canonical" href="https://www.localgrenada.com/the-good-side"/>
                </Helmet>
                <div class="tv-top-container">
                    <h1 class="tv-header"> The Good Side </h1>
                    <iframe title="Good side of Grenada - T&Z Wings" src="https://player.vimeo.com/video/362062854" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
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
                    <a className="tv-video-link" href="https://vimeo.com/320828946" target="_blank" rel="noopener noreferrer"> Episode 8 </a>
                </div>
            </div>
        )
    }
}

export default GoodSide;