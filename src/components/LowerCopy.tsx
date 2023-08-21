// Container for the header text and vertical bar
import { FormattedMessage } from "react-intl";

const LowerCopy = () =>{

    return (
        <div className="lower-copy-container">
            <p>5/01/22</p>
            <FormattedMessage id="boldTitleCopy" tagName="strong" />
            <FormattedMessage id="secondaryCopy" tagName="p" />
            <a className="lower-copy-link" href="url"><FormattedMessage id="linkCopy" tagName="strong" /></a>
        </div>
    );
}

export default LowerCopy;