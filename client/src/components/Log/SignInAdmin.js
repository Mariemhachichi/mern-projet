import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
 //import { SignInA } from "../redux/action/actionUser";


function SignInAdmin(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");


axios.defaults.withCredentials = true
    axios({
      method: "post",
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}api/admin/loginA`,
     //mode: "no-cors",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/dashb";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return(
    <div id="all-form-sign-in-admin">
      
       <form action=""  id="sign-up-form">
       <h3 className="titre-form-admin user__title">Inscrivez-vous afin d'être dirigé vers votre dashboard</h3><br></br>
    <label htmlFor="email">Email</label>
    <br />
    <input
      type="text"
      name="email"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
    <div className="email error"></div>
    <br />
    <label htmlFor="password">Mot de passe</label>
    <br />
    <input
      type="password"
      name="password"
      id="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />
    <div className="password error"></div>
    <br />
   <button onClick={handleLogin} type="submit"> <Link to='/dashb'>  Se connecter </Link></button>    
  </form>
   </div>
   )

 }

export default SignInAdmin