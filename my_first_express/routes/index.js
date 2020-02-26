const express = require('express'), 
    router = express.Router();

router.get('/', (request, response) => {
    const snippet = '<h1>Hello, World!</h1>';
    response.status(200).send(snippet).end();
});

module.exports = router; 

