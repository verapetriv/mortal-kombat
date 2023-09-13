import React, { FC } from 'react';
import styles from './TheEnd.module.scss';
import { Container } from '../../components/Container/Container';

export const TheEnd: FC = () => (
  <Container>
    <span className={styles.text}>The End</span>
  </Container>
);
