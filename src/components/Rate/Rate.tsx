import React, { FC } from 'react';
import styles from './Rate.module.scss';

interface IProps {
  value: number;
}

const MIN_VALUE = 0.5;
const MAX_VALUE = 10;

export const Rate: FC<IProps> = ({ value = MIN_VALUE }) => {
  const getNormalizedValue = (value: number) => {
    let normalizedValue = value;

    if (value > MAX_VALUE) normalizedValue = MAX_VALUE;
    if (value < MIN_VALUE) normalizedValue = MIN_VALUE;

    return normalizedValue * 10;
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.rate}
        style={{ height: `${getNormalizedValue(value)}%` }}
      />
    </div>
  );
};
