// Responsive Drawer functional component 
import React, {useState} from 'react';
import MagnifyGlass from '../Icons/MagnifyGlass';
import ChevronIcon from '../Icons/ChevronIcon';

const SearchBar = () =>{

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
                  // code block
                  setFilterContent("All");
                  updateDropDown()
                  break;
                case "green":
                  // code block
                  setFilterContent("green")
                  updateDropDown()
                  break;
                case "jpn":
                // code block
                    setFilterContent("jpn")
                    updateDropDown()
                    break;
                    default:
                  // code block
              }
        }
    }


    return (
        <div className="dropdown">
            <div className="input-hover-container">
                <input autoComplete="off" className="search-input" type="text" placeholder="Search" id="myInput" />
                    <MagnifyGlass />
                <button onClick={() => updateDropDown()} className={`dropbtn ${animate ? "active" : ""}`}>
                    <span className="content-filter"><strong>{filterContent}</strong></span>
                    <ChevronIcon animate={animate} />
                </button>
            </div>
            <div id="myDropdown" className="dropdown-content">
                <div data-value="all" onClick={(e) => updateSelectedValue(e)}>All</div>
                <div data-value="green" onClick={(e) => updateSelectedValue(e)}>Theme: green</div>
                <div data-value="jpn" onClick={(e) => updateSelectedValue(e)}>i18n: japanese</div>
            </div>
        </div>
    );
}

export default SearchBar;