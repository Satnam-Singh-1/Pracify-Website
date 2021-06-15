import React, { Component } from 'react';
import "./style.css";



class Box4 extends Component {
    
    render() {
        return (
            <div className="maindivbox4">
                <div className="woman-in-brown-jacket-and-black-shirt-3484683">
                     <img src={process.env.PUBLIC_URL + "/woman.jpg"} alt = "Image is here" className = "woman"></img>
                </div>
                <div className ="Jane-Doe"> Jane Doe</div>
                <div className ="Thank-you-for-all-the-amazing-produce-and-products-you-deliver-each-week-you-make-my-life-so-easy-an-bring-goodness-into-our-family-eating-Ive-been-roasting-a-lot-of-brussel-sprouts-and"> Thank you for all the amazing produce and products you deliver each week…
you make my life so easy an bring goodness into our family eating. 
I’ve been roasting a lot of brussel sprouts and</div>
                <div className ="Subscribe-to-Our-Newsletter">Subscribe to Our Newsletter</div>
                <div className ="Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua3 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua.</div>



            </div>
        )
    }
}

export default Box4