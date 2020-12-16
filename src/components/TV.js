import React from 'react';
import styled from 'styled-components';

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

}

.info h1 {
    margin: 5px;
}

.info {
    // font-size: 2rem;
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
}

.expectations h1 {
    color: #32327c;
    margin 1em;
}

.expectations ul {
    margin 1em;
    color: black;
}

.vl {
    border-left: 6px solid #32327c;
    height: auto;
    margin: 1em;
  }

  
@media (max-width: 992px) {
    .youtube-player {
        width: 90vw;
        height: 50.625vw;
    }

    .expectations {
        width: 95vw;
    }

      
  }
`

const TV = () => {
    return (
        <Styles>
        <div className='section tv' id='tv'>
            <div className='col'>
                <h1>TV</h1>
            </div>
            <div className='col info'>
                <h1>Join the hoomin fam!</h1>
                <h2><a href='https://twitch.tv/flipofficial'>twitch.tv/flipofficial</a></h2>

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
                    <li>GOOD VIBES</li>
                    <li>LOOPS</li>
                    <li>ORIGINAL MUSIC & COVERS</li>
                    <li>PET CAMEOS</li>
                    <li>FLIP YELLING</li>
                </ul>
                </div>
                <div class="vl"></div>
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
                <h1>Subscribe to the <a href='https://twitch.tv/flipofficial'>YouTube</a> channel!</h1>
            </div>
            <div className='col pitch'>
            <p>
                Official music videos, scraped music projects, covers, Twitch higlights, collaborations, live performances, and much more!
            </p>
            </div>

            <div className='col youtube-player'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=UUZDRxAtdK43I73YrHU9pz2g" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>

        </div>
        </Styles>
     );
}
 
export default TV;