import {AuthState} from './authContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeIcon'; payload: string}
  | {type: 'cleanState'};

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'Omar',
      };
    case 'changeIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'cleanState':
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        favoriteIcon: undefined,
      };
    default:
      return state;
  }
};
