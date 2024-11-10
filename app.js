const express = require("express")
const app = express()

const port = 3000

app.set("view engine","ejs")
app.set("views","views")

app.use(express.static('public'))

let chackWorkingHours= (req,res,next) =>{
    const now = new Date() //now
    let day = now.getDay() //day
    let hour = now.getHours() //hour
    if(day>=1 && day <=5 && hour>=9 && hour<=17){
        next()
    }else {
        res.send("we're not working right now, come back later!")
    }
}

app.use(chackWorkingHours)

app.get("/", (req,res)=>{

    res.render('index', { title: 'Home' })
})

app.get("/services", (req,res)=>{
    res.render("services",{title: 'services'})
})

app.get("/contact", (req,res)=>{
    res.render("contact",{title: 'contact'})
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})