const express=require('express')
const hbs=require('hbs')
const path=require('path')
const app=express()
const port=process.env.PORT ||3000
const { dirname } = require('path');
const viewspath=path.join(__dirname,'../Templates/views')
const partialsPath=path.join(__dirname,'../Templates/partials')
app.set('view engine','hbs');
app.set('views',viewspath);
hbs.registerPartials(partialsPath)
// console.log(__dirname)
const pathTODir=path.join(__dirname,'../public')
app.use(express.static(pathTODir))
app.get('',(req,res)=>{
    res.render('colorgame')
})
app.listen(port,()=>{
    console.log('server is up and running '+port)
})