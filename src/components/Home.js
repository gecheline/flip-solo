import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import flippy1 from '../assets/ps_street.png';
import flippy2 from '../assets/ps_city.png';
import flippy3 from '../assets/ps_cityhall.png';

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
// The home section now will be a roller choice for the others: music live merch (no navbar here)
const Home = () => {
    return ( 
        <Styles>
            <div className='section' id='home'>
                <Slider className='center'
                        dots = {false}
                        infinite = {true}
                        speed = {200}
                        arrows = {true}
                        slidesToShow = {3}
                        slidesToScroll = {1}
                        centerMode = {true}
                        centerPadding = '5%'
                        >
                        <div>
                        <img src={flippy1} 
                        />
                        </div>
                        <div>
                        <img src={flippy2}/>
                        </div>
                        <div>
                        <img src={flippy3}/>
                        </div>
                        </Slider>
            </div>

        </Styles>
     );
}
 
export default Home;