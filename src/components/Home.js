import React from 'react';
import styled from 'styled-components';
import flippy from '../assets/flippy.png';

const Styles = styled.div
`
.col {
    height: 85vh;
    width: auto;
}
.mainImage {
    height: 100%;
}
`

const Home = () => {
    return ( 
        <Styles>
            <div className='section'>
            <div className='col'>
            <img src={flippy} className='mainImage'></img>
            </div>

            </div>

        </Styles>
     );
}
 
export default Home;