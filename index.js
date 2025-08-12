const express = require('express');
const app = express();
require('dotenv').config();
require('./config/DatabaseConnect'); // Database connection
const cors = require('cors');

const port = process.env.PORT || 3000;

// Middlewares
const middlewares = [
    express.json(),
    cors(),
];
app.use(middlewares);

// Routes
const setRoute = require('./routes/routes');
setRoute(app);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
});