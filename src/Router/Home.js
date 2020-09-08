import React from 'react'
import Section1 from '../component/js/Section1'
import Section2 from '../component/js/Section2'
import Section3 from '../component/js/Section3'
//import Section4 from '../component/js/Section4'
import Section5 from '../component/js/Section5'
import Section6 from '../component/js/Section6'
import Footer from '../component/js/Footer'


function Home() {
    return (
        <React.Fragment>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section5/>
            <Section6/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
