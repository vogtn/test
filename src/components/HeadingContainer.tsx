// Container for the header text and vertical bar
import React, {useState} from 'react';
import { FormattedMessage } from "react-intl";

const HeadingContainer = () =>{    

    return (
        <div className="heading-container">
            <FormattedMessage id="header" tagName="h1" />
            <div className="vl"></div>
        </div>
    );
}

export default HeadingContainer;