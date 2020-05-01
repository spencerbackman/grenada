import React, { useEffect } from 'react';
import './styles/css/tv.css';

export default function ElliotBaptist() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Elliot Baptist Church </h1>
                <iframe title="Elliot Baptist Church Service" src="https://player.vimeo.com/video/414057287" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}