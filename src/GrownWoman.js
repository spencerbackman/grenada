import React from 'react';

class GrownWoman extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="tv-page-wrapper">
                <div className="tv-top-container">
                    <h1 className="tv-header"> Grown Woman </h1>
                    <iframe title="vimeo-player Grown Woman Episode 3" src="https://player.vimeo.com/video/278746719" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="tv-mid-container">
                    <h2 className="tv-header2"> Missed an Episode? </h2>
                    <a className="tv-video-link" href="https://vimeo.com/288175354" target="_blank" rel="noopener noreferrer"> Pilot</a>
                    <a className="tv-video-link" href="https://vimeo.com/278689780" target="_blank" rel="noopener noreferrer"> Episode 1 </a>
                    <a className="tv-video-link" href="https://vimeo.com/278702700" target="_blank" rel="noopener noreferrer"> Episode 2 </a>
                </div>
            </div>
        )
    }
}

export default GrownWoman;