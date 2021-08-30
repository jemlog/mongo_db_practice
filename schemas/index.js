const mongoose = require('mongoose')

const connect = () => {
  if(process.env.NODE_ENV !== 'production')
  {
    mongoose.set('debug',true)
  }
}

mongoose.connect('mongodb+srv://jemin:e1q3Qh66ySXWcG06@cluster0.mqlmq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

(error) => {
  if(error)
  {
    console.log('error',error)
  }
  else
  {
    console.log('connect success')
  }
})

mongoose.connection.on('error', (error) => {
  console.log('몽고db 연결 에러',error)
})

mongoose.connection.on('disconnection',() => {
  console.log('몽고 db 연결 실패!');
  connect()
})

module.exports = connect;
