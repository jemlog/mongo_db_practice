const express = require('express')
const User = require('../schemas/user')
const Comment = require('../schemas/comment')

const router = express.Router()

router.post('/', async (req,res,next) => {
  try
  {
    const comments = await Comment.create({
      commenter : req.body.id,
      comment : req.body.comment
    })
    console.log(comments)
    const result = await Comment.populate(comments, {path : 'commenter'})
    res.json(result)
  }
  catch(error)
  {
    console.log(error)
    next(error)
  }
})

module.exports= router;