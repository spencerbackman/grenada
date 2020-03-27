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
                    <iframe title="Grocery Basket" src="https://player.vimeo.com/video/401470580" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
                <div className="tv-mid-container">
                    <h2 className="tv-header2"> Misses an episode? </h2>
                    <a className="tv-video-link" href="https://vimeo.com/273738532" target="_blank" rel="noopener noreferrer"> Episode 1 (Thunder on Water) </a>
                    <a className="tv-video-link" href="https://vimeo.com/275322990" target="_blank" rel="noopener noreferrer"> Episode 2 (Miss Mississippi Outstanding Teen) </a>
                    <a className="tv-video-link" href="https://vimeo.com/277345785" target="_blank" rel="noopener noreferrer"> Episode 3 </a>
                    <a className="tv-video-link" href="https://vimeo.com/283453878" target="_blank" rel="noopener noreferrer"> Episode 4 </a>
                    <a className="tv-video-link" href="https://vimeo.com/341843110" target="_blank" rel="noopener noreferrer"> Episode 5 (ROTC) </a>
                    <a className="tv-video-link" href="https://vimeo.com/344663472" target="_blank" rel="noopener noreferrer"> Episode 6 </a>
                    <a className="tv-video-link" href="https://vimeo.com/344666969" target="_blank" rel="noopener noreferrer"> Episode 7 (Pastor Blake) </a>
                    <a className="tv-video-link" href="https://vimeo.com/347786648" target="_blank" rel="noopener noreferrer">
                        Episode 8
                    </a>
                </div>
            </div>
        )
    }
}

export default GrenadaNews;