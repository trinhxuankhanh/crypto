import React, { Fragment } from 'react';
import Coins from './Coins';

const CoinList = ({ filteredCoins }) => {
  return (
    <Fragment>
      {filteredCoins.map((item) => (
        <Coins
          key={item.id}
          name={item.name}
          id={item.id}
          price={item.current_price}
          symbol={item.symbol}
          marketcap={item.market_cap}
          volume={item.total_volume}
          image={item.image}
          priceChange={item.price_change_percentage_24h}
        />
      ))}
    </Fragment>
  );
};

export default CoinList;
