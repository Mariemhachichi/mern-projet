import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck,faShieldAlt,faHandshake,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


const Partie2 = () => {
    const element = <FontAwesomeIcon icon={faUserCheck} size="lg" color="#007bff"/>
    const element1 = <FontAwesomeIcon icon={faShieldAlt} size="lg" color="#007bff"/>
    const element2 = <FontAwesomeIcon icon={faHandshake} size="lg" color="#007bff"/>
    const element3 = <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#007bff"/>
    return (
        <div className="part2">
            <h1>Comment ça marche ?</h1>
            <div className="ul">
                <div>
                    <img src="https://d1b747rczec55w.cloudfront.net/assets/hiw-icon1-c2b46308c928256d1bc34d7fcb07a162a7140c3f120d810f55dc9db87de74627.svg" alt="img" className="imgp"/>
                    <h2>Choisir des Jobbers</h2>
                    <p>Nous avons des Jobbers <br/> pour des travaux <br /> de toute taille</p>
                </div>
                <div>
                    <img src="https://d1b747rczec55w.cloudfront.net/assets/hiw-icon2-641d5c09d8789cb41711d0e41557929d8ee2a196bab3b2e47b875f03132b960e.svg" alt="img" className="imgp"/>
                    <h2>Réservez votre jobber</h2>
                    <p>Des jobbers compétents et <br/> proches de chez vous vous<br /> proposent leurs services</p>
                </div>
                <div>
                    <img src="https://d1b747rczec55w.cloudfront.net/assets/hiw-icon3-b21fb9288ea360942c1a3a595cd3d5e481725e37e615bb42e74ced0a7d98a56d.svg" alt="img" className="imgp"/>
                    <h2>Souriez, c'est fait !</h2>
                    <p>Votre jobber vous rend service<br/>au prix et à la date convenus</p>
                </div>
            </div>
            <div className="part3">
                <h1>Spécialiste du service</h1>
                <p>Tentez l’expérience et faites nous confiance .<br />La satisfaction de nos utilisateurs est notre priorité.</p>
            </div>
            <div className="p3">
            <div>   
            <ul className="uli">
            <li>{element}</li>
            <li>{element1}</li>
            <li>{element2} </li>
            <li>{element3}</li>
            </ul>
            </div>
            <div>   
            <ul className="uli1">
            <li>Préstataires qualifiés</li>
            <li>Préstations assurées</li>
            <li>Budget respecté</li>
            <li>Service encadré</li>
        </ul>
        </div>
        <div>   
            <ul className="uli">
            <li className="p1">Tous les prestataires sont vérifiés,<br /> suivis et évalués pour chaque <br />service rendu afin de vous garantir<br /> le meilleur niveau de satisfaction.</li>
            <li className="p1">Toutes les prestations sont <br />couvertes par notre assurance, <br />qu’il s’agisse de dommages <br />corporels ou matériels occasionnés <br />chez vous, sans franchise.</li>
            <li className="p1">Tous les prix sont définis<br /> à l’avance, les jobbers s’engagent <br />à les respecter. </li>
            <li className="p1">Notre service client est à votre <br />disposition 7j/7 pour vous assurer<br /> une expérience parfaite de la prise <br />de commande jusqu'à la fin de la <br />prestation.</li>
        </ul>
        </div>
            </div>
         
        </div>
    );
};

export default Partie2;