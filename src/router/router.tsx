import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ChoosePlayer } from 'views/ChoosePlayer/ChoosePlayer';
import { Versus } from 'views/Versus/Versus';
import { TheEnd } from 'views/TheEnd/TheEnd';

export enum Routes {
  ANY = '*',
  CHOOSE_PLAYER = '/choose-player',
  VERSUS = '/versus',
  END = '/end',
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
    path: Routes.END,
    element: <TheEnd />,
  },
  {
    path: Routes.ANY,
    element: <Navigate to={Routes.CHOOSE_PLAYER} replace />,
  },
]);
