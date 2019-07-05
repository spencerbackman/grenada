import React from 'react';
import './styles/css/movieTheater.css';
import spiderMan from './images/SpiderMan_Far_from_Home169.jpg';
import annabelle from './images/Annabelle_Comes_Home521.jpg';
import toyStory from './images/Toy_Story_4560.jpg';
import menInBlack from './images/Men_in_Black_International973.jpg';
import { Helmet } from 'react-helmet';

class MovieTheater extends React.Component {
    constructor() {
        super();
        this.state = {
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'none'
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
            class4: 'none'
        })
    }
    closeMovie = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'none'
        })
    }
    openMovie2 = () => {
        this.setState({
            class: 'none',
            class2: 'block',
            class3: 'none',
            class4: 'none'
        })
    }
    openMovie3 = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'block',
            class4: 'none'
        })
    }
    openMovie4 = () => {
        this.setState({
            class: 'none',
            class2: 'none',
            class3: 'none',
            class4: 'block'
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
                            <div className="movie-container" onClick={this.openMovie}>
                                <img src={spiderMan} className="movie-image" alt="Spider-Man: Far from Home" />
                                <h3 className="movie-title"> Spider-Man: Far from Home </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class}} id="movie">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={spiderMan} className="popup-movie-image" alt="Spider-Man: Far from Home" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3" id="movie-header"> Spider-Man: Far from Home </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG-13 </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 2 h 9 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noopener noreferrer" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par"> 	Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent. </p> <br/>
                                            <p className="movie-par " id="starring"> <strong className="strong"> Starring: </strong> Tom Holland, Jake Gyllenhaal, Michael Keaton, Zendaya, Samuel L. Jackson, Cobie Smulders </p> <br/>
                                            <p className="movie-par" id="genre"> <strong className="strong"> Genres: </strong> Action, Adventure, Sci-Fi </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Spider-Man: Far from Home" src="https://www.youtube.com/embed/DYYtuKyMtY8" className="movie-trailer" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie2}>
                                <img src={annabelle} className="movie-image" alt="Annabelle Comes Home" />
                                <h3 className="movie-title"> Annabelle Comes Home </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class2}} id="movie2">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={annabelle} className="popup-movie-image" alt="Annabelle Comes Home" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"  id="movie-header2"> Annabelle Comes Home </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> R </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 46 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par2"> 	Determined to keep Annabelle from wreaking more havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their home, placing her “safely” behind sacred glass and enlisting a priest’s holy blessing. But an unholy night of horror awaits as Annabelle awakens the evil spirits in the room, who all set their sights on a new target—the Warrens' ten-year-old daughter, Judy, and her friends. </p> <br />
                                            <p className="movie-par" id="starring2"> <strong> Starring: </strong> Mckenna Grace, Madison Iseman, Patrick Wilson, Vera Farmiga, Emily Brobst, Stephen Blackehart </p> <br/>
                                            <p className="movie-par" id="genre2"> <strong> Genres: </strong> Horror </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Annabelle Comes Home" src="https://www.youtube.com/embed/EMa-KFfatT0" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie3}>
                                <img src={toyStory} className="movie-image" alt="Toy Story 4" />
                                <h3 className="movie-title"> Toy Story 4 </h3>
                            </div>

                            <div className="movie-popup" style={{display: this.state.class3}} id="movie3">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={toyStory} className="popup-movie-image" alt="Toy Story 4" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"> Toy Story 4 </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> G </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 40 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par"> The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization. </p> <br/>
                                            <p className="movie-par"> <strong> Starring: </strong> Tom Hanks, Tim Allen, Joan Cusack, Tony Hale, Estelle Harris, Wallace Shawn </p> <br />
                                            <p className="movie-par"> <strong> Genres: </strong> Adventure, Comedy, Animation </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Toy Story 4" src="https://www.youtube.com/embed/wmiIUN-7qhE" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie4}>
                                <img src={menInBlack} className="movie-image" alt="Men in Black: International" />
                                <h3 className="movie-title"> Men in Black: International </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class4}} id="movie4">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={menInBlack} className="popup-movie-image" alt="Men in Black: International" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"> Men in Black: International </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> G </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 40 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par"> 	The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization. </p> <br/>
                                            <p className="movie-par"> <strong> Starring: </strong> Chris Hemsworth, Tessa Thompson, Liam Neeson, ebecca Ferguson, Emma Thompson, Rafe Spall </p> <br/>
                                            <p className="movie-par"> <strong> Genres: </strong> Action, Comedy, Sci-Fi </p> <br/> <br/>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Men in Black: International" src="https://www.youtube.com/embed/BV-WEb2oxLk" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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