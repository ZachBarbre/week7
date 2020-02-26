const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send(`<h1>Foo</h1>`).end();
})

module.exports = router; 