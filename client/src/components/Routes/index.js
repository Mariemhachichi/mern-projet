import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Actualite from '../../pages/Actualite';
import Navbar from '../Navbar';
import Bricolage from '../categories/Bricolage';


const index = () => {
    return (
       <Router>
           <Navbar />
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/profil" exact component={Profil} />
               <Route path="/actualite" exact component={Actualite} />
               <Route path="/bricolage" exact component={Bricolage} />
             <Redirect to="/" />
           </Switch>
       </Router>
    );
};

export default index;