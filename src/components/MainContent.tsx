// Content from the main section of page (not in drawer)
import React, { Fragment } from 'react';
import SearchBar from './SearchBar';
import HeadingContainer from './HeadingContainer';
import ImageContainer from './ImageContainer';
import LowerCopy from './LowerCopy';
import ButtonContainer from './ButtonContainer';

class MainContent extends React.Component {
    render() {
      return (
        <div className="content">
            <SearchBar />
            <HeadingContainer />
            <ImageContainer />
            <LowerCopy />
            <ButtonContainer />
        </div>
      )
    }
}

  export default MainContent;