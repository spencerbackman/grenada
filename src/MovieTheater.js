import React from 'react';
import './styles/css/movieTheater.css';
import movie1 from './images/The_Invisible_Man585.jpg';
import movie2 from './images/The_Call_of_the_Wild889.jpg';
import movie3 from './images/Sonic_the_Hedgehog319.jpg';
import movie4 from './images/Bad_Boys_For_Life814.jpg';
import { Helmet } from 'react-helmet';

class MovieTheater extends React.Component {
    constructor() {
        super();
        this.state = {
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'none',
            class5: 'none',
            class6: 'none',
            class7: 'none'
        }
    }
    componentDidMount() {
        window.scrollTo(0,0)
    }
    openMovie = () => {
        this.setState({
            class: 'block',
            class2: 'none',
            class3: 'none',
            class4: 'none',
            class5: 'none',
            class6: 'none',
            class7: 'none'
        })
    }
    closeMovie = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'none',
            class5: 'none',
            class6: 'none',
            class7: 'none'
        })
    }
    openMovie2 = () => {
        this.setState({
            class: 'none',
            class2: 'block',
            class3: 'none',
            class4: 'none',
            class5: 'none',
            class6: 'none',
            class7: 'none'
        })
    }
    openMovie3 = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'block',
            class4: 'none',
            class5: 'none',
            class6: 'none',
            class7: 'none'
        })
    }
    openMovie4 = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'block',
            class5: 'none',
            class6: 'none',
            class7: 'none'
        })
    }
    openMovie5 = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'none',
            class5: 'block',
            class6: 'none',
            class7: 'none'
        })
    }
    openMovie6 = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'none',
            class5: 'none',
            class6: 'block',
            class7: 'none'
        })
    }
    openMovie7 = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'none',
            class5: 'none',
            class6: 'none',
            class7: 'block'
        })
    }
    render() { 
        return (
            <div className="movie-page-wrapper">
                <Helmet>
                    <title> Grenada Plaza Cinema ~ Local Grenada </title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Want to go to the movies? Grenada Plaza Cinema is the only theater within a 50 mile radius of Grenada. Check out what movies are playing!"/>
                    <link rel="canonical" href="https://www.localgrenada.com/movie-theater"/>
                </Helmet> 
                <div className="movie-top-wrapper">
                    <h1 className="movie-header"> Grenada Plaza Cinema </h1>
                    <div className="movie-top-row">
                        <a className="movie-top-link" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/Plaza+Cinema/@33.7747361,-89.8265739,17.08z/data=!4m5!3m4!1s0x8881cd3dbcf4a56f:0xd0cea15aa55242fa!8m2!3d33.7746075!4d-89.8244961">
                            1301-C Sunset Dr. Grenada, Ms
                        </a>
                        <a className="movie-top-link" href="tel:6622267575"> 662.226.7575 </a>
                    </div>
                </div>
                <div className="movie-mid-wrapper">
                    <div className="playing-wrapper">
                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie4}>
                                <img src={movie4} className="movie-image" alt="Bad Boys For Life" />
                                <h3 className="movie-title"> Bad Boys For Life </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class4}} id="movie4">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={movie4} className="popup-movie-image" alt="Bad Boys For Life" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"> Bad Boys For Life </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> R </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 53 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par"> 
                                                Old-school cops Mike Lowrey and Marcus Burnett team up with an elite unit to take down the vicious leader of a Miami drug cartel.
                                            </p> <br/>
                                            <p className="movie-par"> 
                                                <strong> Starring: </strong> 
                                                Will Smith, Martin Lawrence, Derrick Gilbert
                                            </p> <br/>
                                            <p className="movie-par"> 
                                                <strong> Genres: </strong> 
                                                Action, Comedy, Crime
                                            </p> <br/> <br/>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Bad Boys For Life" src="https://www.youtube.com/embed/jKCj3XuPG8M" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie}>
                                <img src={movie1} className="movie-image" alt="The Invisible Man" />
                                <h3 className="movie-title"> The Invisible Man </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class}} id="movie">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={movie1} className="popup-movie-image" alt="The Invisible Man" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3" id="movie-header"> The Invisible Man </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> R </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 50 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noopener noreferrer" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par"> 
                                                When Cecilia's abusive ex takes his own life and leaves her fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.
                                            </p> <br/>
                                            <p className="movie-par " id="starring"> <strong className="strong"> Starring: </strong> Oliver Jackson-Cohen, Elisabeth Moss, Storm Reid, Aldis Hodge, Harriet Dyer </p> <br/>
                                            <p className="movie-par" id="genre"> <strong className="strong"> Genres: </strong> Horror, Action, Sci-Fi </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="The Invisible Man" src="https://www.youtube.com/embed/dSBsNeYqh-k" className="movie-trailer" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie2}>
                                <img src={movie2} className="movie-image" alt="The Call of the Wild" />
                                <h3 className="movie-title"> The Call of the Wild </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class2}} id="movie2">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={movie2} className="popup-movie-image" alt="The Call of the Wild" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"  id="movie-header2"> The Call of the Wild </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 45 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par2">
                                                A sled dog struggles for survival in the Alaskan wild.
                                            </p> <br />
                                            <p className="movie-par" id="starring2"> 
                                                <strong> Starring: </strong> 
                                                Harrison Ford, Dan Stevens, Colin Woodell, Karen Gillan, Omar Sy
                                            </p> <br/>
                                            <p className="movie-par" id="genre2"> <strong> Genres: </strong> Adventure, Drama, Family </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="The Call of the Wild" src="https://www.youtube.com/embed/5P8R2zAhEwg" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie3}>
                                <img src={movie3} className="movie-image" alt="Sonic the Hedgehog" />
                                <h3 className="movie-title"> Sonic the Hedgehog </h3>
                            </div>

                            <div className="movie-popup" style={{display: this.state.class3}} id="movie3">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={movie3} className="popup-movie-image" alt="Sonic the Hedgehog" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"> Sonic the Hedgehog </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 40 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par"> 
                                                A cop in the rural town of Green Hills will help Sonic escape from the government who is looking to capture him.
                                            </p> <br/>
                                            <p className="movie-par"> 
                                                <strong> Starring: </strong> 
                                                    Ben Schwartz, James Marsden, Jim Carrey, Tika Sumpter, Lee Majdoub, Frank C. Turner
                                            </p> <br />
                                            <p className="movie-par"> <strong> Genres: </strong> Action, Adventure, Family </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Sonic the Hedgehog" src="https://www.youtube.com/embed/szby7ZHLnkA" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <h2 className="movie-header2"> Ticket Pricing </h2> */}
                    <div className="movie-row">
                        <p className="movie-par padding10 half">
                            Ticket prices and showtimes are subject to change without notice. Must be 17 years of age or older when purchasing tickets for rated 'R' films. Identification will be required upon entry. All shows 5:00 PM and after are evening showtimes
                        </p>
                        <div className="movie-column padding10 third">
                            <p className="movie-par"> Adults ~ <strong> $9.00 </strong> </p>
                            <p className="movie-par"> Adults [3D] ~ <strong> $12.00 </strong> </p>
                            <p className="movie-par"> Children (12 and under) ~ <strong> $7.00 </strong> </p>
                            <p className="movie-par"> Children (12 and under) [3D] ~ <strong> $9.00 </strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieTheater;

                        // <div className="movie-wrapper">
                        //     <div className="movie-container" onClick={this.openMovie5}>
                        //         <img src={movie5} className="movie-image" alt="Artic Dogs"/>
                        //         <h3 className="movie-title"> Artic Dogs </h3>
                        //     </div>
                        //     <div className="movie-popup" style={{display: this.state.class5}} id="movie5">
                        //         <div className="movie-popup-content">
                        //             <div className="popupCloseButton" onClick={this.closeMovie}> X </div>
                        //             <div className="movie-info-row">
                        //                 <div className="movie-column">
                        //                     <img src={movie5} className="popup-movie-image" alt="Artic Dogs"/>
                        //                 </div>
                        //                 <div className="movie-column">
                        //                     <h3 className="movie-header3"> Artic Dogs </h3>
                        //                     <div className="run-rating-row">
                        //                         <p className="run-rating"> PG </p>
                        //                         <div className="seperator"></div>
                        //                         <p className="run-rating"> 1 h 33 m </p>
                        //                         <div className="seperator"></div>
                        //                         <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                        //                     </div>
                        //                     <p className="movie-par">
                        //                         Swifty the Arctic Fox works in the mailroom of the Arctic Blast Delivery Service but dreams of one day becoming a Top Dog (the Arctic's star husky courier). To prove himself worthy of the Top Dog role, Swifty secretly commandeers one of the sleds and delivers a mysterious package to a secret location. He stumbles upon a hidden fortress, where he comes face to face with Otto Von Walrus, a blubbery evil genius, who walks around on mechanical legs and commands a loyal army of oddly polite puffin henchmen. Swifty soon discovers Otto Von Walrus' plan to drill beneath Arctic surface to unleash enough ancient gas to melt the Arctic, in order to reign as the world's supreme leader. Now, Swifty has to enlist the help of his friends: PB, an introverted polar bear, Lemmy, a scatterbrained albatross, Sal and Weez, two conspiracy theorist otters and Jade Fox, a tough as nails mechanic. This ragtag group of Arctic misfits has to band together to stop Otto Von Walrus' sinister plans and save the day.
                        //                     </p> <br/>
                        //                     <p className="movie-par">
                        //                         <strong> Starring: </strong>
                        //                         James Franco, Jeremy Renner, Alec Baldwin, Anjelica Huston, Michael Madsen, Heidi Klum
                        //                     </p>
                        //                     <p className="movie-par">
                        //                         <strong> Genres: </strong>
                        //                         Comedy, Adventure, Animation
                        //                     </p>
                        //                 </div>
                        //             </div>
                        //             <div className="trailer-holder">
                        //                 <iframe title="Artic Dogs" src="https://www.youtube.com/embed/_2Wn0mwoJJA" className="movie-trailer" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>