import { createDataContext } from '.';
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
        },
      };

    case 'SET_USER':
      return {
        ...prevState,
        authenticated: true,
        user: {
          name: payload.user.name,
          email: payload.user.email,
        },
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
  const accessToken = await window.localStorage.getItem('accessToken');

  if (accessToken === null) {
    return;
  }

  const { user } = await getAuthUser();

  if (user !== undefined) {
    dispatch({ type: 'SET_USER', payload: { user } });
  } else {
    dispatch({ type: 'SIGN_OUT' });
  }
};

const getAuthUser = async () => {
  const { data } = await request.get('/api/auth/user');

  return data;
};

const signup = () => async ({
  email,
  password,
  passwordConfirmation,
}) => {
  const { data } = await request.post('api/auth/register', {
    email,
    password,
    passwordConfirmation,
  });

  return data;
};

const signin = (dispatch) => async ({ email, password }) => {
  const { data } = await request.post('/api/auth/signin', {
    email,
    password,
  });

  await window.localStorage.setItem('accessToken', data.accessToken);

  dispatch({
    type: 'SIGN_IN',
    payload: data,
  });
};

const signout = (dispatch) => async () => {
  await window.localStorage.removeItem('accessToken');
  dispatch({ type: 'SIGN_OUT' });
};

const resetPassword = () => async (email) => {
  const { data } = await request.post('/api/auth/reset-password', {
    email,
  });

  return data;
};

export const { Provider, Context } = createDataContext(
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
    user: null,
  },
);
