const fs=require('fs')
const users=require('../users.json')

const saveToJson=async(data)=>{
  await fs.writeFile('users.json',JSON.stringify(data),err=>{
    if(err){
      console.log(err);
      return 'Failed'
    }
    else{
      return 'User saved'
    }
  })
}


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

const saveUser=async(req,res)=>{
  const newUser=req.body
  if(newUser.Id&&newUser.gender&&newUser.name&&newUser.contact&&newUser.address&&newUser.photoUrl){
    users.push(newUser)
    await saveToJson(users) 
    res.send('New User Saved!')
  }
  else{
    res.send('Invalid Body')
  }
}



const updateUser=async(req,res)=>{
  const updatingUser=req.body
  const updatingId=req.body.Id
  const updatingIndex=users.findIndex(elem=> elem.Id===updatingId)
  if(updatingIndex!==-1){
    const updatingProperties=Object.keys(updatingUser)
    for (i of updatingProperties){
      users[updatingIndex][i]=updatingUser[i]
    }
    await saveToJson(users)
    res.send('User Updated!')
  }
  else{
    res.send('Invalid Id')
  }
}




module.exports={randomUser,allUser,saveUser,updateUser}