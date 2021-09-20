const express = require("express")
const userRoutes = require('./routes/user.routes');
const adminRoutes = require ('./admin/AdminRoute')
const postRoutes = require('./routes/post.routes');
require('dotenv').config({path: './config/.env'});
const cookieParser = require('cookie-parser');

const app = express()
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
require ("./config/db")



app.use(express.json())


const cors = require("cors")
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));


app.use(cookieParser());
 
//routes
// const joober = require('./routes/jooberRoute')
// app.use('/joober',joober)
app.use('/api/user',userRoutes)
app.use('/api/post',postRoutes)
app.use('/api/admin',adminRoutes)


// jwt
 app.get('*', checkUser);
 app.get('/jwtid', requireAuth, (req, res) => {
   res.status(200).send(res.locals.user._id)
 });

// server 
app.listen(process.env.PORT, () =>{
   console.log(`server run in port ${process.env.PORT}`)
}) 