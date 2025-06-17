const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const path = require("path");
const router = require('./routes/router');

const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: 'https://anime-hub-7p23.vercel.app/', // ✅ correct — no trailing slash
    credentials: true,
    optionSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use('/api', router);
app.get('/', (req, res) => {
    res.send('Welcome to the Anime Hub API');
});

const port = 5000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});