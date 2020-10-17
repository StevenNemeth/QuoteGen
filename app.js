const express = require('express')
const path = require('path')
const app = express()
const data = require('./quotes.json')
const port = 3000
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});
app.get("/js/script.js", (req, res) => {
    res.sendFile(path.join(__dirname + '/js/script.js'))
});
app.get("/css/style.css", (req, res) => {
    res.sendFile(path.join(__dirname + '/css/style.css'))
});   
app.get("/GetQuote", (req, res) => {
   // res.sendFile(path.join(__dirname + '/css/style.css'))
    console.log(data)
    console.log(data[getRndInteger(0, data.length - 1)])
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data[getRndInteger(0, data.length - 1)]));
    
});   
app.listen(port, () => {
    console.log("Express server listning on port " + port);
});
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}