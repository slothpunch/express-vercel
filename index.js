// https://www.youtube.com/watch?v=vCuf62T2snY

// Import packages
const express = require('express');
const product = require('./public/product');

// Middleware
const app = express();
app.use(express.json());

// Routers
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use('/public/product', product)

// Connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app