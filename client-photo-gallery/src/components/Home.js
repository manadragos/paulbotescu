import React, { useEffect, useState } from "react";

import "../App.css";
import { getImages } from "../api";
import ImageFolder from "./ImageFolder";

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
        {imageList.map((image) => (
          <ImageFolder image={image} />
        ))}
      </div>
      <div className="footer">
        {nextCursor && (
          <button onClick={handleLoadMoreButtonClick}>Load More</button>
        )}
      </div>
    </>
  );
};

export default Home;
