import React, { useEffect } from 'react';
import './styles/css/tv.css';

export default function Emmanuel() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Emmanuel </h1>
                <iframe title="Emmanuel Service" src="https://player.vimeo.com/video/416459192" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                <a className="tv-video-link" href="https://vimeo.com/414058017"> 4-26-20 Service </a>
            </div> 
        </div>
    )
}