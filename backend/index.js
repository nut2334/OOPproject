var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express(); //คำสั่ง ส่งข้อมูล
var fs = require('fs');
var axios = require('axios');

var list =require('./nut.json');

app.use(cors());
app.use(bodyParser());

const base64_encode=(file)=>{
    var bitmap = fs.readFileSync(file);
    return new Buffer(bitmap).toString('base64'); //แปลงเป็น64
}

app.post('/image',function(req, res){
    const image = (req.body.image);
    axios.get('http://127.0.0.1:1150/api', { params: {img: image } }) //py paramsแปะไปกับลิงค์
    return res.send(base64_encode('./image/photo.jpg'))
})

app.post('/list',function(req,res){
    return res.send(list);
})

app.listen(9999, function () {
    console.log('Listening on http://localhost:9999/');
});