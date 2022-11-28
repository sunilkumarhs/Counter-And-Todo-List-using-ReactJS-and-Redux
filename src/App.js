import React from 'react';
import { Counter } from './components/Counter';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Todos from './components/Todos';


function App() {
  return (
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<Layout/>}>
                <Route path='/Counter' element={<Counter/>}></Route>
                <Route path='/Todos' element={<Todos/>}></Route>
              </Route>
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
