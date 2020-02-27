const express = require('express'),
    router = express.Router(),
    ceoModel = require('../models/ceosModel');

router.get('/', async (request, response) => {
    const execData = await ceoModel.getAll();
    response.render('template', {
        locals: {
            title: 'Apple Ceos',
            arrayOfData: execData
        },
        partials: {
            partial: 'partial-ceos'
        }
    });
});

module.exports = router; 