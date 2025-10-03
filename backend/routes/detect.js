const express = require('express');
const router = express.Router();
const { checkImage } = require('../services/sightengine');

router.post('/', async (req, res) => {
  try {
    const filePath = req.file.path;
    const result = await checkImage(filePath);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Image detection failed' });
  }
});

module.exports = router;
