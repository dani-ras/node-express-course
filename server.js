const express = require('express')
// import express from 'express';
// import { Express } from 'express';  
// both lines above error: cannot use import statement outside a module.
const app = express();

app.listen(8000,function(){
    console.log("server is running")
})
