/* Use Node.js to set up a server. The server can be hosted on an online service such as 
Vercel (free with hobby plan) or on your local machine (accessible via localhost).*/
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});