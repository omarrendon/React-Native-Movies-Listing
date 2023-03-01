import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isloggedIn: boolean;
  username: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isloggedIn: false,
  username: '',
  favoriteIcon: undefined,
};

export interface authContextProps {
  authState: AuthState;
  signIn: () => void;
  changeIcon: (iconName: string) => void;
  authCleanSate: () => void;
}

export const AuthContext = createContext({} as authContextProps);

// Provider
export const Authprovider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeIcon = (iconName: string) => {
    dispatch({type: 'changeIcon', payload: iconName});
  };

  const authCleanSate = () => {
    dispatch({type: 'cleanState'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeIcon,
        authCleanSate,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
