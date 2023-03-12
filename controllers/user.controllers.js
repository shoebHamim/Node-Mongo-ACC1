const users=require('../users.json')
const randomUser=(req,res)=>{
  res.send(users[Math.floor(Math.random()*users.length)])
}
const allUser=(req,res)=>{
  if(JSON.stringify(req.query)!=='{}'){
    res.send(users.slice(0,parseInt(req.query.limit)))
  }
  else{
    res.send(users)
  }
}


module.exports={randomUser,allUser}