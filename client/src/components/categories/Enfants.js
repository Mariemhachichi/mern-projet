import React , {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions/users.actions";
import  './../../styles/pages/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck,faShieldAlt,faHandshake,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer';



const Enfants = () => {
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
        <h1>Découvrez tout nos <br /> services pour le bien <br /> -être de vos enfants</h1>
        </div>
        <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/28v-624454cf3bfdf11d841af439d90b32372dac438d39b77804ff806f3eecdb056b.svg" alt="img" className="imgb"/>
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
            {Object.keys(usersData).filter(el=>usersData[el].metier==="Enfants").map((el,key) => (
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

export default Enfants;


