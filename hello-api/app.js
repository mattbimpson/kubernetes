const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
    res.send('Hello world\n');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
