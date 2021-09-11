import React from 'react';
import {Link} from 'react-router-dom';
import  './../styles/pages/home.css'

const Service = () => {
    return (
        <div className = "service">
            <h1>De quel service avez-vous besoin ?</h1>
            <p>Pour chaque situation, trouvez le prestataire dont les compétences <br /> répondent à vos attentes et à votre niveau d’exigence.</p>
            <Link to="/bricolage"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/20-e8e98c9d1cf9069f52eeeb9826bcccc526915bed259858e7e44cbcfd04bc0c60.svg" alt ="img" className="image"/></Link>
            <h3>Bricolage</h3>
        </div>
    );
};

export default Service;