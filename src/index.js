import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './App';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import PassQuestion from "./qestion";
import PassTrue from "./HoMizugishi"

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/hoshina-question-app" element={<SignIn />} />
    <Route path="/question" element={<PassQuestion />}/>
    <Route path="/hoshina-question-app/passTrue" element={<PassTrue />} />
  </Routes>
</Router>,
  document.getElementById('root')
);

