import React from 'react'
import '../component/css/Service2.css'
function Service2() {
    return (
       <React.Fragment>
           <section>
           <div className="container service2">
                
                <h4 className="center">CHATTEL APP DEVELOPMENT</h4><br/><br/><br/>

                <div class="row app-desc">
                    <div className="col s12 l5">
                        <img src={require('../component/static/web.jpeg')} width="100%" alt="website-development"/>
                    </div>
                    <div className="col s12 offset-l1 l5">
                        <h5>Website Development</h5><br/><br/>
                        <p>1.HTML,CSS,JS,Jquery</p><br/>
                        <p>2.Optimize and Scalable</p><br/>
                        <p>3.Reusable and Responsive</p><br/>
                    </div>
                </div><br/><br/>

                <div class="row app-desc">
                    <div className="col s12 l5">
                        <img src={require('../component/static/app-dev.jpg')} width="100%"  alt="app-development"/>
                    </div>
                    <div className="col s12 offset-l1 l5">
                        <h5>Android App Development</h5><br/><br/>
                        <p>1.ReactNative,Kotlin,Java,Flutter</p><br/>
                        <p>2.Optimize and Scalable</p><br/>
                        <p>3.Reusable and Responsive</p><br/>
                    </div>
                </div><br/><br/>

                <div class="row app-desc">
                    <div className="col s12 l5">
                        <img src={require('../component/static/app-dev.jpg')} width="100%"  alt="software-development"/>
                    </div>
                    <div className="col s12 offset-l1 l5">
                        <h5>Software Development</h5><br/><br/>
                        <p>1.HTML,CSS,JS,Jquery</p><br/>
                        <p>2.Optimize and Scalable</p><br/>
                        <p>3.Reusable and Responsive</p><br/>
                      
                    </div>
                </div><br/><br/>
                
            </div>
        </section>
       </React.Fragment>
    )
}

export default Service2
