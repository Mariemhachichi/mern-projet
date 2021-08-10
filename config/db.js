const mongoose = require ('mongoose');


  mongoose.connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.xw37n.mongodb.net/goojob",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
      .then(() =>console.log('data_base connected'))
      .catch((err)=>console.log('failed to conncet to mongoDb',err));



