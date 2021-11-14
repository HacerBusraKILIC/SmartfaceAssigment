// Action Types
export const SET_USER = 'user/SET_USER';
export const UNSET_USER = 'user/UNSET_USER';
// Actions
export const login = (userInfo: object) => ({
  type: SET_USER,
  payload: userInfo,
});

export const logout = () => ({type: UNSET_USER});
