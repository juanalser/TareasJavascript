const express = require('express')

const app = express()

app.get('/PaginaWeb', function (req, res){
    res.sendFile(__dirname + "/Index.html")
})
app.listen(1000)
console.log("Express esta corriendo");
console.log("https://localhost:1000")