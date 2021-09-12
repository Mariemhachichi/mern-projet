import React from 'react';
import {Link} from 'react-router-dom';
import  './../styles/pages/home.css'

const Service = () => {
    return (
        <div className="service">
            <h1>De quel service avez-vous besoin ?</h1>
            <p>Pour chaque situation, trouvez le prestataire dont les compétences <br /> répondent à vos attentes et à votre niveau d’exigence.</p>
            <div className="flexi">
            <div>
            <Link to="/bricolage"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/20-e8e98c9d1cf9069f52eeeb9826bcccc526915bed259858e7e44cbcfd04bc0c60.svg" alt ="img" className="image"/></Link>
            <h3>Bricolage</h3>
            </div>
            <div>
            <Link to="/jardinage"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/21-28ccab52831cd1868c6744f77d7fe7c304d645f0a6d3237351bd0692a646fb96.svg" alt ="img" className="image"/></Link>
            <h3>Jardinage</h3>
            </div>
            <div>
            <Link to="/demenagement"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/22-6bc86dbb1390e1b1a506269134feece1e0ac5028143c9f65b81d52b887af1a87.svg" alt ="img" className="image"/></Link>
            <h3>Déménagement</h3>
            </div>
            <div>
            <Link to="/menage"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/23-2cef76ae43c8eca7e91cb445550a4a8931f7e7aea3a7e7c624fc7b155a989ddc.svg" alt ="img" className="image"/></Link>
            <h3>Ménage</h3>
            </div>
            <div>
            <Link to="/enfants"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/28-7d5972fafb408b81cf6b28d3bee60843e4b0838fd4df54193e857620a89fb004.svg" alt ="img" className="image"/></Link>
            <h3>Enfants</h3>
            </div>
            <div>
            <Link to="/animaux"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/24-98f36dcebef3e79fdad340e805f36f32d0cc9369066a317e5ee5096f8f9fa79f.svg" alt ="img" className="image"/></Link>
            <h3>Animaux</h3>
            </div>
            <div>
            <Link to="/informatique"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/25-bbf612f1c76ab9f689d1a2acc2097c9b7044f394ef539605576d830d570d26d2.svg" alt ="img" className="image"/></Link>
            <h3>Informatique</h3>
            </div>
            <div>
            <Link to="/aide"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/26-20060e9cd170d149293f337dd772800e836f8ab07d5bd2601e52c941e421d4a9.svg" alt ="img" className="image"/></Link>
            <h3>Aide à domicile</h3>
            </div>
            <div>
            <Link to="/cours"> <img src="https://d1b747rczec55w.cloudfront.net/assets/categories/29-018d670dbb24035a918f3a89ca4dbec5e9e0423897d633ccdf5e273af001ac4d.svg" alt ="img" className="image"/></Link>
            <h3>Cours particuliers</h3>
            </div>
            </div>
        </div>
    );
};

export default Service;