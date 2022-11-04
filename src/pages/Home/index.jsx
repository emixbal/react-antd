import React, { } from 'react';

import Layout from "../../layout";

export default function App() {

  return (
    <Layout>
      <div>home</div>
      <button onClick={()=>alert()}>
        pergi
      </button>
    </Layout>
  )
}