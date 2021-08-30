const express = require('express')
const app = express()
const UserRouter = require('./routes/users')
const CommentRouter = require('./routes/comments')
const connect = require('./schemas')

connect()

app.set('port',process.env.PORT || 3000)

app.use(express.json())
app.use('/user',UserRouter)
app.use('/comments',CommentRouter)


app.use((req,res,next) => {
  next(err)
})

app.use((error,req,res,next) => {
  console.error(error)
})

app.listen(app.get('port'), () => {
  console.log('success')
})