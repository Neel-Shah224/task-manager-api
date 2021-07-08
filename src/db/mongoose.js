const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex:true})
//../../softwares/mongodb/bin/mongod.exe --dbpath=../../softwares/mongodb-data

