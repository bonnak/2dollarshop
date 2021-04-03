import produce from 'immer';
import { createDataContext } from '.';
import request from '../utils/request';

// const reducer = (prevState, { type, payload }) => {
//   switch (type) {
//     case 'GET_DEALS':
//       return {
//         ...prevState,
//         deals: payload,
//       };

//     default:
//       return prevState;
//   }
// };

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case 'GET_DEALS':
      draft.deals = payload.rows;
      draft.count = payload.count;
  }
});

const createDeal = () => async ({ title, body, externalLink, tags }) => {
  const deal = await request.post('/api/deals', {
    title,
    body,
    externalLink,
    tags,
  });

  return deal;
};

const fetchDeals = (dispatch) => async () => {
  const {
    data: { rows, count },
  } = await request.get('/api/deals');
  dispatch({ type: 'GET_DEALS', payload: { rows, count } });
};

export const { Provider, Context } = createDataContext(
  reducer,
  {
    createDeal,
    fetchDeals,
  },
  {
    deals: [],
    count: 0,
  }
);
