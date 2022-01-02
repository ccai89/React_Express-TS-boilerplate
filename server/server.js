const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  console.log("server - root");
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

module.exports = app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/