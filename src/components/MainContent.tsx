// Content from the main section of page (not in drawer)
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import HeadingContainer from './HeadingContainer';
import ImageContainer from './ImageContainer';
import LowerCopy from './LowerCopy';
import ButtonContainer from './ButtonContainer';

const MainContent = () => {

  const articleNavigationAlert =  () =>{
    alert("navigated to article");
  }
  return (
    <div className="content">
        <SearchBar />
        <HeadingContainer />
        <div onClick={() => articleNavigationAlert()} className="clickable-article">
          <ImageContainer />
          <LowerCopy />
        </div>
        <ButtonContainer />
    </div>
  )
}

  export default MainContent;