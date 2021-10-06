import React, { useEffect } from "react";
import "../styles/dshb.scss";
import { deleteUsersA } from "./../actions/users.actions";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./../actions/users.actions";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Test = () => {
  const element = (
    <FontAwesomeIcon icon={faTrashAlt} size="lg" color="#A52A2A" />
  );

  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const deleteclientC = (id) => {
    dispatch(deleteUsersA(id));
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <section class="wrapper">
        <main class="row title">
          <ul>
            <li> Secteur</li>
            <li>Photo</li>
            <li>Pseudo</li>
            <li>télèphone</li>
            <li>Supprimer</li>
          </ul>
        </main>
        <section class="row-fadeIn-wrapper">
          {Object.keys(usersData)
            .filter((el) => usersData[el])
            .map((el, key) => (
              <article class="row fadeIn nfl" key={key}>
                <ul>
                  <li className="metier">{usersData[el].metier}</li>
                  <li>
                    <img
                      src={usersData[el].picture}
                      alt="img"
                      class="card__image"
                      className="imgdshb"
                    />
                  </li>
                  <li>{usersData[el].pseudo}</li>
                  <li>{usersData[el].tel}</li>
                  <li onClick={() => deleteclientC(usersData[el]._id)}>
                    {element}
                  </li>
                </ul>
              </article>
            ))}
        </section>
      </section>
    </div>
  );
};

export default Test;
