// Responsive Drawer functional component 
import React, {useState} from 'react';
import MagnifyGlass from '../Icons/MagnifyGlass';
import ChevronIcon from '../Icons/ChevronIcon';
import { IntlContext } from "./IntlContext";
import { FormattedMessage } from "react-intl";
import { IntlProvider, useIntl } from 'react-intl';

const SearchBar = () =>{
    const { switchToEnglish, switchToJapanese } = React.useContext(IntlContext);
    const intl = useIntl();

    const updateDropDown = () =>{
        let dropdown = document.getElementById("myDropdown") as HTMLElement;
        if(dropdown){
            animateFlip();
            dropdown.classList.toggle("show");
        }
    }

    const [animate, setAnimate] = useState(false)
    const animateFlip = () =>{
        setAnimate(prevState => {return !prevState});
    }

    const [filterContent, setFilterContent] = useState("All");


    const updateSelectedValue = (e: React.MouseEvent<HTMLElement>) =>{
        if(e.currentTarget && e.currentTarget.attributes[0].value){
            switch(e.currentTarget.attributes[0].value) {
                case "all":
                    switchToEnglish();
                    updateDropDown();
                    setFilterContent("All");
                    break;
                case "jpn":
                    switchToJapanese();
                    updateDropDown();
                    setFilterContent("jpn")
                    break;
              }
        }
    }


    return (
        <div className="dropdown">
            <div className="input-hover-container">
                <input autoComplete="off" className="search-input" type="text" placeholder={intl.formatMessage({ id: 'placeholderMessageId' })} id="myInput" />
                    <MagnifyGlass />
                <button onClick={() => updateDropDown()} className={`dropbtn ${animate ? "active" : ""}`}>
                    <span className="content-filter"><strong>{filterContent}</strong></span>
                    <ChevronIcon animate={animate} />
                </button>
            </div>
            <div id="myDropdown" className="dropdown-content">
                <div data-value="all" onClick={(e) => updateSelectedValue(e)}>All</div>
                <div data-value="jpn" onClick={(e) => updateSelectedValue(e)}>i18n: japanese</div>
            </div>
        </div>
    );
}

export default SearchBar;