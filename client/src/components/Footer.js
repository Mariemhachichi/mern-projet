import React from 'react';
import  './../styles/pages/home.css'

const Footer = () => {
    return (
        <div>
             <hr className="hr"/>
              <footer>
            <div class="footer">
               
                <div>
                     <ul>
                            <img src="./img/logo.png" alt="" width="80px" height="70px"/>
                            <h3>Goojob</h3>
                        </ul>
                    </div>
                <div>
                    <h4>Découvrir</h4>
                    <ul>
                        <li><a href="">Nos conseils</a></li>
                        <li><a href="">Nos actualités</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Informations utiles</h4>
                    <ul>
                        <li><a href="">Demander un service</a></li>
                        <li><a href="">Devenir jobber</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>À propos</h4>
                        <li><a href="">Qui sommes-nous</a></li>
                        <li><a href="">Espace presse</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h4>Confidentialité</h4>
                        <li><a href="">Plan du site</a></li>
                        <li><a href="">Informations légales</a></li>
                        <li><a href="">Politique de protection</a></li>
                        <li><a href="">Politique de cookies</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p>© Copyright 2021</p>
        </footer>
        </div>
    );
};

export default Footer;