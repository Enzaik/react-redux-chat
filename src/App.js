import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
//import fire from './fire';

import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
