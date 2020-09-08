import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Section1.css'


function Section1() {
    return (
        <React.Fragment>
        
        <section>
        <div className="section-1">
            <h4>Business Insights</h4>
            <h5>Driven By Artifical Intelligence</h5>
            <p id="p-child-1">90% of all data in the world was created over the last decade. It is humanly impossible to collect all relevant data real time without exceptions. However, considering relevant information from all available information in order to make prudent investment decisions has proven to be profitable.</p>
            <div className="container-fluid card-desc">
                        <div className="row  ">
                            <div className="col m6 s12 l4">
                                <Link to="/mlservices"><div className="section-1-nav"><p>Chattel Intelligent services</p></div></Link>
                            </div>

                            <div className="col m6 s12 l4">
                            <Link to="/appservices"><div className="section-1-nav"><p>Chattel App Development services</p></div></Link>
                                
                            </div>
                            <div className="col  offset-m3 m6 s12 l4">
                                <Link to="/financialservices"><div className="section-1-nav"><p>Chattel Financial Services</p></div></Link>
                            </div>


                        </div>
            </div>
            
        </div>
        </section>
        
        </React.Fragment>        
    )
}

export default Section1
