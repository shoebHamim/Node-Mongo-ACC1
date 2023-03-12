const { Router } = require("express");
const router=Router()
const userControllers=require('../../controllers/user.controllers')

router.get('/random',userControllers.randomUser)

// sends all users
// if limit=number  query is used to limit user
router.get('/all',userControllers.allUser)





module.exports=router