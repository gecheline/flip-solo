import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import RadioNeon from './RadioPlayerNeon'
import {motion} from 'framer-motion';

import bgimage from '../assets/music_bg.jpg';

import latestsong from '../assets/WellOfUs/WellOfUs.mp3';

const Styles = styled.div
`
.section {
    height: 100vh;
    padding-bottom: 2em;
    background-color: transparent;
    color: white;
}

h1 {
    color: #ac4684;
}

#grandmainfo {
    background-color: white;
    color: #0a0e1e;
    padding: 0.75em;
    border-radius: 15px;
}

.radio-col {
    width: 100%;
    height: auto;
    max-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    margin-top: 1em;
}

.radio-col svg
{
        height: auto;
        // min-height: 50vw;
        width: 65vw;
        min-height: auto;
        max-height: auto;
        min-width: 50vw;
        max-width: 75vw;
        // margin-top: -30px;

}

blockquote {
    // font-size: 2em;
    // margin: auto;
    // width: auto;
    // padding: 2%;
    // padding-right: 0;
    // margin-bottom: 0;
    // margin-top: 10%;

}

.music-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.music-icons a {
    margin: 1em;
}

.info-col {
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: white;
    // clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
    
}

@media (max-width: 992px) {
    .radio-col {
        width: 100%;
        height: auto;
    }

    .radio-col svg
    {
        width: 90vw;
        max-width: 90vw;
        height:auto;
        margin-bottom: 30px;
    }
}

@media (max-width: 768px) {
    .info-col {
        width: 90%;
    }
}

`
const iconColor = 'white'
const iconSize = '4em'
// #9bceb5
const spotify = <svg 
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height={iconSize}>
    <path fill={iconColor} d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
    </svg>
const deezer = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={iconSize}><path fill={iconColor} d="M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z"/></svg>
const itunes = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={iconSize}><path fill={iconColor} d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z"/></svg>
const amazonmusic = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={iconSize}><path fill={iconColor} d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"/></svg>
const pandora = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height={iconSize}><path fill={iconColor} d="M14.972 5.412C14.682 2.377 11.955 0 8.763 0H.999v16h4c.551 0 1-.448 1-1v-3h3a6.01 6.01 0 0 0 4.44-1.965 5.951 5.951 0 0 0 1.533-4.623z"/></svg>

class Radio extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
          songlist: [
            {title: 'Well of Us', audiofile: latestsong, id: 1},
        ],
          albumtitle: 'Well of Us (Single)',
      };

    //   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
    }

    // componentDidMount() {
    // this.updateWindowDimensions();
    // window.addEventListener('resize', this.updateWindowDimensions);
    // }


    // componentWillUnmount() {
    // window.removeEventListener('resize', this.updateWindowDimensions);
    // }


    render() {
        return (
        <Styles>
            <Parallax bgImage={bgimage} strength={100} className='customBg'>
            <div className='section' id='radio'>
            <div className='col'>
                </div>
                <div className='col info-col'>
                    <div className='radio-col' id='grandmasradio'>
                        <RadioNeon songlist = {this.state.songlist} album = {this.state.albumtitle}/>
                    </div>

                    <div className='music-icons'>
                        <a href="https://open.spotify.com/artist/3QPspeZAv0PwCnX6DDN59i?si=fQLCgS88SgijdPYs2woKyw" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                        transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 2}}
                        >{spotify}</motion.div></a>
                        <a href="https://music.apple.com/us/artist/fl-p/1456281580" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                        transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 3.5}}>{itunes}</motion.div></a>
                        <a href="https://tinyurl.com/yagjnvnu" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                        transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 2.7}}>{amazonmusic}</motion.div></a>
                        <a href="https://www.deezer.com/us/artist/7363768" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                    transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 3.}}>{deezer}</motion.div></a>
                    <a href="https://www.pandora.com/artist/flp/AR3nzfJxrgnX2zP" target="_blank" rel="noopener noreferrer">
                    <motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                    transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 1.3}}>{pandora}</motion.div>
                    </a>
                    </div>
                    </div>


            </div>
            </Parallax>
        </Styles>
     );}
}
 
export default Radio;