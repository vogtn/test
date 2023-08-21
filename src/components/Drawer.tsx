// Responsive Drawer component 
import React, {useState} from 'react';

const Drawer = () => {
    const [activeOption, setActiveOption] = useState(0);

    return (
      <div className="sidebar">
        <a onClick={() => setActiveOption(0)} className={activeOption === 0 ? "active": ""} href="#section1">Section 1</a>
        <a onClick={() => setActiveOption(1)} className={activeOption === 1 ? "active": ""} href="#section2">Section 2</a>
        <a onClick={() => setActiveOption(2)} className={activeOption === 2 ? "active": ""} href="#section3">Section 3</a>
        <a onClick={() => setActiveOption(3)} className={activeOption === 3 ? "active": ""} href="#section4">Section 4</a>
        <a onClick={() => setActiveOption(4)} className={activeOption === 4 ? "active": ""} href="#section5">Section 5</a>
      </div>
    );
}

export default Drawer;