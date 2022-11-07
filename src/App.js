import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Provider} from 'react-redux'

import './App.css';
import { myRouters } from './router';
import store from './globalReducer';

const router = createBrowserRouter(myRouters);

function App() {

  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<>Preparing data...</>} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;

