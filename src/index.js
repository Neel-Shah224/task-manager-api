const express = require('express')
require('./db/mongoose')


const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is Up At port '+port)
})


// app.use( (req,res,next) => {
//     if(req.method === 'GET'){
//         res.send('GET Method is Prohibited')
//     }
//     else{
//         next()
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('We are under Maintainance . we will resume the website soon')
// })
