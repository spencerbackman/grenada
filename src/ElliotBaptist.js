import React, { useEffect, useState } from 'react';
import './styles/css/tv.css';

export default function ElliotBaptist() {
    const [video, setVideo] = useState('415163325')
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Elliot Baptist Church </h1>
                <iframe title="Elliot Baptist Church Service" src={`https://player.vimeo.com/video/${video}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                {video === '415163325'
                ? null
                : 
                <p className="tv-video-link" onClick={() => setVideo('415163325')}>
                    5-3-20 Service
                </p>
                }
                {video === '414057287'
                ? null
                : 
                <p className="tv-video-link" onClick={() => setVideo('414057287')}>
                    4-26-20 Service
                </p>
                }
            </div> 
        </div>
    )
}