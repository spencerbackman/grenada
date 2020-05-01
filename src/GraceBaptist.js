import React, { useEffect } from 'react';
import './styles/css/tv.css';

export default function GraceBaptist() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Grace Baptist Church </h1>
                <iframe title="Grace Baptist Church Service" src="https://player.vimeo.com/video/411904049" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}