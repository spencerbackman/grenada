import React from 'react';

class GrenadaLake extends React.Component {
    render() {
        return (
            <div className="lake-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>
                <div className="top-container">

                </div>
                <div className="header-container">
                    <h1 className="main-header ml2"> Grenada Lake </h1>
                    <div className="underline"></div>
                </div>

                <div className="about-wrapper">
                    <p className="par">
                        Grenada Lake, the largest lake in Mississippi, is the go-to place for Crappie fishing. With a dam that is 80 feet deep and 13,900 feet-long there is plenty of opportunity to catch a trophy-sized fish.
                    </p>
                    <p className="par">
                        Don’t worry if you aren’t into fishing though. Grenada Lake has picnic areas, boat ramps and beaches to keep the non-fisherman busy during the day. With over 300 campsites, you and the whole family will have plenty of space to relax, start a fire and run around. Whether you prefer to camp or lodge in a cabin, Grenada Lake has a variety of both.
                    </p>
                    <div className="row">
                    <iframe className="lake-video" title="vimeo-player Grenada Lake is getting high" src="https://player.vimeo.com/video/332499091" frameBorder="0" allowFullScreen></iframe>
                    <img className="lake-picture" src="images/GrenadaPicnic.png" alt="Grenada Lake Picnic Table - Grenada Mississippi" />1
                    </div>
                </div>
            </div>
        )
    }
}

export default GrenadaLake;