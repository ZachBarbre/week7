const express = require('express'), 
    router = express.Router();

router.get('/', (request, response) => {
    response.render('template', {
        locals: {
            title: 'Hello World'
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

module.exports = router; 

