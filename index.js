
// https://syntackle.live/blog/how-to-create-and-deploy-an-express-js-app-to-vercel-ljgvGrsCH7ioHsAxuw3G/

const express = require('express');
const product = require('./api/product');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/product', product)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

