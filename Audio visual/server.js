const express = require('express');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname+'/')));

app.listen(3000,"127.0.0.1",function(){
    console.log('开启了');
});