import React from 'react';
import styled from 'styled-components';

const Styles = styled.div
`

.section{
    flex-direction: column;
}
.col {
    height: auto;
    width: 25vw;
    // border: 2px solid red;
    padding: 1%;
    margin: 1%;
    font-size: 2rem;
}

.pitch {
    width: 50vw;
}

.info {
    background-color: #32327c;
    color: white;

}

.youtube-player {
    width: 50vw;
    height: 28.125vw;
    margin: auto;
    padding: auto;
}

ul {
    margin: 2em;
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
}

.expectations h1 {
    color: #32327c;
    margin 1em;
}

.expectations ul {
    margin 1em;
    color: black;
    font-size: 0.75em;
}
@media (max-width: 992px) {
    .section{
        flex-direction: column;
        text-align: right;
        justify-content: center;
        align-items: center;
    }

    .youtube-player {
        width: 90vw;
        height: 50.625vw;
    }

      
  }
`

const TV = () => {
    return (
        <Styles>
        <div className='section tv'>
            <div className='col info'>
                <h1>Join the hoomin fam on Twitch</h1>
                <h1><a href='https://twitch.tv/flipofficial'>Twitch.tv/flipofficial</a></h1>

                <ul>
                    <li>TUE 3PM EST</li>
                    <li>THU 3PM EST</li>
                    <li>SAT 3PM EST</li>
                </ul>
                <p>For other streaming times and special sub perks join the <a href='https://discord.com/invite/rwzb3Kb'>DISCORD</a></p>
            </div>

            <div className='col pitch'>
            
                <p>
                    Join the ever-growing family of viewers on Fl!p's Twitch channel for unforgettable times with some of the kindest and coolest hoomins on the planet!
                </p>

                <div className='expectations'>
                <div>
                    <h1>what to expect</h1>
                <ul>
                    <li>Good vibes</li>
                    <li>Loops</li>
                    <li>Original music and covers</li>
                    <li>Guest appearances by kitty and doggo</li>
                    <li>Fl!p yelling your username</li>
                </ul>
                </div>

                <div>
                    <h1>what NOT to expect</h1>
                <ul>
                    <li>Rasputin</li>
                    <li>Baby shark</li>
                    <li>Despacito</li>
                    <li>Fl!p to follow chat</li>
                    <li>Rasputin</li>
                </ul>
                </div>
                </div>
            </div>

            <div className='col youtube-player'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=UUZDRxAtdK43I73YrHU9pz2g" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>

        </div>
        </Styles>
     );
}
 
export default TV;