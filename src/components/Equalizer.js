import React from 'react';
import {motion} from 'framer-motion'

// const xs = Math.range(387.73, 797.73, 10, true);

var xs = [];

for (var x = 387.73; x <= 797.73; x+=10) {
    xs.push(x);
}

const rects_eq = xs.map((x) =>
<motion.g key = {x}
    initial = {{scaleY: 1}}
    animate = {{scaleY: [1,2,3,4,5,6,7,8,9,10].map((i) => Math.random())}}
    transition = {{duration: 1, yoyo: Infinity}}>
    <rect 
    width="7.67" height="25.65" transform={"translate(" + x + " 516.08)"}
    style={{fill: '#ffffff', stroke:'none'}}></rect>
</motion.g>
);

const rects_still = xs.map((x) =>
<g key = {x}>
    <rect 
    width="7.67" height="5.65" transform={"translate(" + x + " 528.905)"}
    style={{fill: '#ffffff', stroke:'none'}}></rect>
</g>
);

const Equalizer = (props) => {

    if (props.isPlaying) {
        return (
            <g>
                {rects_eq}
            </g>
        )
    }

    else {
        return (
            <g>
                {rects_still}
            </g>
        )
    }
    
}
 
export default Equalizer;