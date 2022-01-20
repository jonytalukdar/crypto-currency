import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '2789b86488msh93cdd1b70cfd18dp1488e3jsn57778bff1b65',
};

const baseUrl = `https://coinranking1.p.rapidapi.com`;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery } = cryptoApi;
