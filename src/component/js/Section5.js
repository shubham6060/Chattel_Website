import React from 'react'
import '../css/Section5.css'

function Section5() {
    return (
        <React.Fragment>
            
            <section className="scrollspy" id="section4">
            
            <div className="section-5">
               
                <h4>ABOUT US</h4>
                
                <div className="row aboutus-div">
                    <div className="col  l4">
                        <div className="aboutus">
                            <h5>Curation</h5>
                            <p>
                            We are a "event prone" knowledge gathering and curating approach, discovering a method of madness and developing perspectives that you can trust. We collect and curate relevant data from a wide range of sources.
                            
                            </p>
                        </div>
                    </div>
                    <div className="col l4">
                        <div className="aboutus">
                            <h5>Analytics</h5>
                            <p>
                            We take complete, and efficient advantage of using Supervised and Unsupervised Machine Learning algorithms to continually learn from historical data, identify patterns and trends, and apply real-time intelligence.

                            </p>
                        </div>
                    </div>
                    <div className="col l4">
                        <div className="aboutus">
                            <h5>Insights</h5>
                            <p>
                            
                            We produce investor perception reports that affect markets predictably; make it worthwhile to interpret economic and market perceptions to make smarter and more informed investment decisions.
                            
                            </p>
                        </div>
                    </div>


                </div>



            </div>
            </section>
           

        </React.Fragment>
    )
}

export default Section5
