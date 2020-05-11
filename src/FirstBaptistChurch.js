import React, { useEffect, useState } from 'react';
import './styles/css/tv.css';

export default function FirstBaptistChurch() {
    const [ am, setAm ] = useState('415151639')
    const [ pm, setPm ] = useState('416451438')
    const [ ss, setSs ] = useState('416461569')
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className="tv-page-wrapper">
            <div className="tv-top-container">
                <h1 className="tv-header"> First Baptist Church </h1>
                <iframe title="First Baptist Church Service" src={`https://player.vimeo.com/video/${am}`} frameBorder="0" allowFullScreen></iframe>
                <h2 className="tv-header2"> PM Service </h2>
                <iframe title="First Baptist Church PM Service" src={`https://player.vimeo.com/video/${pm}`} frameBorder="0" allowFullScreen></iframe>
                <h2 className="tv-header2"> Sunday School </h2>
                <iframe title="First Baptist Church Sunday School" src={`https://player.vimeo.com/video/${ss}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="tv-mid-container">
                <h2 className="tv-header2"> Past Services </h2>
                {am === '415151639'
                ? null
                : <p className="tv-video-link" onClick={() => setAm('415151639')}> 5-3-20 Service </p>
                }
                {pm === '416451438'
                ? null
                : <p className="tv-video-link" onClick={() => setPm('416451438')}> 5-6-20 Service </p>
                }
                {ss === '416461569'
                ? null
                : <p className="tv-video-link" onClick={() => setSs('416461569')}> 5-10-20 Service </p>
                }
                {am === '414066584'
                ? null
                : <p className="tv-video-link" onClick={() => setAm('414066584')}> 4-26-20 Service </p>
                }
                {pm === '414066183'
                ? null
                : <p className="tv-video-link" onClick={() => setPm('414066183')}> 4-26-20 Service </p>
                }
                {ss === '414052256'
                ? null
                : <p className="tv-video-link" onClick={() => setSs('414052256')}> 5-3-20 Service </p>
                }
                {/* <a className="tv-video-link" href="https://vimeo.com/414066584"> 4-26-20 AM Service </a>
                <a className="tv-video-link" href="https://vimeo.com/414066183"> 4-26-20 PM Service </a>
                <a className="tv-video-link" href="https://vimeo.com/414052256"> 5-3-20 Sunday School </a> */}
            </div>
        </div>
    )
}