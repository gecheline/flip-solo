import React from 'react';
import Home from './components/Home';
import TV from './components/TV'
import Radio from './components/Radio'
// import About from './components/About';
import Socials from './components/Socials';


const AllSections = ({ element }) => {
    return (
        <div ref={element}>
            <Home />
            {/* <Radio /> */}
            {/* <TV /> */}
            <Socials />
            {/* <About />    */}  
        </div>
      );
}
 
export default AllSections;