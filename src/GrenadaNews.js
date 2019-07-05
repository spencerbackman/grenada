import React from 'react';
import './styles/css/tv.css';
import { Helmet } from 'react-helmet';

class GrenadaNews extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="tv-page-wrapper">
                <Helmet>
                    <title> Grenada News ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Local Grenada is proud to present Grenada News." />
                    <link rel="canonical" href="https://www.localgrenada.com/grenada-news"/>
                </Helmet>
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="tv-top-container">
                    <h1 className="tv-header"> Local Grenada News </h1>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/283453878" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="tv-mid-container">
                    <h2 className="tv-header2"> Misses an episode? </h2>
                    <a className="tv-video-link" href="https://vimeo.com/273738532" target="_blank" rel="noopener noreferrer"> Episode 1 </a>
                    <a className="tv-video-link" href="https://vimeo.com/275322990" target="_blank" rel="noopener noreferrer"> Episode 2 </a>
                    <a className="tv-video-link" href="https://vimeo.com/277345785" target="_blank" rel="noopener noreferrer"> Episode 3 </a>
                </div>
            </div>
        )
    }
}

export default GrenadaNews;