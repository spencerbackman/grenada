import React from 'react';
import './styles/css/movieTheater.css';
import { Helmet } from 'react-helmet';

class MovieTheater extends React.Component {
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
                <div className="closed-wrapper">
                    <p className="closed-text">
                        In compliance with local, state, and federal directives, Grenada Plaza Cinema is temporarily closed.  
                    </p>
                    <p className="closed-text">
                        They will be re-evaluating their opening date in early April.  Look for updates on their website plazacinemagrenada.com, facebook, and localgrenada.com.
                    </p>
                    <p className="closed-text">
                        Stay Safe!
                    </p>
                </div>

            </div> 
        )
    }
}

export default MovieTheater;