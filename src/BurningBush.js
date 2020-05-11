import React, { useEffect, useState } from 'react';
import './styles/css/tv.css';

export default function BurningBush() {
    const [ video, setVideo ] = useState('414053470')
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Burning Bush </h1>
                <iframe title="Burning Bush Service" src={`https://player.vimeo.com/video/${video}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                {video === '414053470'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('414053470')}>
                    4-26-20 Service
                </p>
                }
            </div>
        </div>
    )
}