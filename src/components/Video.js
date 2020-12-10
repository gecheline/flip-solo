import React, {useEffect} from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';


const Styles = styled.div
`
.video-section {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
}


.video-player {
    width: 75vw;
    height: 42.1875vw;
    margin: auto;
    padding: auto;
}

.video-player iframe {
  box-shadow: 0px 5px 5px rgba(0,0,0,0.5);
}

.video-header {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #dce4eb;
  color: #051c44;
}

.video-info{
    width: 100vw;
    height: auto;
    margin: auto;
    // margin-top: 2%;
    // margin-bottom: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.twitch-info, .youtube-info {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 1%;
    font-size: 1.5rem;
    color:#051c44;
    // margin-bottom: 2%;
}



a {
    text-decoration: none;
    color: #f5a342;
}

@media (max-width: 992px) {
    .video-info{
        flex-direction: column;
        text-align: right;
        justify-content: center;
        align-items: center;
    }

    .video-player {
        width: 90vw;
        height: 50.625vw;
    }

      
  }
`
const iconColor = '#f5a342'
const twitch = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="0.9em"><path fill={iconColor} d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>
const youtube = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="0.9em"><path fill={iconColor} d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>

const Video = () => {

    return ( 
    <Styles>
    <div className='video-wrapper'> 
    <motion.div className='video-section' id='video'>
    <motion.div 
      className='video-header'     
    >
      <motion.h1
      initial = {{opacity: 0}}
      animate = {{opacity: [1., 0.4, 1., 1., 0.4, 1.]}}
      transition = {{delay: 1, duration: 0.5, repeat: Infinity, repeatDelay: 2}} 
      >CHECK OUT OUR LATEST VIDEO<span style={{fontFamily: 'Abel, cursive'}}>!</span></motion.h1>
    </motion.div>
    
    <motion.div className='video-player'>
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=UUZDRxAtdK43I73YrHU9pz2g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </motion.div>
      <motion.div className='video-info'>
          <div className='twitch-info'>
            <h3><motion.a
            initial = {{opacity: 1}}
            animate = {{opacity: [1., 0.6, 1., 1., 0.6, 1.]}}
            transition = {{duration: 1, repeat: 'Infinity'}}  
            href="http://twitch.tv/flipofficial/about" target="_blank" rel="noopener noreferrer"
            style={{fontSize: '1.25em'}}>
              LIVE ON TWITCH {twitch}
                </motion.a>: TUE 3PM / THU 4PM / SAT 5PM EST</h3>
          </div>
          <div className='youtube-info'>
            <h3>SUBSCRIBE TO OUR <motion.a
            initial = {{opacity: 1}}
            animate = {{opacity: [0.6, 1.0, 1., 0.6, 0.6, 1.]}}
            transition = {{duration: 1, repeat: 'Infinity'}} 
            style={{fontSize: '1.25em'}}
            href="https://www.youtube.com/c/FlipOfficial" target="_blank" rel="noopener noreferrer">YOUTUBE {youtube}</motion.a> CHANNEL</h3>
          </div>
      </motion.div>
      </motion.div>
      </div>
      </Styles>);
}
 
export default Video;