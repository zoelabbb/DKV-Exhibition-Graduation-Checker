// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
const kelulusanRoutes = require('./routes/kelulusanRoutes');
const listPameranRoutes = require('./routes/listPameranRoutes');

app.use('/api/kelulusan', kelulusanRoutes);
app.use('/api/list', listPameranRoutes);

// If running directly, start the server
if (!module.parent) {
    app.listen(port, () => {
        console.error(`⏳ Server running at http://localhost:${port}`);
        console.error('✅ Ready to accept requests');
    });
}


// Export app
module.exports = app;
