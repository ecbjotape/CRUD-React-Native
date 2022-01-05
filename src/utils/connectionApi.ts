import { create } from 'apisauce';
import Constants from './constants';

const api = create({
  baseURL: Constants.BASE_URL,
  headers: { Accept: 'application/json' },
});

export const setToken = (token: any) => {
  api.setHeaders({
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  });
};

export default api;
