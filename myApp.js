let express = require('express');
let app = express();
let dotenv = require('dotenv');

dotenv.config()

app.use("/public", express.static(__dirname + "/public"));


app.get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE==="uppercase"){
        res.json({"message":"HELLO JSON"})
    }else{
         res.json({"message": "Hello json"}) 
    }


})




app.get('/',(req,res)=>{
    return res.sendFile(__dirname + '/views/index.html')
})
































 module.exports = app;
