import React from 'react';

class RotaryClub extends React.Component {
    render() {
        return (
            <div className="tv-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="top-container">
                    <h1 className="header ml2"> Rotary Club </h1>
                    <iframe title="vimeo-player Rotary Club Meeting 5/13/19" src="https://player.vimeo.com/video/337836606" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
                </div>
                <div className="line"></div>
                <div className="mid-container">
                    <h2 className="header2"> Missed a Meeting? </h2>
                    <a href="https://vimeo.com/327947051" className="video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-1-2019 Meeting </a>
                    <a href="https://vimeo.com/329807928" className="video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-8-2019 Meeting </a>
                    <a href="https://vimeo.com/331984441" className="video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-15-2019 Meeting </a>
                    <a href="https://vimeo.com/333823207" className="video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-29-2019 Meeting </a>
                    <a href="https://vimeo.com/335422989" className="video-link" target="_blank" rel="noreferrer noopener"> Rotary 5-6-2019 Meeting </a>
                </div>
            </div> 
        )
    }
}
export default RotaryClub;