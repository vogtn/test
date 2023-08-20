import React, {useState} from 'react';
import styled from "styled-components";

const ChevronIcon = (parentProps: any) => {

    const chevronDown = () =>{
        return(
            <svg onClick={() => null} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={parentProps.animate ? "chevron-svg animate" : "chevron-svg"} width="14" role="presentation">
                <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M27.7 5.3L32 9.8 16 26.7 0 9.8l4.3-4.5L16 17.7z"></path>
            </svg>
        )
    }
    return (
        chevronDown()
    );
};

export default ChevronIcon