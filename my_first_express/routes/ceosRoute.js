const express = require('express'),
    router = express.Router(),
    ceoModel = require('../models/ceosModel');

router.get('/:id?', async (request, response) => {
    const { id } = request.params; 
    let execData = [];
    if (!!id){
        execData = await ceoModel.getCEO(id);
    } else {
        execData = await ceoModel.getAll();
    }

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