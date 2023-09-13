import React from 'react';
import { router } from 'router/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import ReactDOM from 'react-dom/client';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
