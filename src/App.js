import React from 'react';
import Home from './Home';
import Business from './Business';
import Contact from './Contact';
import Footer from './Footer';
import Golf from './Golf';
import GoodSide from './GoodSide';
import GrenadaEvents from './GrenadaEvents';
import GrenadaLake from './GrenadaLake';
import GrenadaNews from './GrenadaNews';
import GrenadaTalks from './GrenadaTalks';
import GrownWoman from './GrownWoman';
import MovieTheater from './MovieTheater';
import Nav from './Nav';
import Restaurants from './Restaurants';
import RotaryClub from './RotaryClub';
import SportCenter from './SportCenter';
import GraceBaptist from './GraceBaptist';
import ElliotBaptist from './ElliotBaptist';
import Emmanuel from './Emmanuel';
import FirstBaptistChurch from './FirstBaptistChurch';
import BurningBush from './BurningBush';
import TurningPoint from './TurningPoint';
import Cbc from './Cbc';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/business" component={Business} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/golf-course" component={Golf} />
                    <Route path="/the-good-side" component={GoodSide} />
                    <Route path="/grenada-events" component={GrenadaEvents} />
                    <Route path="/grenada-lake" component={GrenadaLake} />
                    <Route path="/grenada-news" component={GrenadaNews} />
                    <Route path="/grenada-talks" component={GrenadaTalks} />
                    <Route path="/grown-woman" component={GrownWoman} />
                    <Route path="/movie-theater" component={MovieTheater} />
                    <Route path="/restaurants" component={Restaurants} />
                    <Route path="/rotary-club" component={RotaryClub} />
                    <Route path="/sport-center" component={SportCenter} />
                    <Route path="/grace-baptist" component={GraceBaptist} />
                    <Route path="/elliot-baptist-church" component={ElliotBaptist} />
                    <Route path="/emmanuel-baptist" component={Emmanuel} />
                    <Route path="/first-baptist-church" component={FirstBaptistChurch} />
                    <Route path="/burning-bush" component={BurningBush} />
                    <Route path="/turning-point" component={TurningPoint} />
                    <Route path="/central-baptist-church" component={Cbc} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;