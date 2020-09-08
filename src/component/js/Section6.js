import React from 'react'
import '../css/Section6.css'

function Section6() {
    return (
        <React.Fragment>
            <section className="scrollspy" id="section5">
                    <div className="section-6">
                        <h4>GET IN TOUCH</h4>
                        <div className="row contactus">

                            <div className="col s12 m5 l5 map-location">
                                <iframe  title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9051719433132!2d77.6396944!3d12.9779167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQwLjUiTiA3N8KwMzgnMjIuOSJF!5e0!3m2!1sen!2sin!4v1591103125788!5m2!1sen!2sin" ></iframe>
                                 <br/><br/>
                                 <h5>Chattel Technologies</h5>
                                 <p>39, NGEF Ln, Binnamangala, 1st Stage, <br/>Indiranagar, Bengaluru, Karnataka-560038, India</p>
                            </div>
                            <div className="col  s12 offset-m1 m6 offset-l1 l5 contact-form ">
                                <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/d3dileep@gmail.com" method="post">
                                    <div class="row">
                                        <div class="input-field col offset-s1 s10 offset-s1">
                                          <input id="name" type="text" class="validate"/>
                                          <label for="name" className="label">Name</label>
                                        </div>
                                        <div class="input-field col offset-s1 s10 offset-s1">
                                            <input id="email" type="email" class="validate"/>
                                            <label for="email">Email</label>
                                          </div>
                                          <div class="input-field col offset-s1 s10 offset-s1">
                                            <input id="subject" type="text" class="validate"/>
                                            <label for="subject">Subject</label>
                                          </div>
                                          <div class=" col offset-s1 s10 offset-s1">
                                                <textarea id="message" placeholder="Message"></textarea>
                                           </div>                                                                     
                                          <div class=" col offset-s1 s10 offset-s1">
                                            <center> <button class="btn waves-effect waves-light  amber btn-large" type="submit" name="action">Send Message</button></center>
                                          </div>
                                          

                                      </div>

                                 </form>
                                
                            </div>
                        </div>
                    </div>


            </section>
        </React.Fragment>
    
    )
}

export default Section6
