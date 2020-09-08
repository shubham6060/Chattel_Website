import React from 'react'
import '../component/css/Learning.css'

function Learning() {
    return (
        <React.Fragment>
            
            <h4 className="learning-heading">Chattel Training Courses</h4><br/><br/>
            
            <section id="ml-courses">
                    <div className="container">
                            
                            
                            
                            <div className="row learning-desc">
                            <div className="col s12 l5">
                                <img src={require('../component/static/web.jpeg')}  width="100%" alt="ml-course"/>
                            </div>
                            <div className="col s12 offset-l1 l5">
                                <h5 >Machine Learning and Artificial Intelligent Courses</h5><br/><br/>
                                <p>1.HTML,CSS,JS,Jquery</p><br/>
                                <p>2.Optimize and Scalable</p><br/>
                                <p>3.Reusable and Responsive</p><br/>
                            </div>
                        </div>


                    </div>
            </section><br/><br/>

          
            <section id="app-courses">
                    <div className="container">
                            
                            <div className="row learning-desc">
                            <div className="col s12 l5">
                                <img src={require('../component/static/web.jpeg')} width="100%" alt="app-course"/>
                            </div>
                            <div className="col s12 offset-l1 l5">
                                <h5 >APP DEVELOPMENT COURSES</h5><br/><br/>
                                <p>1.HTML,CSS,JS,Jquery</p><br/>
                                <p>2.Optimize and Scalable</p><br/>
                                <p>3.Reusable and Responsive</p><br/>
                            </div>
                        </div>


                    </div>
            </section><br/><br/>

            
            <section id="language-courses">
                    <div className="container">

                            <div className="row learning-desc">
                            <div className="col s12 l5">
                                <img src={require('../component/static/web.jpeg')} width="100%" alt="language-course"/>
                            </div>
                            <div className="col s12 offset-l1 l5">
                                <h5 >Programming Language Courses</h5><br/><br/>
                                <p>1.HTML,CSS,JS,Jquery</p><br/>
                                <p>2.Optimize and Scalable</p><br/>
                                <p>3.Reusable and Responsive</p><br/>
                            </div>
                        </div>


                    </div>
            </section><br/><br/>

            
            <section id="project-mentoring">

                    <div className="container">

                            <div className="row learning-desc">
                            <div className="col s12 l5">
                                <img src={require('../component/static/web.jpeg')} width="100%" alt="project-mentoring"/>
                            </div>
                            <div className="col s12 offset-l1 l5">
                                <h5 >Project Mentoring</h5><br/><br/>
                                <p>1.HTML,CSS,JS,Jquery</p><br/>
                                <p>2.Optimize and Scalable</p><br/>
                                <p>3.Reusable and Responsive</p><br/>
                            </div>
                        </div>


                    </div>
            </section><br/><br/>


        </React.Fragment>
    )
}

export default Learning
