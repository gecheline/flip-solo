import React from 'react';
import Home from './components/Home';
import Live from './components/Live'
import Radio from './components/Radio'
// import About from './components/About';
import Socials from './components/Socials';


const AllSections = ({ element }) => {
    return (
        <div ref={element}>
            <Home />
            <Radio />
            <Live />
            <Socials />
            {/* <About />    */}  
        </div>
      );
}
 
export default AllSections;