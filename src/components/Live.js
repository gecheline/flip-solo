import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import bgimage from '../assets/live_bg.jpg';

const Styles = styled.div
`
.customBg{
    margin-top: 25px;
}
.section {
    height: 100vh;
    padding-bottom: 2em;
    background-color: transparent;
    color: white;
}

button {
    position: absolute;
    font-family: 'Gugi', cursive;
    background-color: rgba(255,255,255,0.01);
    color: white; // #f5d2b5;
    font-size: 5rem;
    padding: 12px 24px;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 5px;
}

#twitch {
    top: 40%;
    left: 70%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

#youtube {
    top: 60%;
    left: 70%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

`

const Live = () => {
    return (
        <Styles>

        <Parallax bgImage={bgimage} strength={300} className='customBg'>
            <div className='section' id='live'>
            <div className='col'>
                
            </div>
            <div className='col'>
                <button type="button" className='glow' id='twitch'>TWITCH.TV</button>
                <button type="button" className='glow' id='youtube'>YOUTUBE</button>
            </div>
            </div>
        </Parallax>
        </Styles>
    )
}

export default Live;
