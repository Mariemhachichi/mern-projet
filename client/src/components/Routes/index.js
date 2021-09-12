import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Actualite from '../../pages/Actualite';
import Navbar from '../Navbar';
import Bricolage from '../categories/Bricolage';
import Jardinage from '../categories/Jardinage';
import Demenagement from '../categories/Demenagement';
import Menage from '../categories/Menage';
import Enfants from '../categories/Enfants';
import Animaux from '../categories/Animaux';
import Informatique from '../categories/Informatique';
import Aide from '../categories/Aide';
import Cours from '../categories/Cours';

const index = () => {
    return (
       <Router>
           <Navbar />
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/profil" exact component={Profil} />
               <Route path="/actualite" exact component={Actualite} />
               <Route path="/bricolage" exact component={Bricolage} />
               <Route path="/jardinage" exact component={Jardinage} />
               <Route path="/demenagement" exact component={Demenagement} />
               <Route path="/menage" exact component={Menage} />
               <Route path="/enfants" exact component={Enfants} />
               <Route path="/animaux" exact component={Animaux} />
               <Route path="/informatique" exact component={Informatique} />
               <Route path="/aide" exact component={Aide} />
               <Route path="/cours" exact component={Cours} />
             <Redirect to="/" />
           </Switch>
       </Router>
    );
};

export default index;