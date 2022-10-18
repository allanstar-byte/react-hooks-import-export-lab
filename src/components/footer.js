import React from 'react';

import {image} from '../data/user'

function Footer(){
    return(
        <div>
            <p>I'm a footer buddy</p>
            <img src={image}/>
        </div>
    )
}

export default Footer;