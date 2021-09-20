const AdminModel = require('./AdminModel')
const jwt = require('jsonwebtoken');
const {signUpAErrors, signInAErrors}=require('../utils/erroeAdmin')
// 3 jour
const maxAge = 3 * 24 * 60 * 60 * 1000;

const createTokenA = (id) => {
  //TOKEN_SECRET => cle secret pour decoder token 
  return jwt.sign({id}, process.env.TOKEN_SECRET_ADMIN, {
    expiresIn: maxAge
  })
};

module.exports = {
    signUpA : async (req,res)=> {
const {nom,prenom,email,password}=req.body


        try{
const admin = await AdminModel.create ({nom,prenom,email,password }) ;
     res.status(201).json({admin:admin._id});  
}
catch(err){
    const errors = signUpAErrors(err)
      res.status(200).send({errors})  
}
    },


    signInA : async (req,res)=>{
        const {email,password }=req.body
        try{
 // verifien si utilisateur existe 
 const admin = await AdminModel.login(email, password);
 // cret un token avec jwt 
// createToken=> function 
// parametre user._id => recuperer contenu email et password et stocker dans user
 const token = createTokenA(admin._id);
//res.cookie=> mettre token dans cookie
 //httpOnly: true, =>caracteristique pour securité de cookie => consultable que par serveur 
 res.cookie('jwt', token, { httpOnly: true, maxAge});
 res.status(200).json({ admin: admin._id})
        }
        catch(err){
            const errors = signInAErrors(err)
            res.status(200).send({errors}) 
        }
    }
    
}