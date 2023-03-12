const users=require('../users.json')
const randomUser=(req,res)=>{
  res.send(users[Math.floor(Math.random()*users.length)])
}


module.exports={randomUser}