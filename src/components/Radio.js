import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import RadioPlayer from './RadioPlayer'
import {motion} from 'framer-motion';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
 
import flipepcover from '../assets/FlipEP/coverart.png'
import dirt2stardust from '../assets/FlipEP/Dirt_to_stardust.mp3';
import bbbitch from '../assets/FlipEP/Bad_bad_bitch.mp3';
import allwrong from '../assets/FlipEP/All_wrong.mp3';
import lies from '../assets/FlipEP/Lies.mp3';

import streamcover from '../assets/StreamOfThoughts/cover_final.png'
import arrival from '../assets/StreamOfThoughts/Arrival.mp3';
import canthavetoomuch from '../assets/StreamOfThoughts/Cant_have_too_much.mp3';
import chillguitar from '../assets/StreamOfThoughts/Chill_Guitar.mp3';
import gettingready from '../assets/StreamOfThoughts/Getting_ready.mp3';
import mondayne from '../assets/StreamOfThoughts/Monday_ne.mp3';
import views from '../assets/StreamOfThoughts/Views.mp3';
import fastchat from '../assets/StreamOfThoughts/Fast_Chat.mp3';
import justchatting from '../assets/StreamOfThoughts/Just_chatting.mp3';
import dontwannabelikeme from '../assets/StreamOfThoughts/I_dont_want_to_be_like_me.mp3'

import baecover from '../assets/SongsBae/cover.png';
import space from '../assets/SongsBae/are_we_in_space_or_something.mp3';
import livingroom from '../assets/SongsBae/chillin_in_the_living_room.mp3';
import kitchenhang from '../assets/SongsBae/kitchen_hang_out.mp3';
import yoursong from '../assets/SongsBae/let_me_hear_your_song.mp3';
import rising from '../assets/SongsBae/rising.mp3';
import sleepycrew from '../assets/SongsBae/sleepy_crew.mp3';
import ivanwalk from '../assets/SongsBae/time_to_take_ivan_out_for_a_walk.mp3';

import sunrisecover from '../assets/SunriseEP/cover.jpg';
import coffee from '../assets/SunriseEP/Coffee.mp3';
import emails from '../assets/SunriseEP/E-Mails.mp3';
import newspaper from '../assets/SunriseEP/Newspaper.mp3';
import pillow from '../assets/SunriseEP/Pillow.mp3';
import ready4day from '../assets/SunriseEP/Ready_for_the_day.mp3';
import toothbrush from '../assets/SunriseEP/Toothbrush.mp3';
import traffic from '../assets/SunriseEP/Traffic.mp3';


import ilikeyoucover from '../assets/OhAndIlikeYouSingle/ilikeyou_square.png'
import ohandilikeyou from '../assets/OhAndIlikeYouSingle/Oh_and_I_like_you.mp3';

import bgimage from '../assets/Bgstars.png';

const Styles = styled.div
`
.section {
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
    height: auti;
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
        height: 35vw;
        // min-height: 50vw;
        width: auto;
        min-height: auto;
        max-height: auto;
        min-width: 50vw;
        max-width: 100%;
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
    width: 95vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background: white;
    // clip-path: polygon(0 0, 0 100%, 90% 100%, 100% 0);
    
}


.discography {
    // height: 20vw;
    width: 75vw;
    height: auto;
    // margin-left: 10%;
    // margin-top: 1vh;
    // background-color:  #32327c;
    padding: 2px;
    padding-left: 4px;
    padding-right: 4px;
}

.discography div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.discography img{
    height: 20vw;
    width: 20vw;
    padding: 1%;
}


@media (max-width: 992px) {
    .radio-col {
        width: 95vw;
        height: auto;
    }

    .radio-col svg
    {
        width: 100vw;
        max-width: 100vw;
        height:auto;
        margin-bottom: 30px;
    }

    .discography {
        height: auto;
        width: 75vw;
        // margin-left: 10%;
        // margin-top: 1vh;
        // background-color: #0a0e1e;
    }
    
    .discography div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .discography img{
        height: 25vw;
        width: 25vw;
        padding: 1%;
    }
}

`
const iconColor = 'white'
const iconSize = '2.5em'
// #9bceb5
const spotify = <svg 
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height={iconSize}>
    <path fill={iconColor} d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
    </svg>
const deezer = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={iconSize}><path fill={iconColor} d="M451.46,244.71H576V172H451.46Zm0-173.89v72.67H576V70.82Zm0,275.06H576V273.2H451.46ZM0,447.09H124.54V374.42H0Zm150.47,0H275V374.42H150.47Zm150.52,0H425.53V374.42H301Zm150.47,0H576V374.42H451.46ZM301,345.88H425.53V273.2H301Zm-150.52,0H275V273.2H150.47Zm0-101.17H275V172H150.47Z"/></svg>
const playmusic = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={iconSize}><path fill={iconColor} d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
const itunes = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={iconSize}><path fill={iconColor} d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z"/></svg>
const amazonmusic = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={iconSize}><path fill={iconColor} d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"/></svg>


const iLikeYouSingle = {tag: 'ilikeyousingle', 
                        albumtitle: 'Oh, and I like you (Single)', 
                        songlist: [
                            {title: 'Oh, and I like you', audiofile: ohandilikeyou, id: 1},
                            {title: 'Oh, and I like you', audiofile: ohandilikeyou, id: 2}
                        ]}

const flipEP = {tag: 'flipep', 
                albumtitle: 'Fl!p (EP)', 
                songlist: [
                    {title: 'Dirt to Stardust', audiofile: dirt2stardust, id: 1},
                    {title: 'Bad, Bad B***h', audiofile: bbbitch, id: 2},
                    {title: 'Lies', audiofile: lies, id: 3},
                    {title: 'All Wrong', audiofile: allwrong, id: 4}
                ]}

const aStreamofThoughts = {tag: 'astreamofthoughts', 
                            albumtitle: 'A Stream of Thoughts', 
                            songlist: [
                                {title: 'Views', audiofile: views, id: 1},
                                {title: 'Arrival', audiofile: arrival, id: 2},
                                {title: 'Can\'t have too much', audiofile: canthavetoomuch, id: 3},
                                {title: 'Chill Guitar', audiofile: chillguitar, id: 4},
                                {title: 'Getting Ready', audiofile: gettingready, id: 5},
                                {title: 'Monday Ne', audiofile: mondayne, id: 6},
                                {title: 'Fast Chat', audiofile: fastchat, id: 7},
                                {title: 'I don\'t want to be like me', audiofile: dontwannabelikeme, id: 8},
                                {title: 'Just chatting', audiofile: justchatting, id: 9}
                            ]}

const songsBae = {tag: 'songsbae', 
                            albumtitle: 'songs I wrote to listen with bae', 
                            songlist: [
                                {title: 'rising', audiofile: rising, id: 1},
                                {title: 'chillin in the living room', audiofile: livingroom, id: 2},
                                {title: 'are we in space or something', audiofile: space, id: 3},
                                {title: 'kitchen hangout', audiofile: kitchenhang, id: 4},
                                {title: 'let me hear your song', audiofile: yoursong, id: 5},
                                {title: 'time to take ivan out for a walk', audiofile: ivanwalk, id: 6},
                                {title: 'sleepy crew', audiofile: sleepycrew, id: 7}
                            ]}

const sunriseEP = {tag: 'sunriseep', 
                            albumtitle: 'Sunrise EP', 
                            songlist: [
                                {title: 'Pillow', audiofile: pillow, id: 1},
                                {title: 'Toothbrush', audiofile: toothbrush, id: 2},
                                {title: 'Coffee',  audiofile: coffee, id: 3},
                                {title: 'Newspaper', audiofile: newspaper, id: 4},
                                {title: 'Emails', audiofile: emails, id: 5},
                                {title: 'Traffic', audiofile: traffic, id: 6},
                                {title: 'Ready for the Day', audiofile: ready4day, id: 7},
                            ]}

// const params = {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true
//     },
//     pagination: {
//         el: '.swiper-pagination'
//     }
//     }

class Radio extends Component {
 
    constructor(props) {
      super(props);
      this.state = {
          songlist: [
            {title: 'Oh, and I like you', audiofile: ohandilikeyou, id: 1},
            {title: 'Oh, and I like you', audiofile: ohandilikeyou, id: 2}
        ],
          albumtitle: 'Oh, and I like you (Single)',
          discographySlides: 3
      };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
    }

    componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    }


    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
    if (window.innerWidth > 992) {
        this.setState({'discographySlides': 3});
    }

    else {
        this.setState({'discographySlides': 2});
    }
    }



    handleAlbumClick (tag) {
        if (tag === 'ilikeyousingle') { this.setState({songlist: iLikeYouSingle.songlist, albumtitle: iLikeYouSingle.albumtitle})};
        if (tag === 'flipep') { this.setState({songlist: flipEP.songlist, albumtitle: flipEP.albumtitle})};
        if (tag === 'astreamofthoughts') { this.setState({songlist: aStreamofThoughts.songlist, albumtitle: aStreamofThoughts.albumtitle})};
        if (tag === 'songsbae') { this.setState({songlist: songsBae.songlist, albumtitle: songsBae.albumtitle})};
        if (tag === 'sunriseep') { this.setState({songlist: sunriseEP.songlist, albumtitle: sunriseEP.albumtitle})};
        }


    
    render() {
        return (
        <Styles>
            <Parallax bgImage={bgimage} strength={500} className='customBg'>
            <div className='section' id='radio'>
            <div className='col'>
                <h1>RADIO</h1>
                </div>
                <div className='col info-col'>
                    <blockquote 
                    // style={{borderLeft: '3px solid #ac4684'}}
                    >
                    <p id='grandmainfo'>
                            You know how Fl!p always says his music is available on all streaming platforms, including 
                            <b><motion.span style={{color: '#ac4684', textDecoration: 'none'}}
                            animate = {{opacity: [1., 0.75, 1.]}}
                            transition = {{duration: 0.1, yoyo: Infinity, repeatDelay: 1}}> grandma's radio</motion.span></b>?
                            </p>
                    {/* <p style={{fontSize: '0.9em', textAlign: 'right', marginRight: '5%'}}>
                        — Flip, every time</p> */}
                    </blockquote>

                    <div className='music-icons'>
                        <a href="https://open.spotify.com/album/3gzaajy5HJLS0h9o9M8snA" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                        transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 2}}
                        >{spotify}</motion.div></a>
                        <a href="https://music.apple.com/us/album/fl-p-ep/1532114353" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                        transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 3.5}}>{itunes}</motion.div></a>
                        <a href="https://play.google.com/store/music/album/Fl_p_Fl_p?id=Blt3v3sxlwepcsdmlotq35b3hjm" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                        transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 4.2}}>{playmusic}</motion.div></a>
                        <a href="https://music.amazon.com/albums/B085XZQ89W" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                        transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 2.7}}>{amazonmusic}</motion.div></a>
                        <a href="https://www.deezer.com/us/album/173854542" target="_blank" rel="noopener noreferrer"><motion.div     
                        animate = {{scale: [1., 0.9, 1.]}}
                    transition = {{duration: 0.5, yoyo: Infinity, repeatDelay: 2, delay: 3.}}>{deezer}</motion.div></a>
                    </div>
                    {/* <p>You thought he was joking? Well, HE WASN'T!</p> */}

                    <div className='radio-col' id='grandmasradio'>
                    <RadioPlayer songlist = {this.state.songlist} album = {this.state.albumtitle}/>
                    </div>

                    <div className='grandmapointer'>
                        <p>Click on an album below to play it!</p>
                    </div>
                    <Slider className='discography center'
                        dots = {true}
                        infinite = {true}
                        speed = {200}
                        arrows = {true}
                        slidesToShow = {this.state.discographySlides}
                        slidesToScroll = {1}
                        centerMode = {true}
                        centerPadding = '5%'
                        >
                        <div>
                        <img src={ilikeyoucover} onClick = {() => this.handleAlbumClick ('ilikeyousingle')}/>
                        </div>
                        <div>
                        <img src={flipepcover} onClick = {() => this.handleAlbumClick ('flipep')}/>
                        </div>
                        <div>
                        <img src={streamcover} onClick = {() => this.handleAlbumClick ('astreamofthoughts')}/>
                        </div>
                        <div>
                        <img src={baecover} onClick = {() => this.handleAlbumClick ('songsbae')}/>
                        </div>
                        <div>
                        <img src={sunrisecover} onClick = {() => this.handleAlbumClick ('sunriseep')}/>
                        </div>

                        </Slider>
                    </div>


            </div>
            </Parallax>
        </Styles>
     );}
}
 
export default Radio;