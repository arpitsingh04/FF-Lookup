const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/player/:uid', async (req, res) => {
  const { uid } = req.params;

  if (!uid || uid.length < 8) {
    return res.status(400).json({ error: 'Invalid UID format' });
  }

  try {
    const response = await axios.get('https://developers.freefirecommunity.com/api/v1/info', {
      params: {
        key: process.env.FREEFIRE_API_KEY,
        region: 'ind',
        uid: uid
      },
      timeout: 30000
    });

    if (response.data && !response.data.error) {
      console.log('Raw API Response:', JSON.stringify(response.data, null, 2));
      
      return res.json({
        success: true,
        data: response.data
      });
    }
  } catch (error) {
    console.log('API Error:', error.message);
  }

  res.status(404).json({ 
    success: false, 
    error: 'Player not found' 
  });
});

// Image proxy endpoint for Free Fire item images
app.get('/api/item-image/:itemId', async (req, res) => {
  const { itemId } = req.params;
  
  // List of possible CDN URLs to try
  const imageUrls = [
    `https://www.dl.cdn.freefireofficial.com/icons/${itemId}.png`,
    `https://freefiremobile-a.akamaihd.net/common/web_event/official/images/item/${itemId}.png`,
    `https://freefiremobile-a.akamaihd.net/ffwebsite/images/item/${itemId}.png`,
    `https://freefiremobile-a.akamaihd.net/ffwebsite/images/playeritems/${itemId}.png`
  ];
  
  // Try each URL
  for (const url of imageUrls) {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      // Success! Send the image
      res.set('Content-Type', 'image/png');
      res.set('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
      return res.send(response.data);
    } catch (error) {
      // Try next URL
      continue;
    }
  }
  
  // All URLs failed, return 404
  res.status(404).json({ error: 'Image not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});