import React, { useEffect, useState } from "react";

import "../App.css";

const ImageFolder = ({ image }) => {
  return <img src={image.url} alt={image.public_id} style={{width: '200px'}}></img>;
};

export default ImageFolder;
