import React, { useEffect } from 'react';
import './styles/css/tv.css';

export default function BurningBush() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Burning Bush </h1>
                <iframe title="Burning Bush Service" src="https://player.vimeo.com/video/414053470" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}