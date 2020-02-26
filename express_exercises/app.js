const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server running on Port 3333');
});

const rootController = (request, response) => {
    const snippet = '<h1>Hello, World!</h1>';
    response.status(200).send(snippet).end();
}

const catController = (request, response) => {
    const snippet = '<h1>Meow!</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
}

const dogController = (request, response) => {
    const snippet = '<h1>Woof!</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
}

const catAndDogController = (request, response) => {
    const snippet = '<h1>Living Together</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
}

app.get('/', rootController);
app.get('/cat', catController);
app.get('/dogs', dogController);
app.get('/cats_and_dogs', catAndDogController);
