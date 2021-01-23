import { createDataContext } from '.';
import request from '../utils/request';

const categoryReducer = (prevState, { type, payload }) => {
  switch (type) {
    case 'GET_CATEGORIES':
      return {
        ...prevState,
        categories: payload,
      };

    default:
      return prevState;
  }
};

const fetchCategories = (dispatch) => async () => {
  const { data: { rows } } = await request.get('/api/categories');
  dispatch({ type: 'GET_CATEGORIES', payload: rows });
};

export const { Provider, Context } = createDataContext(
  categoryReducer,
  {
    fetchCategories,
  },
  {
    categories: [],
  },
);
