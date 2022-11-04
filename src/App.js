import React, { useState } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

import { myRouters, myAuthRouters } from './router';


const router = createBrowserRouter(myRouters);
const authRouter = createBrowserRouter(myAuthRouters);

function App() {
  const [isLoggedIn] = useState(true);
  return (
    <React.StrictMode>
      {
        isLoggedIn
          ? <RouterProvider router={router} />
          : <RouterProvider router={authRouter} />
      }
    </React.StrictMode>
  );
}

export default App;

