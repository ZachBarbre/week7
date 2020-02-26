const express = require('express');
const router = express.Router();

router.get('/:name?', (req, res) => {
    console.log(req.query);
    
    let ageSnippet = '';

    if (!!req.query.age){
        currentYear = new Date().getFullYear();
        year = currentYear - Number(req.query.age);
        ageSnippet = ` You were born in ${year}.`
    }

    let name = 'Person';
    if (!!req.params.name){
        name = req.params.name;
    }
    res.status(200).send(`<h1>Hello, ${name}!${ageSnippet}</h1>`).end();
})

module.exports = router;