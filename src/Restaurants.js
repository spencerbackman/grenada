import React from 'react';

class Restaurants extends React.Component {
    openTz = () => {

    }
    closeTz = () => {

    }
    openSpencers = () => {

    }
    closeSpencers = () => {
        
    }
    openPaps = () => {

    }
    closePaps = () => {

    }
    render() {
        return (
            <div className="restaurant-page-wrapper">
                <div id="top-anchor" style={{position: 'absolute', top: 0, left: 0}}></div>

                <div className="top-container">
                    <h1 className="header ml2"> Restaurants </h1>
                    <div className="business-container">
                        <div className="box">
                            <img className="partner-logo" src="images/T&ZS.png" alt="T&Z Wings" />
                            <div className="popup-container">
                            <h2 className="header2" onClick={this.openTz}> View Menu </h2>
                            </div>
                            <iframe title="vimeo-player T&Z Wings" src="https://player.vimeo.com/video/310376432" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="popup" id="tz-popup">
                        <div className="inner-popup">
                            <div className="popupCloseButton" onClick={this.closeTz}>X</div>
                            <h2 className="header"> T&Z's WINGS </h2>
                            <div className="row">
                            <div className="column">
                                <h3 className="header3"> Hours of Operation: </h3>
                                <p className="par"> Monday - Thursday: 10 am - 9 pm </p>
                                <p className="par"> Friday & Saturday: 10 am - 10 pm </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Wings </h3>
                                <p className="par"> Cajun, Honeygold, Cajun, Greek, Sweet & Sour, Extreme, Ranch, Hot Lemon Pepper, Hot Sweet Garlic, BBQ, Sweet Garlic, Chilli Lime, Traditional, Bacon Cheddar Ranch, Honey Hot, Lemon Pepper </p>
                                <p className="par"> Served with fries or carrots & celery </p>
                                <p className="par"> 7pc wing $5.50 Combo $6.99 </p>
                                <p className="par"> 10pc wing $8.50 Combo $9.99 </p>
                                <p className="par"> 16pc wing $13.99 Combo $15.99 </p>
                                <p className="par"> 24pc wing $19.99 Combo $23.99 </p>
                                <p className="par"> Burger & Wing Combo $11.99 </p>
                                <p className="par"> Side Salad & Wing $8.99 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Burgers (+ $0.25 Cheese) </h3>
                                <p className="par"> Hamburger $3.75 Combo $6.25 </p>
                                <p className="par"> Double Burger $5.00 Combo $7.25 </p>
                                <p className="par"> Bacon Burger $5.00 Combo $7.25 </p>
                                <p className="par"> Double Bacon Burger $6.00 Combo $8.50 </p>
                                <p className="par"> Triple Burger $7.00 Combo $9.50 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Chicken Strips </h3>
                                <p className="par"> 3pc $4.50 Combo $6.99 </p>
                                <p className="par"> 5pc $6.50 Combo $8.99 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Sandwiches </h3>
                                <p className="par"> Grilled or Fried Chicken </p>
                                <p className="par"> $3.99 Combo $6.25 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Polish </h3>
                                <p className="par"> Bell peppers & Onions </p>
                                <p className="par"> $3.00 Combo $4.99 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Salads </h3>
                                <p className="par"> Grilled Chicken $6.99 </p>
                                <p className="par"> Garen $5.99 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Wraps </h3>
                                <p className="par"> Grilled Chicken $5.50 <br/> <i> Lettuce, Tomatoes, Cheddar Cheese, and House Grilled Chicken </i> </p>
                                <p className="par"> Beef Wrap $5.50  <br/> <i> Lettuce, Tomatoes, Cheddar Cheese, and Seasoned Ground Beef </i> </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Turkey Burgers </h3>
                                <p className="par"> Turkey Burger $3.99 Combo $6.75 </p>
                                <p className="par"> Turkey Burger & Side Salad $6.75 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Sides </h3>
                                <h4 className="header4"> Fries Small $1.69 Large $1.99 </h4>
                                <p className="par"> Carrots & Celery $1.99 </p>
                                <p className="par"> Side Salad $2.50 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Kidz Menu </h3>
                                <p className="par"> Jr. Burger $4.99 (+ $0.25 cheese) </p>
                                <p className="par"> Chicken Strips(2) $4.99 </p>
                                <p className="par"> 5 Wings $5.99 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Drinks </h3>
                                <p className="par"> Small $1.25 </p>
                                <p className="par"> Large $1.75 </p>
                                <p className="par"> Coke, Sprite, Dr. Pepper, Lemonade, Fruit Punch, Tea, and In-House Tropical Drinks </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="box">
                            <img className="partner-logo" src="images/spencers.png" alt="Spencer's" />
                            <div className="popup-container">
                                <h2 className="header2" onClick={this.openSpencers}> View Menu </h2>
                            </div>
                            <iframe title="vimeo-player Spencer's" src="https://player.vimeo.com/video/257173453" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="popup" id="spencer-popup">
                        <div className="inner-popup">
                            <div className="popupCloseButton" onclick={this.closeSpencers}>X</div>
                            <h2 className="header"> Spencer's Dairy Kream Menu </h2>
                            <div className="row">
                            <div className="column">
                                <h3 className="header3"> Sandwiches </h3>
                                <p className="par"> Spencer Burger $3.00 </p>
                                <p className="par"> Spencer Cheeseburger $3.25 </p>
                                <p className="par"> Spencer Double Burger $4.25 </p>
                                <p className="par"> Spencer Double Cheeseburger $4.75 </p>
                                <p className="par"> Spencer Triple Burger $5.50 </p>
                                <p className="par"> Spencer Triple Cheeseburger $6.25 </p>
                                <p className="par"> Jumbo Hamburger $5.75 </p>
                                <p className="par"> Jumbo Cheeseburger $6.00 </p>
                                <p className="par"> Add Bacon $0.75 </p>
                                <p className="par"> Add Chili $0.75 </p>
                                <p className="par"> Extra Cheese $0.50 </p>
                                <p className="par"> B.L.T $3.75 </p>
                                <p className="par"> Philly Steak $5.00 </p>
                                <p className="par"> Chicken Philly $5.00 </p>
                                <p className="par"> Grilled Chicken $4.75 </p>
                                <p className="par"> Buffalo Fried Chicken $4.00 </p>
                                <p className="par"> Grilled Cheese $2.50 </p>
                                <p className="par"> Ham & Cheese $3.25 </p>
                                <p className="par"> Chicken Strips $4.25 </p>
                                <p className="par"> Hot Dog $1.75 </p>
                                <p className="par"> Kraut Dog $2.25 </p>
                                <p className="par"> Chilli Cheese Dog $2.75 </p>
                                <p className="par"> Corn Dog </p>
                                <p className="par"> Reg. $2.25 </p>
                                <p className="par"> Foot Long $3.50 </p>
                                <p className="par"> Chicken Nuggets </p>
                                <p className="par"> 4pcs $2.00 </p>
                                <p className="par"> 7pcs $3.00 </p>
                                <p className="par"> 10pcs $4.00 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Sides </h3>
                                <p className="par"> French Fries </p>
                                <p className="par"> Small $1.50 </p>
                                <p className="par"> Large $2.00 </p>
                                <p className="par"> Chilli Cheese Fries $3.50 </p>
                                <p className="par"> Philly Fries </p>
                                <p className="par"> Beef $6.50 </p>
                                <p className="par"> Chicken $6.50 </p>
                                <p className="par"> Onion Rings $3.75 </p>
                                <p className="par"> Cajun Fries </p>
                                <p className="par"> Small $1.75 </p>
                                <p className="par"> Larger $2.25 </p>
                                <p className="par"> Homemade Nachos </p>
                                <p className="par"> Cheese $4.00 </p>
                                <p className="par"> Beef $6.25 </p>
                                <p className="par"> Chicken $6.25 </p>
                                <p className="par"> Cheese Sticks $3.75 </p>
                                <p className="par"> Pizza Sticks $1.50 </p>
                            </div>
                            <div className="column">
                                <h3 className="header3"> Shakes </h3>
                                <p className="par"> Small $2.75 Large $3.50 </p>
                                <p className="par"> <strong> MALTS ADD $0.50 </strong> </p>
                                <p className="par"> Vanilla, Chocolate, Pineapple, Banana, Peach, Strawberry, Blackberry, Butterscotch, Cherry, Raspberry, Blueberry, Peanut Butter </p>
                                <p className="par"> Banana Split $4.50 </p>
                                <p className="par"> Parfaits $4.00 </p>
                                <p className="par"> Peanut Butter Cup, Strawberry Short Cake, Hot Fudge Brownie, Banana Royale, Turtle Dirt Sunday Vanilla Ice Cream, Oreo Cookie Chunks & Gummie Worms  $3.00 </p>
                                <h3 className="header3"> Sundaes </h3>
                                <p className="par"> Small $2.75 Large $3.50 </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="box">
                            <img className="partner-logo" src="images/Paps+Logo1.png" alt="Pap's" />
                            <div className="popup-container">
                            <p className="header2" onClick={this.openPaps}> View Menu </p>
                            </div>
                            <iframe title="vimeo-player Pap's Leigh Ann" src="https://player.vimeo.com/video/323557903" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="popup" id="paps-popup">
                        <div className="inner-popup">
                            <div className="popupCloseButton" onClick={this.closePaps}>X</div>
                            <img src="images/Paps_menu.png" alt="Pap's Grenada Mississippi Menu" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Restaurants;