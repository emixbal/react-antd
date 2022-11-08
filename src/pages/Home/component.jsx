import React, { useEffect } from 'react';

import Layout from "../../layout";

export default function App(props) {
  useEffect(() => {
    props.handleGetUsers();
  }, [props]);

  return (
    <Layout>
      <div>home</div>
      <button onClick={() => alert()}>
        pergi
      </button>
    </Layout>
  )
}