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
                <iframe title="Emmanuel Service" src="https://player.vimeo.com/video/414058017" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}