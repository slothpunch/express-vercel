
// https://syntackle.live/blog/how-to-create-and-deploy-an-express-js-app-to-vercel-ljgvGrsCH7ioHsAxuw3G/

const express = require('express');
const app = express();

// app.use(express.static('public')) // As it is a middleware, it should be above all request handlers 

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  })

// app.listen(process.env.PORT || 3000);


// Export the Express API
module.exports = app 