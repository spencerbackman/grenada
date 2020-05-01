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
                <iframe title="Turning Point Service" src="https://player.vimeo.com/video/414067108" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}