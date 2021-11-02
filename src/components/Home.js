import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import '../../node_modules/react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import flippy1 from '../assets/home1.jpg';
import flippy2 from '../assets/home2.jpg';
import flippy3 from '../assets/home3.jpg';
import flippy4 from '../assets/home4.jpg';

const Styles = styled.div
`
img {
    height: auto;
    margin-top: 25px;
    margin-bottom: 25px;
}

button {
    position: absolute;
    font-family: 'Gugi', cursive;
    background-color: rgba(255,255,255,0.25);
    color: white; // #f5d2b5;
    font-size: 5rem;
    padding: 12px 24px;
    border: 2px solid white;
    cursor: pointer;
    border-radius: 5px;
}

#music {
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

#live {
    top: 60%;
    left: 70%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

#merch {
    top: 30%;
    left: 70%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

#contact {
    top: 70%;
    left: 75%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

@media only screen and (min-width: 0px) and (max-width: 768px) {
    img {
        width: 100vw;
    }
}

@media only screen and (min-width: 768px) {
    img {
        width: 50vw;
    }
}
`

const responsive = {
    0: { items: 1 },
    768: { items: 2 }
};

const items = [
    <div className='cover-item'>
        <img src={flippy1} />
        <button type="button" className='glow' id='music'>MUSIC</button>
    </div>,
    <div className='cover-item'>
        <img src={flippy2}/>
        <button type="button" className='glow' id='live'>LIVE</button>
    </div>,
    <div className='cover-item'>
        <img src={flippy4}/>
        <button type="button" className='glow' id='merch'>MERCH</button>
    </div>,
    <div className='cover-item'>
        <img src={flippy3}/>
        <button type="button" className='glow' id='contact'>CONTACT</button>
    </div>
];
// The home section now will be a roller choice for the others: music live merch (no navbar here)
const Home = () => {
    return ( 
        <Styles>
        <AliceCarousel
            autoPlay
            autoPlayStrategy="default"
            autoPlayInterval={2000}
            animationDuration={1000}
            animationType="slide"
            infinite
            touchTracking={true}
            disableButtonsControls
            disableDotsControls
            items={items}
            responsive={responsive}
        />
        </Styles>
     );
}
 
export default Home;