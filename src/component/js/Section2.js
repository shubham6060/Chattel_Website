import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Section2.css'
function Section2() {
    return (
        <React.Fragment>
            
            <section className="scrollspy" id="section2">
                <div className="section-2">
                    <h4>CHATTEL LEARNING</h4>
                    <h5>AN INVESTMENT IN KNOWLEDGE PAYS THE BEST INTEREST</h5>
                    <div className="row chattel-learning">
                        <div className="col offset-m1 m5 l3">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light ">
                                    <img  src={require('../static/ai-ml.jpg') } alt="ailearning" height="200"/>
                                </div>
                                    <div className="card-content card-content-styling">
                                        <span className="card-title" id="chattel-tech-1">ML and AI Courses</span>
                                        <p><Link to="/learning">Go to the Courses</Link></p>
                                    </div>
                                  
                                </div>

                            </div>

                            <div className="col offset-m1 m5  l3">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img src={require('../static/app-dev.jpg') } alt="applearning" height="200"/>
                                </div>
                                    <div className="card-content card-content-styling">
                                        <span className="card-title " id="chattel-tech-2">App Development Courses</span>
                                        <p><Link to="/learning">Go to the Courses</Link></p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col m5 offset-m1 l3">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img src={require('../static/programming.jpg') } alt="languagelearning" height="200"/>
                                </div>
                                    <div className="card-content card-content-styling">
                                        <span className="card-title" id="chattel-tech-3">Programming Languages Courses</span>
                                        <p><Link to="/learning">Go to the Courses</Link ></p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col m5 offset-m1 l3">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img src={require('../static/project-meeting.jpg') } alt="projectmentoring" height="200"/>
                                </div>
                                    <div className="card-content card-content-styling">
                                        <span className="card-title " id="chattel-tech-4">Academic Project Mentoring</span>
                                        <p><Link to="/learning">Go to the Courses</Link></p>
                                    </div>
                                  
                                </div>
                            </div>

                        </div>
                    </div>
            </section>

        </React.Fragment>
    )
}

export default Section2
