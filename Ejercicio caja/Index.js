const express = require('express');
const app = express()

app.use(express.static('assets'));
app.use(express.static('node_modules'));
app.get('/', function(req, res){
    res.sendFile(__dirname + "/Index.html")
})
app.listen(8000)
console.log("Express esta corriendo");
console.log("http://localhost:8000")