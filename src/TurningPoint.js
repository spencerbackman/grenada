import React, { useEffect, useState } from 'react';
import './styles/css/tv.css';

export default function TurningPoint() {
    const [ video, setVideo ] = useState('415161437')
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Turning Point </h1>
                <iframe title="Turning Point Service" src={`https://player.vimeo.com/video/${video}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                {video === '415161437'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('415161437')}> 5-3-20 Service </p>
                }
                {video === '414067108'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('414067108')}> 4-26-20 Service </p>
                }
            </div> 
        </div>
    )
}