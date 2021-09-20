import { GET_USERS } from "../actions/users.actions";

const initialState = {};

export default function usersReducer(state = initialState, action) {
  const {type,payload}= action
  switch (type) {
    case GET_USERS:
      return action.payload;

      case 'REACT_APP_DELETE_Users':
        return {
          ...state,
          dataUsersss: state.dataUsersss.filter(
            data => data._id !== payload
          )
        };

    default:
      return state;
  }
}
