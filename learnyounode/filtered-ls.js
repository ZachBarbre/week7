'use strict'

const fs = require('fs');
const filePath = process.argv[2];
const fileExtention = process.argv[3];

fs.readdir(filePath, function (err, fileList){
    if (err){
        console.error(err);
    }
    fileList.forEach(file => {
        if (file.split('.')[1] === fileExtention){
            console.log(file);
        }    
    });
})