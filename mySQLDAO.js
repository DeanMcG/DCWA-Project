var mysql = require('promise-mysql');

var pool

 mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'geography',
    insecureAuth: true
})
.then((result) => {
    pool = result
})
.catch((error) => {
    console.log(error)
});

var getCountries = function() {
    return new Promise((resolve, reject) => {
pool.query('select * from country')

        .then((result) => {
            resolve(result)
        })
        .catch((error) => {
            reject(error)
        })
    })

}

var getCities = function() {
    return new Promise((resolve, reject) => {
pool.query('select * from city')

        .then((result) => {
            resolve(result)
        })
        .catch((error) => {
            reject(error)
        })
    })

}



    module.exports = { getCountries, getCities }