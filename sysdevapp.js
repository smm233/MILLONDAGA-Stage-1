const express = require('express');
const app = express();
const port = 3000;

const favoriteLanguage = 'Python';

app.get('/', (req, res) => {
  res.send(`My favorite programming language is ${favoriteLanguage}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//command used: node sysdevapp.js
