import React from 'react';

class RotaryClub extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }
    render() {
        return (
            <div className="tv-page-wrapper">
                <div className="tv-top-container">
                    <h1 className="tv-header"> Rotary Club </h1>
                    <iframe title="vimeo-player Rotary Club Meeting 5/13/19" src="https://player.vimeo.com/video/337836606" frameBorder="0" allow="fullscreen" allowFullScreen></iframe>
                </div>
                <div className="tv-mid-container">
                    <h2 className="tv-header2"> Missed a Meeting? </h2>
                    <a href="https://vimeo.com/327947051" className="tv-video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-1-2019 Meeting </a>
                    <a href="https://vimeo.com/329807928" className="tv-video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-8-2019 Meeting </a>
                    <a href="https://vimeo.com/331984441" className="tv-video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-15-2019 Meeting </a>
                    <a href="https://vimeo.com/333823207" className="tv-video-link" target="_blank" rel="noreferrer noopener"> Rotary 4-29-2019 Meeting </a>
                    <a href="https://vimeo.com/335422989" className="tv-video-link" target="_blank" rel="noreferrer noopener"> Rotary 5-6-2019 Meeting </a>
                </div>
            </div> 
        )
    }
}
export default RotaryClub;