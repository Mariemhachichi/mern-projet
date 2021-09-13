import React from 'react';
import Footer from '../components/Footer';
import Partie1 from '../components/Home/Partie1';
import Service from '../components/Service';


const Home = () => {
    return (
        <div>                           
            <Partie1 />
            <Service />
            <Footer />
        </div>
    );
};

export default Home;