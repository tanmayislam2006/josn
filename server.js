const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS (for cross-origin access)
app.use(cors());

// Load JSON data
const footballers = require('./footballers.json');

// Define API route
app.get('/api/footballers', (req, res) => {
    res.json(footballers);
});

// Start the server
app.listen(port, () => {
    console.log(`Football API is running at http://localhost:${port}`);
});
