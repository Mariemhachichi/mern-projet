import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./../actions/users.actions";
import "./../styles/pages/home.css";
import { deleteUsersA } from "./../actions/users.actions";
import ModalAddAdmin from "../components/ModalAddAdmin";
import Test from "./test";

const Dashb = () => {
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const deleteclientC = (id) => {
    dispatch(deleteUsersA(id));
  };
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="body">
      <ModalAddAdmin />
      <Test />

      <div className="cart carte2"></div>
    </div>
  );
};

export default Dashb;
