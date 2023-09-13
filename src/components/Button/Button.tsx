import React, { FC, ReactNode, MouseEvent } from 'react';
import styles from './Button.module.scss';

interface IProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IProps> = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);
