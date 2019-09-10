import React from 'react';
import './styles/css/movieTheater.css';
import movie1 from './images/overcomer.jpg';
import movie2 from './images/It_Chapter_Two240.jpg';
import movie3 from './images/Scary_Stories_to_Tell_in_the_Dark508.jpg';
import lionKing from './images/The_Lion_King607.jpg';
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
                                <img src={movie1} className="movie-image" alt="Overcomer" />
                                <h3 className="movie-title"> Overcomer </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class}} id="movie">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={movie1} className="popup-movie-image" alt="Overcomer" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3" id="movie-header"> Overcomer </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 2 h 4 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noopener noreferrer" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par"> 
                                                Life changes overnight for Coach John Harrison when his high school basketball team and state championship dreams are crushed under the weight of unexpected news. When the largest manufacturing plant shuts down and hundreds of families leave their town, John questions how he and his family will face an uncertain future. After reluctantly agreeing to coach cross-country, John and his wife, Amy, meet an aspiring athlete who's pushing her limits on a journey toward discovery. Inspired by the words and prayers of a new-found friend, John becomes the least likely coach helping the least likely runner attempt the impossible in the biggest race of the year. 
                                            </p> <br/>
                                            <p className="movie-par " id="starring"> <strong className="strong"> Starring: </strong> Elizabeth Becka, Alex Kendrick, Ben Davies, Priscilla C. Shirer </p> <br/>
                                            <p className="movie-par" id="genre"> <strong className="strong"> Genres: </strong> Drama </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Overcomer" src="https://www.youtube.com/embed/BGyieGVn4P4" className="movie-trailer" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie2}>
                                <img src={movie2} className="movie-image" alt="It: Chapter Two" />
                                <h3 className="movie-title"> It: Chapter Two </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class2}} id="movie2">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={movie2} className="popup-movie-image" alt="It: Chapter Two" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"  id="movie-header2"> It: Chapter Two </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> R </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 2 h 49 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par2">
                                                27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call. 
                                            </p> <br />
                                            <p className="movie-par" id="starring2"> <strong> Starring: </strong> 	James McAvoy, Jessica Chastain, Jay Ryan, Bill Hader, Isaiah Mustafa, James Ransone </p> <br/>
                                            <p className="movie-par" id="genre2"> <strong> Genres: </strong> Horror, Thriller </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="It: Chapter Two" src="https://www.youtube.com/embed/zqUopiAYdRg" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie3}>
                                <img src={movie3} className="movie-image" alt="Scary Stories to Tell in the Dark" />
                                <h3 className="movie-title"> Scary Stories to Tell in the Dark</h3>
                            </div>

                            <div className="movie-popup" style={{display: this.state.class3}} id="movie3">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={movie3} className="popup-movie-image" alt="Scary Stories to Tell in the Dark" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"> Scary Stories to Tell in the Dark </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG-13 </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 50 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par"> 
                                                It's 1968 in America. Change is blowing in the wind...but seemingly far removed from the unrest in the cities is the small town of Mill Valley where for generations, the shadow of the Bellows family has loomed large. It is in their mansion on the edge of town that Sarah, a young girl with horrible secrets, turned her tortured life into a series of scary stories, written in a book that has transcended time-stories that have a way of becoming all too real for a group of teenagers who discover Sarah's terrifying tome.    
                                            </p> <br/>
                                            <p className="movie-par"> <strong> Starring: </strong> Zoe Colletti, Michael Garza, Austin Abrams, Gabriel Rush, Austin Zajur, Natalie Ganzhorn </p> <br />
                                            <p className="movie-par"> <strong> Genres: </strong> Horror </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Scary Stories to Tell in the Dark" src="https://www.youtube.com/embed/N3J2k3Nhicw" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie4}>
                                <img src={lionKing} className="movie-image" alt="The Lion King" />
                                <h3 className="movie-title"> The Lion King </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class4}} id="movie4">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src={lionKing} className="popup-movie-image" alt="The Lion King" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"> The Lion King </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 58 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par"> Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother and former heir to the throne has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his. </p> <br/>
                                            <p className="movie-par"> <strong> Starring: </strong> 	Donald Glover, Beyonce Knowles, James Earl Jones, Chiwetel Ejiofor, Alfre Woodard, John Oliver </p> <br/>
                                            <p className="movie-par"> <strong> Genres: </strong> Adventure, Family, Animation </p> <br/> <br/>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="The Lion King" src="https://www.youtube.com/embed/4CbLXeGSDxg" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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