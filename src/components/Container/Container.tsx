import React, { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
