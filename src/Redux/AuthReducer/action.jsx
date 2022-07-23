import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export const login = (params) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", params)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }))
    .catch((er) => dispatch({ type: LOGIN_FAILURE, payload: er }));
};

export const signUp = (params) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  return await axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", params)
    .then((res) => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch((er) => dispatch({ type: SIGNUP_FAILURE, payload: er }));
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
