import React from 'react';
import { useGetExchangesQuery } from '../services/cryptoApi';

const Exchange = () => {
  const { data, isFetching, isError } = useGetExchangesQuery();
  console.log(data);
  console.log(isError);
  return (
    <div>
      <h1>exChange</h1>
    </div>
  );
};

export default Exchange;
