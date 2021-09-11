import React from 'react';
import  './../../styles/pages/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck,faShieldAlt,faHandshake,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

const Partie1 = () => {
    const element = <FontAwesomeIcon icon={faUserCheck} size="lg" color="#007bff"/>
    const element1 = <FontAwesomeIcon icon={faShieldAlt} size="lg" color="#007bff"/>
    const element2 = <FontAwesomeIcon icon={faHandshake} size="lg" color="#007bff"/>
    const element3 = <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#007bff"/>
    return ( 
        <div>
        <div className="part1">
            <h1>Trouvez le prestataire idéal <br></br>pour tous les services du <br></br>quotidien</h1>
        </div>
        <ul className="ul">
            <li>{element} Préstataires qualifiés</li>
            <li>{element1} Préstations assurées</li>
            <li>{element2} Budget respecté</li>
            <li>{element3} Service encadré</li>
        </ul>
        <hr className="hr"></hr>
        </div>
    );
};

export default Partie1;