const express=require('express');
const path=require/('path')
const app= express();
const port=3030;

app.use(express.static('public')); 

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/babbage',(req,res)=>res.sendFile(path.join(__dirname,'views','babbage.html')))

/*
● / -> Debe direccionar al recurso index.html.
● /babbage -> Debe direccionar al recurso babbage.html
● /berners-lee -> Debe direccionar al recurso berners-lee.html.
● /clarke -> Debe direccionar al recurso clarke.html.
● /hamilton -> Debe direccionar al recurso hamilton.html.
● /hopper -> Debe direccionar al recurso hopper.html.
● /lovelace -> Debe direccionar al recurso lovelace.html.
● /turing-> Debe direccionar al recurso turing.html.
*/


/*servidor*/
app.listen(port,()=>console.log('server runing in http://localhost:'+port))