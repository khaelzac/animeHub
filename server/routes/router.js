// routes/anime.js
const express = require('express');
const router = express.Router();// Works in Node.js < 18


//Popular Anime Route
router.get('/anime', async (req, res) => {
        const response = await fetch('https://api.jikan.moe/v4/anime?order_by=popularity');
        const data = await response.json();

        res.send((data.data));
    });

module.exports = router;
