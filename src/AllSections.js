import React from 'react';
import Home from './components/Home';
import Video from './components/Video'


const AllSections = ({ element }) => {
    return (
        <div ref={element}>
            <Home />
            <Video />
        </div>
      );
}
 
export default AllSections;