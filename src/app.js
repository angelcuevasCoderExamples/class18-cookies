const express = require('express');
const cookieParser = require('cookie-parser')
const port = 8080; 

const app = express(); 
app.use(cookieParser('ourSecret'))


/** cookies */
app.get('/setCookie',(req, res)=>{ //login 
    res.cookie('coderCookie', 'Useful cookie', {maxAge: 120*1000, signed: true}) 
    res.send('Cookie has been set')
})

app.get('/getCookie', (req, res)=>{
    const cookies = req.signedCookies; 
    res.send(cookies);
})

app.get('/deleteCookie',(req, res)=>{
    res.clearCookie('coderCookie')
    res.send('Cookie was removed')
})

app.get('/*', (req, res)=>{
    res.send('some content')
})

app.listen(port, ()=>console.log(`running on port ${port}`))