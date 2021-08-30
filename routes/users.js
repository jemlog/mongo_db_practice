const express = require('express')
const User = require('../schemas/user')
const Comment = require('../schemas/comment')

const router = express.Router()

router.route('/')
.get(async (req,res,next) => {

  try{
    console.log(req.body.name)
     const users = await User.find({})
     res.json(users)
  }
  catch(err)
  {
    console.log(err)
    next(err)
  }
})
.post(async (req,res,next) => {
  try
  {  
     const user = await User.create({name : req.body.name, age : req.body.age , married : req.body.married})
     console.log(user)
     res.status(201).json(user)
  }
  catch(error)
  {
    console.log(error)
    next(error)
  }
})

router.get('/:id/comments', async (req,res,next) => {
  try
  {
   const comments = await Comment.find({commenter : req.params.id}).populate('commenter')  // 해당 커멘터의 커멘트 다 불러오고 populate로 user까지 불러오기
   res.json(comments)
  }
  catch(err)
  {
    console.log(err)
    next(err)
  }
})

module.exports = router;