import React, { Component } from 'react'
import "./style.css"

class Subscribe extends Component {
    render() {
        return (
            <div className = "maindivSub">
                <form action = "noaciton.php" className=" form1">
                    <input type= "email" name = "MyEmail" placeholder= "Enter your email address" className = "email"></input>

                    <button className = "Subscribe">Subscribe</button>
                
        
                </form>
            </div>
        )
    }
}

export default Subscribe
