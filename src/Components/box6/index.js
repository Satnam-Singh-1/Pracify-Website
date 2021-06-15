import React, { Component } from 'react'
import "./style.css"

class Box6 extends Component {
    render() {
        return (
            <div className="footer">
                <div className="maindivbox6">

                    <div className="organic">organic</div>
                    <div className="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor ">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor </div>
                    <div className="line"></div>
                    <div className="-Copyright-2020-Nature">© Copyright 2020 Nature</div>


                </div>
                <div className="mainbox7">
                    <div className="Information"> Information
                    <div className = "firstcol"><a href="/" className="About-Us1" >About Us</a>
                        <a href="/" className="Products1" >Products</a>
                        <a href="/" className="Contact-Us1" >Contact Us</a>
                        <a href="/" className="Terms-of-Service1" >Terms of Service</a>
                    </div>
                    <div className =" secondcol">
                        <a href="/" className="About-Us2" >About Us</a>
                        <a href="/" className="Products2" >Products</a>
                    </div>
                    </div>
                    <div className="Follow-Us">Follow Us
                        <div className = "handle">
                            <a href="/" className="facebook" >
                                <img src={process.env.PUBLIC_URL + "/facebook.png"} alt = "facebook logo" className = "facebook1"></img>
                            </a>
                            <a href="/" className="linkedin" >
                            <img src={process.env.PUBLIC_URL + "/linkedin.png"} alt = "linkedin logo" className = "linkedin1"></img>
                            </a>
                            <a href="/" className="twitter" >
                                <img src={process.env.PUBLIC_URL + "/twitter.png"} alt = "twitter logo" className = "twitter1"></img></a>
                            <a href="/" className="instagram" >
                                <img src={process.env.PUBLIC_URL + "/instagram.png"} alt = "instagram logo" className = "instagram1"></img>
                            </a>

                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default Box6
