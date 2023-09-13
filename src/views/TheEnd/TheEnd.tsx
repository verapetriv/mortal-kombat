import React, { FC } from 'react';
import styles from './TheEnd.module.scss';
import { Container } from 'components/Container/Container';
import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/router';

export const TheEnd: FC = () => {
  const navigate = useNavigate();

  const handleRedirect = (): void => {
    navigate(Routes.CHOOSE_PLAYER);
  };

  return (
    <Container>
      <span className={styles.text}>The End</span>
      <Button onClick={handleRedirect}>Play again</Button>
    </Container>
  );
};
