import { getLocalData, saveLocalData } from "../../utils/localData";
import {
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./actionTypes";

const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  isLoading: false,
  isError: false,
};

export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      saveLocalData("token", payload);
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        token: payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };
    }
    case SIGNUP_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
