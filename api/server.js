const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
//var cloudinary = require('cloudinary');
var cloudinary = require('cloudinary').v2;

const app = express();

app.use(cors());
app.use(json());

const { parsed: config } = dotenv.config();
const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}`;
const CLOUDINARY_URL=`cloudinary://${config.API_KEY}:${config.API_SECRET}@${config.CLOUD_NAME}`

https://cloudinary.com/documentation/node_integration

cloudinary.config({ 
  cloud_name: `${config.CLOUD_NAME}`, 
  api_key: `${config.API_KEY}`, 
  api_secret: `${config.API_SECRET}`, 
  secure: true
});


const auth = {
  username: config.API_KEY,
  password: config.API_SECRET,
};

/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
const getAssetInfo = async (publicId) => {

  // Return colors in the response
  const options = {
    colors: true,
  };

  try {
      // Get details about the asset
      const result = await cloudinary.api.resource(publicId, options);
      console.log(result);
      return result.colors;
      } catch (error) {
      console.error(error);
  }
};

// app.get("/photos", async (req, res) => {
//   // const response = await axios.get(BASE_URL + "/resources/image", {
//   const response = await axios.get(
//     BASE_URL + "/resources/search?expression=folder:Fronts",
//     {
//       auth,
//       params: {
//         next_cursor: req.query.next_cursor,
//       },
//     }
//   );
//   return res.send(response.data);
// });

app.get("/photos", async (req, res) => {
  cloudinary.search
  .expression('folder:Fronts')
  .with_field('context')
  .with_field('tags')
  .max_results(100)
  .execute()
  .then(result=>res.send(result));

  //return res.send(response.data);
});

app.get("/search", async (req, res) => {
  const response = await axios.get(BASE_URL + "/resources/search", {
    auth,
    params: {
      expression: req.query.expression,
    },
  });

  return res.send(response.data);
});

const PORT = 7000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
