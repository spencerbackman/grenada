import React from 'react';
import KirkAutoCo from './images/KirkAutoCo_black.png';
import grenadaDental from './images/grenada-dental-associates.png';
import grenadaBadBoys from './images/grenadaBad.png';
import kirkTrucks from './images/kirkTruck.png';
import dk from './images/dkTruckOutfitters.png';
import kirkSun from './images/KirkSunset_blue.png';
import sayle from './images/sayle.png';
import caldwell from './images/caldwell-tree-service.png';
import kirkToy from './images/KirkToyota_black.png';
import csb from './images/csblogo.png';
import holcombClinic from './images/holcombClinic.png';
import bryantFarms from './images/bryantFarmsLogo.png';
import nsmc from './images/nsmc.png';
import buick from './images/buickGMC.png';

class Business extends React.Component {
    render() {
        return (
                <div className="business-page-wrapper">
                    <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>
                    <div className="top-container">
                        <h1 className="header ml2"> Local Businesses </h1>
                        <div className="line"></div>
                        <div className="business-container">
                            <div className="box">
                                <img className="partner-logo" src={KirkAutoCo} alt="Kirk Auto Company"/>
                                <iframe src="https://player.vimeo.com/video/325247476" title="Kirk Auto Company Lincoln" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={grenadaDental} alt="Grenada Dental Associates" />
                                <iframe title="vimeo-player Grenada Dental Associates January 2019" src="https://player.vimeo.com/video/309533922" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={grenadaBadBoys} alt="Grenada Bad Boys" />
                                <iframe title="vimeo-player Grenada Bad Boys May 2019" src="https://player.vimeo.com/video/333177045" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={kirkTrucks} alt="Kirk Brothers Truck Center" />
                                <iframe title="vimeo-player Kirk Brothers Truck Center Commercial" src="https://player.vimeo.com/video/280412605" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={dk} alt="DK Truck Outfitters" />
                                <iframe title="vimeo-player DK Truck Outfitters" src="https://player.vimeo.com/video/201933562" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={kirkSun} alt="Kirk Brothers Sunset - Chrysler, Dodge, Jeep, Ram" />
                                <iframe src="https://player.vimeo.com/video/333853048" title="vimeo-player Kirk Brothers Sunset - Chrysler, Dodge, Jeep, Ram" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={sayle} alt="Sayle Oil Co." />
                                <iframe title="vimeo-player Sayle Oil Co." src="https://player.vimeo.com/video/311756744" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={caldwell} alt="Caldwell Tree Service" />
                                <iframe title="vimeo-player Caldwell Tree Service" src="https://player.vimeo.com/video/218074020" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={kirkToy} alt="Kirk Brothers Toyota" />
                                <iframe title="vimeo-player Kirk Brothers Toyota" src="https://player.vimeo.com/video/311557332" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={csb} alt="Cleveland State Bank" />
                                <iframe title="vimeo-player Cleveland State Bank Commercial" src="https://player.vimeo.com/video/319969545" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={holcombClinic} alt="The Holcomb Clinic" />
                                <iframe title="vimeo-player The Holcomb Clinic" src="https://player.vimeo.com/video/332325195" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <h2 className="header2"> The Sports Center </h2>
                                <iframe title="vimeo-player The Sports Center" src="https://player.vimeo.com/video/310375946" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={bryantFarms} alt="Bryant Farms" />
                                <iframe title="vimeo-player Bryant Farms" src="https://player.vimeo.com/video/327348653" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={nsmc} alt="North Sunflower Medical Clinic" />
                                <iframe title="vimeo-player North Sunflower Medical Clinic" src="https://player.vimeo.com/video/333811766" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <h2 className="header2"> Winona Tractor & Equipment </h2>
                                <iframe title="vimeo-player Winona Tractor & Equipment" src="https://player.vimeo.com/video/327757022" frameBorder="0" allowFullScreen></iframe>
                            </div>
                            <div className="box">
                                <img className="partner-logo" src={buick} alt="Kirk Brothers Buick Gmc" />
                                <iframe title="vimeo-player Kirk Brothers Buick Gmc" src="https://player.vimeo.com/video/333972567" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Business;