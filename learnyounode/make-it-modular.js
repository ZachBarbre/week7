'use strict'

const mymodule = require('./mymodule');

const toPrint = mymodule(process.argv[2], process.argv[3], function (err, list){
    if (err){
        console.error(err);
    }
    list.forEach(item => {
        console.log(item);
    });
});
