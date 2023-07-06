import React from "react";
import styled from 'styled-components';
import "../App.css";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
`;

const ImageFolder = ({ image }) => {
  return (
  <ImageContainer>
    <>
      <img src={image.url} alt={image.public_id} style={{width: '200px'}}></img>
    </>
  </ImageContainer>)

};

export default ImageFolder;
