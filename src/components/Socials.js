import React from 'react';
import styled from 'styled-components';

const Styles = styled.div
`
.news-section {
    height: 50vw;
    width: 75vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding-top: 5%;
    margin-bottom: 2%;
    margin-top: 2%;
    // border:
}


@media (max-width: 992px) {
    .news-section {
        height: 75vh;
        width: 100vw;
        margin-bottom: 2.5%;
    }
}
`

const Socials = () => {
    return (
        <Styles>
            <div className='news-section' id='news'
                // ref={ref}
                // animate={controls}
                // initial="hidden"
                // variants={{
                //     visible: { opacity: 1},
                //     hidden: { opacity: 0}}}
                    >
                {/* <p style={{color: '#f5a342'}}><em>Follow us on social media!</em></p>
                <p className='links-icons'>
                <a href="https://www.facebook.com/flipbandofficial" target="_blank" rel="noopener noreferrer">{facebook}</a>
                <a href="https://www.instagram.com/flipbandofficial/" target="_blank" rel="noopener noreferrer">{instagram}</a>
                <a href="https://twitter.com/hatchefilip" target="_blank" rel="noopener noreferrer">{twitter}</a></p> */}
                <iframe 
                // ref={ref}
                // animate={controls}
                // initial="hidden"
                // variants={{
                //     visible: { x: 0},
                //     hidden: { x: 300}
        
                // }}
                allowfullscreen id="wallsio-iframe" src="https://walls.io/a5khc?nobackground=1&amp;show_header=0" 
                style={{border:0, height: '100%', width:'100%'}} loading="lazy" title="My social wall">

                </iframe>

            </div>
        </Styles>
      );
}
 
export default Socials;