import React , {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../actions/users.actions";
import  './../../styles/pages/home.css'


const Bricolage = () => {
    const usersData = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( getUsers());
    },[]);
    return (
        <div>
            <br /><br /><br />
            
            {Object.keys(usersData).filter(el=>usersData[el].metier==="Bricolage").map((el,key) => (
              <div class="container" key={key}> 
              <div class="card">
              <img src={usersData[el].picture} alt ="img" class="card__image" />
               <p class="card__name">{usersData[el].pseudo}</p>
               <div class="grid-container">
               <div class="grid-child-posts">
                <p>Secteur:{usersData[el].metier}</p>
                </div>
                <div class="grid-child-followers">
                <p>Tel:{usersData[el].tel}</p>
                </div>
                </div>
               <p className="p"> {usersData[el].bio}</p>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Bricolage;


