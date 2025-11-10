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

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});