import React, { useEffect, useState } from 'react';
import './styles/css/tv.css';

export default function Emmanuel() {
    const [ video, setVideo ] = useState('417363268')
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Emmanuel </h1>
                <iframe title="Emmanuel Service" src={`https://player.vimeo.com/video/${video}`}frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                {video === '417363268'
                ? null 
                : 
                <p className="tv-video-link" onClick={() => setVideo('417363268')}> 5-10-20 Service </p>
                }
                {video === '416459192'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('416459192')}> 5-3-20 Service </p>
                }
                {video === '414058017'
                ? null
                : <p className="tv-video-link" onClick={() => setVideo('414058017')}> 4-26-20 Service </p>
                }
            </div> 
        </div>
    )
}