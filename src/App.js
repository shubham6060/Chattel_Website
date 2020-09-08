import React from 'react';

import {Route,BrowserRouter} from 'react-router-dom'


import Navbar from './component/js/Navbar'
import Footer from './component/js/Footer'
import Home from './Router/Home'
import Service1 from './Router/Service1'
import Service2 from './Router/Service2'
import Service3 from './Router/Service3'
import Learning from './Router/Learning'
import OtherNavbar from './component/js/OtherNavbar'

import './App.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/learning">
          <OtherNavbar/>
          <Learning/>
          <Footer/>
        </Route>
        <Route path="/mlservices">
          <OtherNavbar />
          <Service1/>
          <Footer/>
       

        </Route>
        <Route path="/appservices">
          <OtherNavbar />
          <Service2/>
          <Footer/>
         
        </Route>
        <Route path="/financialservices">
          <OtherNavbar />
          <Service3/>
          <Footer/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
