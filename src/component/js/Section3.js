import React from 'react'
import '../css/Section3.css'

function Section3() {







    return (
        <React.Fragment>

            <section className="scrollspy" id="section3">

                <div className="section-3">

                    <h4>CHATELL CERTIFICATIONS</h4>
                    <h5>Certifications Courses we Provide</h5>
                    <div className="row certification">

                        <div className="col s12 offset-l1 l5 container1">
                            
                            <img src={require('../static/internship.jpg')} alt="internship" className="image" />
                            <div className="overlay">
                                <div className="text">Internship</div>
                            </div>
                        </div>

                        <div className="col s12 l5 container1">
                            
                            <img src={require('../static/certification.png')} alt="certification" className="image" />
                            <div className="overlay">
                                <div className="text">Certification</div>
                            </div>
                        </div>

                        <div className="col s12 offset-l1 l5 container1">
                            <img src={require('../static/work-experience.jpg')} alt="workexperience" className="image" />
                            <div className="overlay">
                                <div className="text">Work Experience</div>
                            </div>
                        </div>

                        <div className="col   s12 l5 container1">
                            <img src={require('../static/live-project.png')} alt="liveproject" className="image" />
                            <div className="overlay">
                                <div className="text">Live Projects</div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </React.Fragment>
    )
}

export default Section3
