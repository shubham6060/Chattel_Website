import React from 'react'
import '../css/Navbar.css'
function Navbar() {
  return (
    <React.Fragment>
      <header>
        <div className="navbar-fixed">
          <nav className="navbar-div">
            
              <div className="nav-wrapper">
                <a href="/" className="brand-logo left"><img src={require('../static/CHATTEL_cc1.3ab5c936.png')} width="200" height="58" alt="company-logo"/></a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="/" className="nav-1">Services</a>
                  </li>
                  <li>
                    <a href="#section2"  className="nav-2" >Chattel Learnings</a>
                  </li>
                  <li>
                    <a href="#section3"  className="nav-2">Chattel Certifications</a>
                  </li>
                  <li>
                    <a href="#section4"  className="nav-2">About us</a>
                  </li>
                  <li>
                    <a href="#section5"  className="nav-2">Contact us</a>
                  </li>
                </ul>
              </div>
            
          </nav>
        </div>
        <ul className="sidenav" id="mobile-demo">
                <li>
                    <a href="/" id="nav-main" >Services</a>
                  </li>
                  <li>
                    <a href="#section2"  id="nav-section" >Chattel Learnings</a>
                  </li>
                  <li>
                    <a href="#section3"  id="nav-section" >Chattel Certifications</a>
                  </li>
                  <li>
                    <a href="#section4"  id="nav-section">About us</a>
                  </li>
                  <li>
                    <a href="#section5" id="nav-section" >Contact us</a>
                </li>
        </ul>

      </header>

    </React.Fragment>
  )
}

export default Navbar
