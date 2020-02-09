const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send());

app.listen(port, () => console.log(`example app listening on port ${port}`));