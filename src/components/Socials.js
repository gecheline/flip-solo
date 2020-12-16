import React from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import bgimage from '../assets/Bgstars2.png';


const Styles = styled.div
`
.news-section {
    height: 50vw;
    width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding-top: 5%;
    margin-bottom: 2%;
    margin-top: 2%;
    // border:
}


@media (max-width: 992px) {
    .news-section {
        height: 75vh;
        width: 100vw;
        margin-bottom: 2.5%;
    }
}
`

const Socials = () => {
    return (
        <Styles>
            <Parallax bgImage={bgimage} strength={300} className='customBg'>
            <div className='news-section' id='socials'>
                <iframe 
                allowfullscreen id="wallsio-iframe" src="https://walls.io/a5khc?nobackground=1&amp;show_header=0" 
                style={{border:0, height: '100%', width:'100%', marginTop: '5rem'}} loading="lazy" title="My social wall">

                </iframe>

            </div>
            </Parallax>
        </Styles>
      );
}
 
export default Socials;