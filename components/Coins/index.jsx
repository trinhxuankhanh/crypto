/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Coins.module.css';
import Link from 'next/link';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <div className={styles.coin_container}>
        <div className={styles.coin_row}>
          <div className={styles.coin}>
            <img alt={name} src={image} className={styles.coin_img} />
            <h3 className={styles.coin_h3}>{name}</h3>
            <p className={styles.coin_symbo}>{symbol}</p>
          </div>

          <div className={styles.coin_data}>
            <p className={styles.coin_price}>${price}</p>
            <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

            {priceChange < 0 ? (
              <p className={(styles.percent, styles.red)}>
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className={(styles.percent, styles.green)}>
                {priceChange.toFixed(2)}%
              </p>
            )}

            <p className={styles.coin_marketcap}>
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coins;
