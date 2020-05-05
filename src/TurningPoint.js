import React, { useEffect } from 'react';
import './styles/css/tv.css';

export default function TurningPoint() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Turning Point </h1>
                <iframe title="Turning Point Service" src="https://player.vimeo.com/video/415161437" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                <a className="tv-video-link" href="https://vimeo.com/414067108"> 4-26-20 Service </a>
            </div> 
        </div>
    )
}