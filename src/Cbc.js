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
                <iframe title="Central Baptist Church Service" src="https://player.vimeo.com/video/415149651" frameBorder="0" allowFullScreen></iframe>
                <h2 className="tv-header2"> PM Service </h2>
                <iframe title="Central Baptist Church PM Service" src="https://player.vimeo.com/video/415165283" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                <a className="tv-video-link" href="https://vimeo.com/414055965"> 4-26-20 AM Service </a>
                <a className="tv-video-link" href="https://vimeo.com/414056622"> 4-26-20 PM Service </a>
            </div> 
        </div>
    )
}