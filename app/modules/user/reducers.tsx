// Action Types
import {SET_USER, UNSET_USER} from './actions';
// State
export interface UserState {
  userInfo: object;
}
const initialState: UserState = {
  userInfo: {},
};
// Reducer
export default (state = initialState, action: any): UserState => {
  switch (action.type) {
    case SET_USER:
      return {...state, userInfo: action.payload};
    case UNSET_USER:
      return {
        ...state,
        userInfo: {},
      };
    default:
      return state;
  }
};
