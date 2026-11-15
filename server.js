/* Use Node.js to set up a server. The server can be hosted on an online service such as 
Vercel (free with hobby plan) or on your local machine (accessible via localhost).*/
const express = require('express');
const app = express();
const port = 3000;

const comments = [];

app.use(express.json());
app.use(express.static('public'));

app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.post('/api/comments', (req, res) => {
  const { name, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }
  comments.unshift({ name, message, date: new Date().toLocaleString() });
  res.status(201).json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});