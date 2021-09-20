const mongoose = require('mongoose');
 const { isEmail } = require('validator');
 const bcrypt = require('bcrypt');

const adminSchema= new mongoose.Schema({

    nom: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
       
        trim: true
      },
      prenom: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
       
        trim: true
      },
      email: {
        type: String,
        required: true,
         validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6
      }



},
{    timestamps: true,}

);
// crypt mdp avant de save dans bd,
adminSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
 // signIN 

 //lorsque vous connecter
  adminSchema.statics.login = async function(email, password) {
    const  admin = await this.findOne({ email });
    if ( admin) {
         // compar  admin.password(signIn with paramtre password )
      const auth = await bcrypt.compare(password,  admin.password);
      if (auth) {
        return  admin;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect email')
  };
module.exports = admin = mongoose.model('admin',adminSchema)