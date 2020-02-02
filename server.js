const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

//  Redirect users to index.html file on all routes
app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'dist')});
});