import React, { useState } from "react";
import axios from "axios";
import "../styles/dshb.scss";

const ModalAddAdmin = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [metier, setMetier] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
          metier,
          tel,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <>
        <form
          action=""
          onSubmit={handleRegister}
          id="sign-up-form"
          className="back"
        >
          <h1>Ajouter Joober</h1>
          <br />
          <br />
          <br />
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <br />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="metier">Secteur</label>
          <br />
          <input
            type="text"
            name="metier"
            onChange={(e) => setMetier(e.target.value)}
            value={metier}
          />
          <div></div>
          <br />

          <label htmlFor="tel">télèphone</label>
          <br />
          <input
            type="text"
            name="tel"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
          <div></div>
          <br />
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
          <label htmlFor="password-conf">Confirmer mot de passe</label>
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />

          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cond"
            >
              conditions générales
            </a>
          </label>
          <div className="terms error"></div>

          <input type="submit" value="Valider inscription" />
        </form>
      </>
    </div>
  );
};

export default ModalAddAdmin;
