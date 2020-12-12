import {createDataContext} from '.';
import request from '../utils/request';

const authReducer = (prevState, { type, payload }) => {
  switch (type) {
    case 'SIGN_IN':
      return {
        ...prevState,
        accessToken: payload.accessToken,
        authenticated: true,
        user: {
          name: payload.user.name,
          email: payload.user.email,
        }
      };
    case 'SIGN_OUT':
      return {
        ...prevState, 
        accessToken: null, 
        authenticated: false,
        user: null,
      };
    default:
      return prevState;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const accessToken = await localStorage.getItem('accessToken');

  if (accessToken === null) {
    return;
  }

  if (await tokenIsValid(accessToken)) {
    dispatch({type: 'SIGN_IN', payload: {accessToken}});
  } else {
    dispatch({type: 'SIGN_OUT'});
  }
};

const tokenIsValid = async (accessToken) => {
  const {data} = await request.post('/api/accesstoken/validate', {accessToken});

  return data.status === 'ok';
};

const signup = () => async ({
  email,
  password,
  passwordConfirmation,
}) => {
  const {data} = await request.post('api/auth/register', {
    email,
    password,
    passwordConfirmation,
  });

  return data;
};

const signin = (dispatch) => async ({email, password}) => {
  const {data} = await request.post('/api/auth/signin', {
    email,
    password,
  });

  await localStorage.setItem('accessToken', data.accessToken);

  dispatch({
    type: 'SIGN_IN', 
    payload: data,
  });
};

const signout = (dispatch) => async () => {
  await localStorage.removeItem('accessToken');
  dispatch({type: 'SIGN_OUT'});
};

const resetPassword = (dispatch) => async (email) => {
  const {data} = await request.post('/api/auth/reset-password', {
    email,
  });

  return data;
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {
    signin,
    tryLocalSignin,
    signout,
    signup,
    resetPassword,
  },
  {
    accessToken: null, 
    authenticated: false, 
    user: null
  },
);
