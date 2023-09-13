import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../router/router';

export const useTimerToRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(Routes.END);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
};
