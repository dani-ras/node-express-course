const express = require('express')
// import express from 'express';
// import { Express } from 'express';  
// both lines above error: cannot use import statement outside a module.

const app = express();

app.use(express.json());

const mockUserData = [
    { name: "Mark" },
    { name: "Jill" }
]

//  add GET route
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: "successfully got users. Nice!",
        users: mockUserData
    })
})
// add dynamic GET route
app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: "got one user",
        users: req.params.id
    })
})

app.post('/login', (req, res) => {
    const username = req.body.username,
        password = req.body.password,

        // should come from DB
        mockUsername = 'BillyTheKid',
        mockPassword = 'superSecret'

    if (username == mockUsername && password == mockPassword) {
        // jwt.sign here for making encrypted token
        res.json({
            success: true,
            message: 'password and username match',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

app.listen(8000, function () {
    console.log("server is running")
})
