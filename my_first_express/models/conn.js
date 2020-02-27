const host = 'rajje.db.elephantsql.com', 
  database = 'ohhdjrvp', 
  user = 'ohhdjrvp', 
  password = 'H5qkuqkn0ACVHaiGZyunDrs6jdSfbr4M'; 

const options = {
    host: host, // localhost
    database: database, // database name
    user: user, // don't include in afternoon asignmen
    password: password // don't include in afternoon asignment 
};

const pgp = require('pg-promise')({
    query: function(e) {
        console.log('query :', e.query);
    }
});

const db = pgp(options);

module.exports = db;