// Container for buttons near the bottom
import React from 'react';
import { FormattedMessage } from "react-intl";
import { useIntl } from 'react-intl';
import { IntlContext } from "./IntlContext";


const ButtonContainer = () =>{
    const { switchToEnglish, switchToJapanese } = React.useContext(IntlContext);
    const intl = useIntl();

    return (
        <div className="button-container">
            <button className="filled-button" onClick={switchToEnglish}>{intl.formatMessage({ id: 'buttonCopyEn' })}</button>
            <button className="outlined-button" onClick={switchToJapanese}>{intl.formatMessage({ id: 'buttonCopyJp' })}</button>
        </div>
    );
}

export default ButtonContainer;