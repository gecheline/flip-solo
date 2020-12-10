import { Parallax, Background } from 'react-parallax';
import ilikeyou1 from '../assets/ilikeyou_wide.png'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Styles = styled.div
`
.customBg {
    height: 100vh;
    width: auto;
}

.header {
    color: white;
    font-size: 3rem;
    margin-top: 3rem;
}

.header-links {
    color: white;
    font-size: 1rem;
}
`
 
const Banner = () => (
    <Styles>
    <Parallax bgImage={ilikeyou1} strength={300} className='customBg'>
        {/* <Background className="customBg">
            <img src={ilikeyou1} alt="I like you cover" style={{width: 'auto', height: '100vh'}}/>
        </Background> */}
        <motion.h1 className='header'>NEW SINGLE OUT NOW</motion.h1>
        <motion.div className='header-links'>add links here</motion.div>
    </Parallax>
    </Styles>
);

export default Banner;
