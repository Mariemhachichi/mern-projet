import axios from "axios";
import { deleteUsers } from "../request"; 
export const GET_USERS = "GET_USERS";

export const getUsers = () => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/user`)
        .then((res) => {
          dispatch({ type: GET_USERS, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };


export const deleteUsersA = (id)=> async (dispatch) => {
  try {
    await deleteUsers  (id);
    dispatch({
      type:'REACT_APP_DELETE_Users',
      payload:id
  })
    console.log("delete")
    dispatch(getUsers);
  } catch (error) {
    console.log(error);
  }
};