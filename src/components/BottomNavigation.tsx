import HamburgerMenu from "../Icons/HamburgerMenu";

// Bottom navigation drawer for mobile
const BottomNavigation = () => {

    const showLinks = () => {
        var x = document.getElementById("myLinks") as HTMLElement;
        if (x && x.style.display === "block") {
          x.style.display = "none";
        } else {
            if(x){
                x.style.display = "block";
            }
        }
    }

    return (
        <div className="bottomnav">
          <div id="myLinks">
            <a href="#section1">section 1</a>
            <a href="#section2">section 2</a>
            <a href="#section3">section 3</a>
            <a href="#section4">section 4</a>
            <a href="#section5">section 5</a>
          </div>
          <button  className="icon" onClick={() => showLinks()}>
            <HamburgerMenu />
          </button>
        </div>
    );
}

export default BottomNavigation;