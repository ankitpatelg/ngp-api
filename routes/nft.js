const express = require("express")
const router = express.Router()
router.get('fetchuser1',(req,res)=>{
    res.send(true)
})
router.get('fetchuser2',(req,res)=>{
    res.send(true)
})
router.get('fetchuser3',(req,res)=>{
    res.send(true)
})
router.get('fetchuser4',(req,res)=>{
    res.send(true)
})
 module.exports = router;