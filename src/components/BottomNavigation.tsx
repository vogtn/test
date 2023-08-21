import HamburgerMenu from "../Icons/HamburgerMenu";
import { useIntl } from 'react-intl';

// Bottom navigation drawer for mobile
const BottomNavigation = () => {
  const intl = useIntl();

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
            <a href="#section1">{intl.formatMessage({ id: 'sectionOneCopy' })}</a>
            <a href="#section2">{intl.formatMessage({ id: 'sectionTwoCopy' })}</a>
            <a href="#section3">{intl.formatMessage({ id: 'sectionThreeCopy' })}</a>
            <a href="#section4">{intl.formatMessage({ id: 'sectionFourCopy' })}</a>
            <a href="#section5">{intl.formatMessage({ id: 'sectionFiveCopy' })}</a>
          </div>
          <button  className="icon" onClick={() => showLinks()}>
            <HamburgerMenu />
          </button>
        </div>
    );
}

export default BottomNavigation;