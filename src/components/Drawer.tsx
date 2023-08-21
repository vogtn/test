// Responsive Drawer component 
import React, {useState} from 'react';
import { useIntl } from 'react-intl';

const Drawer = () => {
    const [activeOption, setActiveOption] = useState(0);
    const intl = useIntl();

    return (
      <div className="sidebar">
        <a onClick={() => setActiveOption(0)} className={activeOption === 0 ? "active": ""} href="#section1">{intl.formatMessage({ id: 'sectionOneCopy' })}</a>
        <a onClick={() => setActiveOption(1)} className={activeOption === 1 ? "active": ""} href="#section2">{intl.formatMessage({ id: 'sectionTwoCopy' })}</a>
        <a onClick={() => setActiveOption(2)} className={activeOption === 2 ? "active": ""} href="#section3">{intl.formatMessage({ id: 'sectionThreeCopy' })}</a>
        <a onClick={() => setActiveOption(3)} className={activeOption === 3 ? "active": ""} href="#section4">{intl.formatMessage({ id: 'sectionFourCopy' })}</a>
        <a onClick={() => setActiveOption(4)} className={activeOption === 4 ? "active": ""} href="#section5">{intl.formatMessage({ id: 'sectionFiveCopy' })}</a>
      </div>
    );
}

export default Drawer;