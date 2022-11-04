import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

import { items } from './router';

let myRouters = []

items.map((v) => {
  if(v.children===""){
    let temp = {}
    temp.path = v.key
    temp.element = v.element
    return myRouters.push(temp)
  }else{
    v.children.map((vc)=>{
      let tempChild = {}
      tempChild.path = vc.key
      tempChild.element = vc.element
      return myRouters.push(tempChild)
    })
  }
})

const router = createBrowserRouter(myRouters);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
