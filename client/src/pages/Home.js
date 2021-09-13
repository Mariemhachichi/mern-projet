import React from 'react';
import Footer from '../components/Footer';
import Partie1 from '../components/Home/Partie1';
import Partie2 from '../components/Home/Partie2';
import Service from '../components/Service';


const Home = () => {
    return (
        <div>                           
            <Partie1 />
            <Service />
            <Partie2 />
            <Footer />
        </div>
    );
};

export default Home;