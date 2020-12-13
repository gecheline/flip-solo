import React from 'react';
import Home from './components/Home';
import TV from './components/TV'
import Radio from './components/Radio'
import Socials from './components/Socials';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


const AllSections = ({ element }) => {
    return (
        <div ref={element}>
            <Home />
            <Radio />
            <TV />
            <Socials />      
        </div>
      );
}
 
export default AllSections;