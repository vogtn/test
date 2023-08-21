// Container for buttons near the bottom
import { FormattedMessage } from "react-intl";
import { useIntl } from 'react-intl';

const ButtonContainer = () =>{
    const intl = useIntl();

    return (
        <div className="button-container">
            <button tabIndex={0} className="filled-button">{intl.formatMessage({ id: 'buttonCopy' })}</button>
            <button className="outlined-button">{intl.formatMessage({ id: 'buttonCopy' })}</button>
        </div>
    );
}

export default ButtonContainer;