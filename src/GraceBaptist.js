import React, { useEffect, useState } from 'react';
import './styles/css/tv.css';

export default function GraceBaptist() {
    const [ video, setVideo ] = useState('416899539')
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Grace Baptist Church </h1>
                <iframe title="Grace Baptist Church Service" src={`https://player.vimeo.com/video/${video}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                {video === '416899539'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('416899539')}> 5-10-20 Service </p>
                }
                {video === '414239144'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('414239144')}> 5-3-20 Service </p> 
                }
                {video === '411904049'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('411904049')}> 4-26-20 Service </p>
                }
            </div> 
        </div>
    )
}