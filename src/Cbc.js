import React, { useEffect, useState } from 'react';
import './styles/css/tv.css';

export default function Cbc() {
    const [ am, setAm ] = useState('415149651')
    const [ pm, setPm ] = useState('415165283')
    useEffect(() => { 
        window.scrollTo(0,0)
    }, [])
    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> Central Baptist Church </h1>
                <iframe title="Central Baptist Church Service" src={`https://player.vimeo.com/video/${am}`} frameBorder="0" allowFullScreen></iframe>
                <h2 className="tv-header2"> PM Service </h2>
                <iframe title="Central Baptist Church PM Service" src={`https://player.vimeo.com/video/${pm}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                {am === '415149651'
                ? null
                : 
                <p className="tv-video-link" onClick={() => setAm('415149651')}> 5-3-20 AM Service </p>
                }
                {pm === '415165283'
                ? null
                : 
                <p className="tv-video-link" onClick={() => setPm('415165283')}> 5-3-20 PM Service </p>
                }
                {am === '414055965'
                ? null
                :
                <p className="tv-video-link" onClick={() => setAm('414055965')}> 4-26-20 AM Service </p>
                }
                {pm === '414056622'
                ? null 
                : 
                <p className="tv-video-link" onClick={() => setPm('414056622')}> 4-26-20 PM Service </p>
                }
                {/* <a className="tv-video-link" href="https://vimeo.com/414055965"> 4-26-20 AM Service </a>
                <a className="tv-video-link" href="https://vimeo.com/414056622"> 4-26-20 PM Service </a> */}
            </div> 
        </div>
    )
}