import React, { useEffect } from 'react';
import './styles/css/tv.css';

export default function FirstBaptistChurch() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> First Baptist Church </h1>
                <iframe title="First Baptist Church Service" src="https://player.vimeo.com/video/415151639" frameBorder="0" allowFullScreen></iframe>
                <h2 className="tv-header2"> PM Service </h2>
                <iframe title="First Baptist Church PM Service" src="https://player.vimeo.com/video/416451438" frameBorder="0" allowFullScreen></iframe>
                <h2 className="tv-header2"> Sunday School </h2>
                <iframe title="First Baptist Church Sunday School" src="https://player.vimeo.com/video/416461569" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                <a className="tv-video-link" href="https://vimeo.com/414066584"> 4-26-20 AM Service </a>
                <a className="tv-video-link" href="https://vimeo.com/414066183"> 4-26-20 PM Service </a>
                <a className="tv-video-link" href="https://vimeo.com/414052256"> 5-3-20 Sunday School </a>
            </div>
        </div>
    )
}