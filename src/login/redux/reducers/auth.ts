import {Action} from 'redux';
import {ImmutableObject} from 'seamless-immutable';
import Immutable from 'seamless-immutable';
import {createActions, createReducer} from 'reduxsauce';

export type AuthState = ImmutableObject<State>;

export interface State {
  msg: string;
  loading: boolean;
  error: boolean;
  data: AuthParams;
}

const INITIAL_STATE: AuthState = Immutable({
  msg: '',
  loading: false,
  error: false,
  data: {msg: '', email: '', error: false}
});

export interface AuthParams {
  msg: string;
  email: string;
  error: boolean;
}

export interface AuthActionsTypes {
  REQUEST_LOGIN: string;
  SUCCESS_REQUEST_LOGIN: string;
  CREATE_LOGIN: string;
  SUCCESS_CREATE_LOGIN: string;
}

export interface RequestLogin extends Action<AuthActionsTypes> {
  email: string;
  pwd: string;
}

export interface SuccessRequestLogin extends Action<AuthActionsTypes> {
  data: AuthParams;
}

export interface CreateLogin extends Action<AuthActionsTypes> {
  email: string;
  pwd: string;
}

export interface SuccessCreateLogin extends Action<AuthActionsTypes> {
  data: AuthParams;
}

export interface CreatorTypes {
  requestLogin(email: string, pwd: string): RequestLogin;
  successRequestLogin(data: AuthParams): SuccessRequestLogin;
  createLogin(email: string, pwd: string): CreateLogin;
  successCreateLogin(data: AuthParams): SuccessCreateLogin;
}

export type ReducerTypes = RequestLogin &
  SuccessRequestLogin &
  CreateLogin &
  SuccessCreateLogin;

const {Types, Creators} = createActions<AuthActionsTypes, CreatorTypes>({
  requestLogin: ['email', 'pwd'],
  successRequestLogin: ['data'],
  createLogin: ['email', 'pwd'],
  successCreateLogin: ['data'],
});

export const reducer = createReducer<AuthState, ReducerTypes>(INITIAL_STATE, {
  [Types.CREATE_LOGIN]: state => {
    return state.merge({
      loading: true,
      error: false,
      msg: '',
    });
  },
  [Types.REQUEST_LOGIN]: state => {
    return state.merge({
      loading: true,
      error: false,
      msg: '',
    });
  },
  [Types.SUCCESS_CREATE_LOGIN]: (state, action) => {
    return state.merge({
      data: action.data,
      loading: false,
    });
  },
  [Types.SUCCESS_REQUEST_LOGIN]: (state, action) => {
    return state.merge({
      data: action.data,
      loading: false,
    });
  },
});

export const AuthActions = Creators;
export const AuthType = Types;