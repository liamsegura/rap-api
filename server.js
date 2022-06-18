const express = require('express')
const app = express()
const PORT = 9000


const rappers = {

    "21 savage" : {
        "age" : 29,
        "birthName" : "Sheyaa Bin Abraham-Joseptj",
        "birthLocation" : "London, England"
    },
    "chance the rapper" : {
        "age" : 29,
        "birthName" : "Chancelor Bennet",
        "birthLocation" : "Chicago, Illinois"
    },
    "unknown" : {
        "age" : "unknown",
        "birthName" : "unknown",
        "birthLocation" : "unknown"
    }
}


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
    console.log('We online')
})

app.get('/api/:name',(req,res)=>{
    const rapperName = req.params.name.toLowerCase()
        if(rappers[rapperName]){
            res.json(rappers[rapperName])
        }else{
            res.json(rappers["unknown"])
        }
})

app.get('/api/age/:name',(req,res)=>{
    const rapperName = req.params.name.toLowerCase()
        if(rappers[rapperName]){
            res.json(rappers[rapperName].age)
        }else{
            res.json(rappers["unknown"].age)
        }
})

app.get('/api/birthname/:name',(req,res)=>{
    const rapperName = req.params.name.toLowerCase()
        if(rappers[rapperName]){
            res.json(rappers[rapperName].birthName)
        }else{
            res.json(rappers["unknown"].birthName)
        }
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})