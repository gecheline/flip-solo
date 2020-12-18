import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Styles = styled.div
`
.pitch {
    // font-size: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
}

.info {
    background-color: #32327c;
    color: white;
    border-radius: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;

}

.info h1 {
    margin: 5px;
}

.youtube-player {
    width: 50vw;
    height: 28.125vw;
    margin: auto;
    padding: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

ul {
    margin: 1em;
    list-style-type: none;
    color: white;
}

a {
    text-decoration: none;
    color: #ac4684;
}

.expectations {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.expectations h1 {
    color: #32327c;
    margin 1em;
}


.expectations ul {
    margin 1em;
    color: black;
}


.icons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.icons svg{
    margin-right: 5em;
    margin-left: 5em;
    height: 5rem;
    margin-bottom: -5rem;

}
@media (max-width: 992px) {
    .info {
        width: 90vw;
    }
    .youtube-player {
        width: 90vw;
        height: 50.625vw;
    }

    .expectations {
        width: 95vw;
    }

    .icons svg{
        margin-right: 2em;
        margin-left: 2em;
    
    }

    @media (max-width: 768px) {   
        .icons svg{
            margin-right: 1em;
            margin-left: 1em;
        } 
  }
`
const iconSize = '5em'
const iconsColor = 'white'
const discord = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill={iconsColor} d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"/></svg>
const twitch = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={iconsColor} d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>
// const youtube = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="2.5em"><path fill={iconsColor} d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>

const TV = () => {
    return (
        <Styles>
        <div className='section tv' id='tv'>
            <div className='col'>
                <h1 style={{color: '#196495'}}>TV</h1>
            </div>
            <div className='col info'>
                <h1>Join the hoomin fam!</h1>
                <div className='icons'>
                <div><a href='https://twitch.tv/flipofficial' target="_blank" rel="noopener noreferrer">{twitch}</a></div>
                <h2><a href='https://twitch.tv/flipofficial' target="_blank" rel="noopener noreferrer">
                <motion.span style={{color: '#ac4684', textDecoration: 'none'}}
                            animate = {{opacity: [1., 0.5, 1.]}}
                            transition = {{duration: 0.1, yoyo: Infinity, repeatDelay: 1}}>twitch.tv/flipofficial</motion.span>
                    </a></h2>
                <div><a href='https://discord.com/invite/rwzb3Kb' target="_blank" rel="noopener noreferrer">{discord}</a></div>
                </div>

                <ul>
                    <li>TUE 3PM EST</li>
                    <li>THU 3PM EST</li>
                    <li>SAT 3PM EST</li>
                </ul>
                <p>For other streaming times and special sub perks join the <a href='https://discord.com/invite/rwzb3Kb' target="_blank" rel="noopener noreferrer">discord</a></p>
            </div>

            <div className='col pitch'>
            
                <p>
                    Join the ever-growing family of viewers on Fl!p's Twitch channel for unforgettable times with some of the kindest and coolest hoomins on the planet!
                </p>

                <div className='expectations'>
                <div>
                    <h1 style={{color: '#ac4684'}}>what to expect</h1>
                <ul>
                    <li>GOOD VIBES</li>
                    <li>LOOPS</li>
                    <li>ORIGINAL MUSIC & COVERS</li>
                    <li>PET CAMEOS</li>
                    <li>FLIP YELLING</li>
                </ul>
                </div>

                <div>
                    <h1>NEVER happening</h1>
                <ul>
                    <li>RASPUTIN</li>
                    <li>BABY SHARK</li>
                    <li>DESPACITO</li>
                    <li>FLIP FOLLOWING CHAT</li>
                    <li>RASPUTIN!</li>
                </ul>
                </div>
                </div>
            </div>

            <div className='col info'>
                <h1>Subscribe to the <a href='https://youtube.com/c/FlipOfficial' target="_blank" rel="noopener noreferrer">
                <motion.span style={{color: '#ac4684', textDecoration: 'none'}}
                            animate = {{opacity: [1., 0.5, 1., 1., 0.75, 1.]}}
                            transition = {{duration: 0.1, repeat: Infinity, repeatDelay: 1}}>YouTube</motion.span>
                    </a> channel!</h1>
            </div>
            <div className='col pitch'>
            <p>
                Official music videos, scraped music projects, covers, Twitch higlights, collaborations, live performances, and much more!
            </p>
            </div>

            <div className='col youtube-player'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=UUZDRxAtdK43I73YrHU9pz2g" frameBorder="0" allowFullScreen></iframe>
            </div>

        </div>
        </Styles>
     );
}
 
export default TV;