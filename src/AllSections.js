import React from 'react';
import Home from './components/Home';
import Video from './components/Video'
import Radio from './components/Radio'


const AllSections = ({ element }) => {
    return (
        <div ref={element}>
            <Home />
            <Radio />
        </div>
      );
}
 
export default AllSections;