// Container for the header text and vertical bar
import React, {useState} from 'react';

const LowerCopy = () =>{

    return (
        <div className="lower-copy-container">
            <p>5/01/22</p>
            <strong>Title copy lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</strong>
            <p>Article copy lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna lorem ipsum...</p>
            <a className="lower-copy-link" href="url"><strong>Read more</strong></a>
        </div>
    );
}

export default LowerCopy;