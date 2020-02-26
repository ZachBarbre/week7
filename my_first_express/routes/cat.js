const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals:{
            title: "Cats, Cats, Cats"
        },
        partials:{
            partial: 'partial-cat'
        }
    })
});

module.exports = router; 
