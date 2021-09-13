import React , {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions/users.actions";
import  './../../styles/pages/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck,faShieldAlt,faHandshake,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer';



const Cours = () => {
    const usersData = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( getUsers());
    },[]);

    const element = <FontAwesomeIcon icon={faUserCheck} size="lg" color="#007bff"/>
    const element1 = <FontAwesomeIcon icon={faShieldAlt} size="lg" color="#007bff"/>
    const element2 = <FontAwesomeIcon icon={faHandshake} size="lg" color="#007bff"/>
    const element3 = <FontAwesomeIcon icon={faPhoneAlt} size="lg" color="#007bff"/>
    return (
    <div>
        <div className="flex">
        <div className="item">
        <p>Trouvez le prestataire idéal, partout en Tunisie, en quelques minutes.</p>
        <h1>Réservez des cours <br /> particuliers pour les<br /> petits et les grands</h1>
        </div>
        <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/29v-31d43f16020ba6b814740ff84bb6801d453b2564bc53267d417e20c8d0916feb.svg" alt="img" className="imgb"/>
        </div>
        <hr className="hr" />
        <ul className="ull">
            <li>{element} Préstataires qualifiés</li>
            <li>{element1} Préstations assurées</li>
            <li>{element2} Budget respecté</li>
            <li>{element3} Service encadré</li>
        </ul>
        <hr className="hr"></hr>

        <div className="cart">
            {Object.keys(usersData).filter(el=>usersData[el].metier==="Cours").map((el,key) => (
              <div class="container" key={key}> 
              <div class="card">
              <img src={usersData[el].picture} alt ="img" class="card__image" />
               <p class="card__name">{usersData[el].pseudo}</p>
               <div class="grid-container">
               <div>
                <p>Secteur:{usersData[el].metier}</p>
                </div>
                <div >
                <p>Tel:{usersData[el].tel}</p>
                </div>
                </div>
               <p className="p"> {usersData[el].bio}</p>
                </div>
                </div>
            ))}
        </div>
        <Footer />
    </div>
    );
};

export default Cours;


