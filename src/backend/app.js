const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// app.get('/', (req, res) => res.send());
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`example app listening on port ${port}`));