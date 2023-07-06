import React, { useEffect, useState } from "react";

import "../App.css";
import { getImages } from "../api";
import ImageFolder from "./ImageFolder";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
      setNextCursor(responseJson.next_cursor);
    };

    fetchData();
  }, []);

  const handleLoadMoreButtonClick = async () => {
    const responseJson = await getImages(nextCursor);
    setImageList((currentImageList) => [
      ...currentImageList,
      ...responseJson.resources,
    ]);
    setNextCursor(responseJson.next_cursor);
  };

  return (
    <>
      <div className="image-grid">
        {
        imageList.map((image) => (
          <ImageContainer>
            <ImageFolder image={image} />
            <Title>{image.context.caption}</Title>
          </ImageContainer>
        ))
        }
      </div>
      <div className="footer">
        {nextCursor && (
          <button onClick={handleLoadMoreButtonClick}>Load More</button>
        )}
      </div>
    </>);
};

export default Home;
