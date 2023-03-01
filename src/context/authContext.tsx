import React, {createContext} from 'react';

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
  sigIn: () => void;
}

export const AuthContext = createContext({} as authContextProps);

// Provider
export const Authprovider = ({children}: any) => {
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        sigIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
