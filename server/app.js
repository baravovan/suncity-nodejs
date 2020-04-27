const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const urlDb = 'mongodb://localhost/test'
const User = require('./model/user')
const City = require('./model/city')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.post('/api/user/login', (req, res) => {
    mongoose.connect(urlDb, function(err){
        if(err) throw err;
        User.find({
            username : req.body.username, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
        })
    });
})

app.post('/api/user/register', (req, res) => {
    mongoose.connect(urlDb, function(err){
        if(err) throw err;
        User.find({
            username : req.body.username
        }, function(err, user){
            if(err) throw err;
            if(user.length === 0){  
                User.create({
                    username : req.body.username, 
                    password : req.body.password,
                    name: req.body.name
                }, function(err, user){
                    if(err) throw err; 
                    return res.status(200).json({
                        status: 'success',
                        data: user
                    })
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Such username already exists'
                })
            }
        })  
    });
})

app.delete('/api/user/delete', (req, res) => {
    mongoose.connect(urlDb, function(err){
        if(err) throw err;
        User.find({
            username : req.body.username
        }, function(err, user){
            if(err) throw err;
            if(user.length > 0){  
                User.remove({
                    username : req.body.username, 
                }, function(err, user){
                    if(err) throw err; 
                    return res.status(200).json({
                        status: 'success',
                        message: 'User was deleted'
                    })
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Can not find user in DB'
                })
            }
        })  
    });
})

app.get('/api/city/list', (req, res) => {
    mongoose.connect(urlDb, function(err){
        if(err) throw err;
        City.find({}, function(err, cities){
            if(err) throw err;
            if(cities.length > 0){
                return res.status(200).json({
                    status: 'success',
                    data: cities
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Empty list. Cities collection is empty'
                })
            }
        })
    });
})

app.post('/api/city/create', (req, res) => {
    mongoose.connect(urlDb, function(err){
        if(err) throw err;
        console.log('try to create ' + req.body.name);
        City.find({
            name : req.body.name
        }, function(err, city){
            if(err) throw err;
            if(city.length === 0){  
                City.create({
                    name : req.body.name, 
                    lattitude : req.body.lattitude,
                    longitude: req.body.longitude
                }, function(err, city){
                    if(err) throw err; 
                    return res.status(200).json({
                        status: 'success',
                        data: city
                    })
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Such cityname already exists'
                })
            }
        })  
    });
})

app.delete('/api/city/delete', (req, res) => {
    mongoose.connect(urlDb, function(err){
        if(err) throw err;
        City.find({
            name : req.body.name
        }, function(err, city){
            if(err) throw err;
            if(city.length > 0){  
                City.remove({
                    name : req.body.name, 
                }, function(err, city){
                    if(err) throw err; 
                    return res.status(200).json({
                        status: 'success',
                        message: 'City was deleted'
                    })
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Can not find city in DB'
                })
            }
        })  
    });
})

app.get('/api/city/get', (req, res) => {
    mongoose.connect(urlDb, function(err){
        if(err) throw err;
        City.find({
            name : req.query.name
        }, function(err, city){
            if(err) throw err;
            if(city.length === 1){
                return res.status(200).json({
                    status: 'success',
                    data: city
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Can not find city in DB'
                })
            }
        })  
    });
})

app.listen(3000, () => console.log('server running on port 3000!'))