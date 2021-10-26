const express = require('express')
// import express from 'express';
// import { Express } from 'express';  
// both lines above error: cannot use import statement outside a module.
const app = express();

const mockUserData = [
    { name: "Mark" },
    { name: "Jill" }
]

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: "successfully got users. Nice!",
        users: mockUserData
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: "got one user",
        users: req.params.id
    })
})

app.listen(8000, function () {
    console.log("server is running")
})
