import React from 'react';
import styled from 'styled-components';
import flippy from '../assets/flippy.png';

const Styles = styled.div
`

.bio {
    text-align: justify;
    text-justify: inter-word;
}

.bio h4 {
    Font-Family: 'Permanent Marker', Cursive;
}

}
`

const About = () => {
    return ( 
        <Styles>
            <div className='section'>
            <div className='col'>
            <h1>ABOUT ME</h1>
            </div>
            <div className='col bio'>
                <p>Henlo hoomins!</p>
            
            <h4>I PLAY</h4>

            <h4>I LIKE</h4>

            <h4>LITTLE KNOWN FACTS</h4>
            </div>
            </div>

        </Styles>
     );
}
 
export default About;