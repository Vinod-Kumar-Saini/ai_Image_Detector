const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

const checkImage = async (filePath) => {
  const data = new FormData();
  data.append('media', fs.createReadStream(filePath));
  data.append('models', 'genai');
  data.append('api_user', process.env.SIGHTENGINE_USER);
  data.append('api_secret', process.env.SIGHTENGINE_SECRET);

  try {
    const response = await axios.post(
      'https://api.sightengine.com/1.0/check.json',
      data,
      { headers: data.getHeaders() }
    );
    return response.data;
  } catch (error) {
    if (error.response) return error.response.data;
    else return { error: error.message };
  }
};

module.exports = { checkImage };
