const express = require('express');
const router = express.Router();

const data = [
    {name: 'Bomb', type: 'loud'},
    {name: 'egg', type: 'quiet'}
];



router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Foo Page!',
            arrayOfData: data
        },
        partials: {
            partial: 'partial-foo'
        }
    });
});

module.exports = router; 