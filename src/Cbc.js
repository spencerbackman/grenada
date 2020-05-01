import React, { useEffect } from 'react';
import './styles/css/tv.css';

export default function Cbc() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Central Baptist Church </h1>
                <iframe title="Central Baptist Church Service" src="https://player.vimeo.com/video/414055965" frameBorder="0" allowFullScreen></iframe>
                <h2 className="tv-header2"> PM Service </h2>
                <iframe title="Central Baptist Church PM Service" src="https://player.vimeo.com/video/414056622" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}