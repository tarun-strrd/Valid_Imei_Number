const express = require('express');
const imei = require('./routes/imei.js');
const app= express();
const port = 3000;
app.use(express.json())
app.get('/',(req,res)=>{
    res.send(`IMEI Validator`);
});
app.use('/api/v1/imei',imei);
app.listen(port, console.log(`server listenin on port ${port}`))