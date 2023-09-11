import React from 'react';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
