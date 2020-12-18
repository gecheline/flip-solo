import React from 'react';
import styled from 'styled-components';
import flippy from '../assets/flippy.png';

const Styles = styled.div
`
.section{
    margin-top: 0px;
    // font-size: 2rem;
}
.mainImage {
    width:auto;
    height:auto;
    max-height: 75vh;
    max-width: 100%;
    margin-top: 5rem;
    margin-bottom: 2rem;
}
`

const Home = () => {
    return ( 
        <Styles>
            <div className='section' id='home'>
            <div className='col'>
            <img src={flippy} className='mainImage'></img>
            </div>
            <div className='col'>
            <blockquote 
                    // style={{borderLeft: '3px solid #ac4684'}}
                    >
                    <p>
                    <em>I am a musician with passion, joy and (according to my therapist) a good sense of humor.</em>
                    </p>
                    <p style={{fontSize: '0.9em', textAlign: 'right', marginRight: '5%'}}>
                        — Flip, bio (2020)</p>
                    </blockquote>
            </div>
            </div>

        </Styles>
     );
}
 
export default Home;