import { SET_USER } from "./userType";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
