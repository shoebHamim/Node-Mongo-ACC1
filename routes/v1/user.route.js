const { Router } = require("express");
const router=Router()
const userControllers=require('../../controllers/user.controllers')

router.get('/random',userControllers.randomUser)





module.exports=router