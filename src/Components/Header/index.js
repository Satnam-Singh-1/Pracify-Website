
import React, { Component } from 'react';
import "./style.css"
class Header extends Component {
    render() {
        return (
            <div className="mainheader">
                <div className="navbar1">
                    <div className="organicdiv"> organic </div>
                    <ul className="navbar">
                        <li className="home">Home</li>
                        <li className="products">Products</li>
                        <li className="blog">Blog</li>
                        <li className="aboutus">About Us</li>
                        <button className="contact">Contact</button>
                    </ul>

                </div>
                <div className="box1 main">
                    <div className="Healthy-life-with"> Healthy life with</div>
                    <div className=" Nature-Organic">Nature Organic</div>
                    < div className="Vegetables-are-the-edible-parts-of-a-plant-that-is-used-in-cooking-or-can-be-eaten-now">Vegetables are the edible parts of a plant
                        that is used in cooking or can be eaten now.</div>
                    <button className="Explore-Now">Explore Now</button>
                </div>
            </div>
        )
    }
}

export default Header