const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log(`Server running on port 3333`)
});

app.get('/', (request, response) => {
    const snippet = '<h1>Happy Birthday</h1>';
    response.status(200).send(snippet).end();
});