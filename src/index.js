import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Registro} from './Registro';
import {Login} from './Login';
import {AboutUs} from './AboutUs';
import {Dashboard} from './Dashboard';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/admin" element={<Dashboard/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
