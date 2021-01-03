var express = require('express')
var mySQLDAO = require('./mySQLDAO')
var mongoDAO = require("./mongoDAO")
var bodyParser = require('body-parser')


var app = express()

app.use(bodyParser.urlencoded({ extended: false }))


app.set('view engine', 'ejs')


app.get('/', (req,res)=>{
    res.render("homePage")

 

})

app.get('/listCountries', (req,res) => {
        mySQLDAO.getCountries()
        .then((result) => {
            console.log(result)
            res.render('showCountries', {countries:result})
        })
        .catch((error) => {
            res.send(error)
        })

})

app.get('/listCities', (req,res) => {
    mySQLDAO.getCities()
    .then((result) => {
        console.log(result)
        res.render('showCities', {cities:result})
    })
    .catch((error) => {
        res.send(error)
    })

})

app.get('/listHeadsOfState', (req,res) => {
    mongoDAO.getHeadsOfState()
    .then((documents) => {
        res.render('showHeadsOfState', {heads:documents})
    })
    .catch((error) => {
        res.send(error)
    })
})

app.get('/addCountry', (req, res) => {
        res.render("addCountry")
})

app.post('/addCountry', (req, res) => { 
    console.log(req.body)
    
})



app.listen(3000, () => {
    console.log("Listening at Port 3000")
})





