import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import { myRouters } from './router';

const router = createBrowserRouter(myRouters);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<>Preparing data...</>} />
    </React.StrictMode>
  );
}

export default App;

