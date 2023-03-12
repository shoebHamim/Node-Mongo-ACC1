const express=require('express')
const userRoute = require('./routes/v1/user.route')
app=express()








app.use('/user',userRoute)









app.get('/',(req,res)=>{
  res.send('server is up and running')
})

app.listen(5000,()=>console.log('server running on port 5000'))