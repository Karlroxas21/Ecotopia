const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// CORS Middleware
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}`) // REMOVE THIS LINE IN PROD
})