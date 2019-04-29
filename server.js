const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}!`);
});

// Route Files
let burgers = require('./controllers/burgers_controller');
app.use(burgers);
