import React from 'react'
import '../css/Footer.css'
import { FaFacebook } from "react-icons/fa";
import {FaLinkedin } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaPinterest} from "react-icons/fa";



function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="footer">
                        <div className="row">
                                <div className="col s12 m12 l4">
                                    <h5>Chattel</h5>
                                    <p>With the passing decade, world market will be virtual and bots will do the business. Are you eqipped with latest technological tool?</p>

                                </div>
                                <div className="col s12  m12 l3">
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <li><a href="/">Home</a></li><br/>
                                        <li><a  href="#section2">Chattel Learning</a></li><br/>
                                        <li><a  href="#section3">Chattel Learning</a></li><br/>
                                        <li><a  href="#section4">About us</a></li><br/>

                                    </ul>

                                </div>
                                <div className="col s12 m12 l2">
                                    <h5>Services </h5>
                                    <ul>
                                        <li>Chattel AI</li><br/>
                                        <li>Chattel Stock</li><br/>
                                        <li>Chattel News</li><br/>
                                        <li>Trading Bot</li><br/>

                                    </ul>

                                </div>
                                <div className="col s12 m12 l3">
                                        <h5>Contact Info</h5>
                                        <ul>
                                        <li><b>Bangalore</b></li>
                                        <li><a>(+91)9980-576898</a></li><br/>
                                        <li><a>help@chattel.in</a></li><br/>
                                        <li><FaFacebook size="1.5rem"/>  <FaLinkedin size="1.5rem"/>  <FaInstagram size="1.5rem"/>  < FaPinterest size="1.5rem"/></li>
                                        </ul>
                                       
                                </div>


                        </div>

                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
