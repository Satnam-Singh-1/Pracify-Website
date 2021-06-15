import React, { Component } from 'react'
import "./style.css"
class Box5 extends Component {
    render() {
        return (
            <div>
                <div className='Read-Our-Blog'>Read Our Blog</div>
                <div className='Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqua'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</div>
                <div className = "Flex2">
                    <div className="Rectangle-31">
                    <div >
                     <img src={process.env.PUBLIC_URL + "/eucalyptus.png"} alt = "Image is here" className = "eucalyptus"></img>
                    </div>
                        <div className = "Blog-Post-One1">Blog Post One</div>
                        <div className = "Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod1">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed
 do eiusmod.</div>
 <a href ="/" className ="Read-More1">Read More</a>
                    </div>
                    <div className="Rectangle-32">
                    <div >
                     <img src={process.env.PUBLIC_URL + "/containers.png"} alt = "Image is here" className = "containers"></img>
                    </div>
                        <div className = "Blog-Post-One2">Blog Post One</div>
                        <div className = "Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod2">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed
 do eiusmod.</div>
 <a href ="/" className ="Read-More2">Read More</a>
                    </div>
                    <div className="Rectangle-33">
                    <div >
                     <img src={process.env.PUBLIC_URL + "/potted.png"} alt = "Image is here" className = "potted"></img>
                    </div>
                        <div className = "Blog-Post-One3">Blog Post One</div>
                        <div className = "Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-sed-do-eiusmod3">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed
 do eiusmod.</div>
 <a href ="/" className ="Read-More3">Read More</a>
                    </div> 
                 </div>
            </div>
        )
    }
}

export default Box5
