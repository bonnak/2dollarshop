import produce from 'immer';
import { createDataContext } from '.';
import request from '../utils/request';

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

const updateDeal = () => async (id, { title, body, externalLink, tags }) => {
  const deal = await request.put(`/api/deals/${id}`, {
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

const fetchDealById = () => async (id) => {
  const { data: deal } = await request.get(`/api/deals/${id}`);

  return deal;
};

export const { Provider, Context } = createDataContext(
  reducer,
  {
    createDeal,
    updateDeal,
    fetchDeals,
    fetchDealById,
  },
  {
    deals: [],
    count: 0,
  }
);
