const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server running on Port 3333');
});

const getRootRoute = (request, response) => {
    const snippet = '<h1>Hello, World!</h1>';
    response.status(200).send(snippet).end();
}

const getCatRoute = (request, response) => {
    const snippet = '<h1>Meow!</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
}

const getDogRoute = (request, response) => {
    const snippet = '<h1>Woof!</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
}

const getCatsAndDogs = (request, response) => {
    const snippet = '<h1>Living Together</h1>';
    response
        .status(200)
        .send(snippet)
        .end();
}

app.get('/', getRootRoute);
app.get('/cat', getCatRoute);
app.get('/dogs', getDogRoute);
app.get('/cats_and_dogs', getCatsAndDogs);
