'use strict'

module.exports = function(filePath, fileExt, callback){
    const fs = require('fs');
    fs.readdir(filePath, function (err, fileList){
        if (err){
            callback(err);
        }
        callback (null, fileList.map(file => {
            if (file.split('.')[1] === fileExt){
                return file;
            }    
        }));
})}