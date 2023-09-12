import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ChoosePlayer } from '../views/ChoosePlayer/ChoosePlayer';
import { Versus } from '../views/Versus/Versus';

export enum Routes {
  ANY = '*',
  CHOOSE_PLAYER = '/choose-player',
  VERSUS = '/versus',
}

export const router = createBrowserRouter([
  {
    path: Routes.VERSUS,
    element: <Versus />,
  },
  {
    path: Routes.CHOOSE_PLAYER,
    element: <ChoosePlayer />,
  },
  {
    path: Routes.ANY,
    element: <Navigate to={Routes.CHOOSE_PLAYER} replace />,
  },
]);
