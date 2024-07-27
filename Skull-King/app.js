const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "html" directory
app.use(express.static(path.join(__dirname, 'html')));

// Route to serve the home.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'home.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
