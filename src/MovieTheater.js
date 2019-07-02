import React from 'react';
import './styles/scss/movieTheater.scss';

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
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>
                <div className="movie-top-wrapper">
                    <img src="images/plaza-cinema.png" className="movie-background-image" alt="Plaza Cinema Movie Theater" />
                    <h1 className="movie-header ml2"> GRENADA <br/> PLAZA CINEMA </h1>
                    <a className="movie-link ml2" target="_blank" rel="noreferrer noopener" href="https://www.google.com/maps/place/Plaza+Cinema/@33.7747361,-89.8265739,17.08z/data=!4m5!3m4!1s0x8881cd3dbcf4a56f:0xd0cea15aa55242fa!8m2!3d33.7746075!4d-89.8244961">
                        1301-C Sunset Dr. Grenada, Ms
                    </a>
                    <a className="movie-link ml2" href="tel:6622267575"> 662.226.7575 </a>
                </div>
                <div className="movie-mid-wrapper">
                    <h2 className="movie-header2" id="playing"> Now Playing </h2>
                    <div className="line"></div>
                    <div className="playing-wrapper">
                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie}>
                                <img src="images/The_Secret_Life_of_Pets_2653.jpg" className="movie-image" alt="The Secret Life Of Pets 2" />
                                <h3 className="movie-header"> The Secret Life of Pets 2 </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class}} id="movie">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src="images/The_Secret_Life_of_Pets_2653.jpg" className="popup-movie-image" alt="The Secret Life of Pets 2" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3" id="movie-header"> The Secret Life of Pets 2 </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 26 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noopener noreferrer" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par"> Terrier Max (Patton Oswalt) is coping with some major life changes. His owner (Ellie Kemper) is now married and has a toddler, Liam. Max is so worried about protecting the boy that he develops a nervous tic. On a family trip to a farm, Max and mutt Duke (Eric Stonestreet) encounter canine-intolerant cows, hostile foxes and a terrifying turkey, all of which only elevates Max’s anxiety. Luckily, Max gets some guidance from veteran farm dog Rooster (Harrison Ford, making his animated-film debut),
                                                who pushes Max to ditch his neuroses, find his inner alpha, and give Liam a little more freedom. </p> <br/>
                                            <p className="movie-par " id="starring"> <strong className="strong"> Starring: </strong> Patton Oswalt, Eric Stonestreet, Kevin Hart, Jenny Slate, Ellie Kemper, Lake Bell</p> <br/>
                                            <p className="movie-par" id="genre"> <strong className="strong"> Genres: </strong> Adventure, Comedy, Animation </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="The Secret Life of Pets 2 Trailer" src="https://www.youtube.com/embed/UiKzUxLEH6k" className="movie-trailer" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie2}>
                                <img src="images/Shaft418.jpg" className="movie-image" alt="SHAFT" />
                                <h3 className="movie-header"> Shaft </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class2}} id="movie2">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src="images/Shaft418.jpg" className="popup-movie-image" alt="Shaft" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"  id="movie-header2"> Shaft </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> R </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 51 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par" id="movie-par2"> JJ, aka John Shaft Jr. (Usher), may be a cyber security expert with a degree from MIT, but to uncover the truth behind his best friend's untimely death, he needs an education only his dad can provide. Absent throughout JJ's youth, the legendary locked-and-loaded John Shaft (Jackson) agrees to help his progeny navigate Harlem's heroin-infested underbelly. And while JJ's own FBI analyst's badge may clash with his dad's trademark leather duster, there's no denying family. Besides, Shaft's got an
                                                agenda of his own, and a score to settle that's professional and personal. </p> <br />
                                            <p className="movie-par" id="starring2"> <strong> Starring: </strong> 	Jessie Usher, Samuel L. Jackson, Richard Roundtree, Alexandra Shipp, Regina Hall </p> <br/>
                                            <p className="movie-par" id="genre2"> <strong> Genres: </strong> Action, Crime </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Shaft Trailer" src="https://www.youtube.com/embed/lD41XdWcmbY" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie3}>
                                <img src="images/Men_in_Black_International973.jpg" className="movie-image" alt="Men in Black: International" />
                                <h3 className="movie-header"> Men in Black: International </h3>
                            </div>

                            <div className="movie-popup" style={{display: this.state.class3}} id="movie3">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src="images/Men_in_Black_International973.jpg" className="popup-movie-image" alt="Men in Black: International" />
                                        </div>
                                        <div className="movie-column">
                                            <h3 className="movie-header3"> Men in Black: International </h3>
                                            <div className="run-rating-row">
                                                <p className="run-rating"> PG-13 </p>
                                                <div className="seperator"></div>
                                                <p className="run-rating"> 1 h 55 m </p>
                                                <div className="seperator"></div>
                                                <a className="movie-link" target="_blank" rel="noreferrer noopener" href="https://boxoffice.diamondticketing.com/plazacinema/movies"> Buy Tickets </a>
                                            </div>
                                            <p className="movie-par"> The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization. </p> <br/>
                                            <p className="movie-par"> <strong> Starring: </strong> Chris Hemsworth, Tessa Thompson, Liam Neeson, Rebecca Ferguson, Emma Thompson, Rafe Spall </p> <br />
                                            <p className="movie-par"> <strong> Genres: </strong> Action, Comedy, Sci-Fi </p>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Men in Black Trailer" src="https://www.youtube.com/embed/BV-WEb2oxLk" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="movie-wrapper">
                            <div className="movie-container" onClick={this.openMovie4}>
                                <img src="images/Toy_Story_4560.jpg" className="movie-image" alt="Toy Story 4" />
                                <h3 className="movie-header"> Toy Story 4 </h3>
                            </div>
                            <div className="movie-popup" style={{display: this.state.class4}} id="movie4">
                                <div className="movie-popup-content">
                                    <div className="popupCloseButton" onClick={this.closeMovie}>X</div>
                                    <div className="movie-info-row">
                                        <div className="movie-column">
                                            <img src="images/Toy_Story_4560.jpg" className="popup-movie-image" alt="Toy Story 4" />
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
                                            <p className="movie-par"> 	Woody (voice of Tom Hanks) has always been confident about his place in the world, and that his priority is taking care of his kid, whether that’s Andy or Bonnie. So when Bonnie’s beloved new craft-project-turned-toy, Forky (voice of Tony Hale), declares himself as “trash” and not a toy, Woody takes it upon himself to show Forky why he should embrace being a toy. But when Bonnie takes the whole gang on her family’s road trip excursion, Woody ends up on an unexpected detour that includes a
                                                reunion with his long-lost friend Bo Peep (voice of Annie Potts). After years of being on her own, Bo’s adventurous spirit and life on the road belie her delicate porcelain exterior. As Woody and Bo realize they’re worlds apart when it comes to life as a toy, they soon come to find that’s the least of their worries. </p> <br/>
                                            <p className="movie-par"> <strong> Starring: </strong> Tom Hanks, Tim Allen, Joan Cusack, Tony Hale, Estelle Harris, Wallace Shawn </p> <br/>
                                            <p className="movie-par"> <strong> Genres: </strong> Adventure, Comedy, Animation </p> <br/> <br/>
                                        </div>
                                    </div>
                                    <div className="trailer-holder">
                                        <iframe title="Toy Story Trailer" src="https://www.youtube.com/embed/wmiIUN-7qhE" className="movie-trailer" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="movie-header2"> Ticket Pricing </h2>
                    <div className="movie-column">
                        <div className="movie-row padding10">
                            <p className="par"> Adults ~ <strong> $9.00 </strong> </p>
                            <p className="par"> Adults [3D] ~ <strong> $12.00 </strong> </p>
                            <p className="par"> Children (12 and under) ~ <strong> $7.00 </strong> </p>
                            <p className="par"> Children (12 and under) [3D] ~ <strong> $9.00 </strong> </p>
                        </div>
                        <p className="par padding30">
                            Ticket prices and showtimes are subject to change without notice. Must be 17 years of age or older when purchasing tickets for rated 'R' films. Identification will be required upon entry. All shows 5:00 PM and after are evening showtimes
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieTheater;