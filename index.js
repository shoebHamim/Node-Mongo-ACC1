const express=require('express')
const userRoute = require('./routes/v1/user.route')
const port=process.env.PORT||5000
app=express()
// to receive json file from client
app.use(express.json())
app.use('/user',userRoute)


app.get('/',(req,res)=>{
  res.send('server is up and running')
})
app.get('*',(req,res)=>{
  res.send('route not found')

})

app.listen(5000,()=>console.log(`server is running on ${port}`))