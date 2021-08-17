const express = require("express")
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path: './config/.env'});
const cookieParser = require('cookie-parser');

const app = express()
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
require ("./config/db")


app.use(express.json())
const cors = require("cors")
app.use(cors())
app.use(cookieParser());
 
//routes
// const joober = require('./routes/jooberRoute')
// app.use('/joober',joober)
app.use('/api/user',userRoutes)
app.use('/api/post',postRoutes)

// jwt
 app.get('*', checkUser);
 app.get('/jwtid', requireAuth, (req, res) => {
   res.status(200).send(res.locals.user._id)
 });

// server 
app.listen(process.env.PORT, () =>{
   console.log(`server run in port ${process.env.PORT}`)
}) 