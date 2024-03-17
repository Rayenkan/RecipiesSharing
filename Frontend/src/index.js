import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './homePage/containers/homePage';
import RecipieDetails from './recipieDetails/containers/recipieDetails';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from './recipeList/container/recipeList';
import Login from './login/container/login';
import UserSettings from './profile/container/userSettings';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Recipe/:id" element={<RecipieDetails />} /> 
      <Route path="/Recipes/:category" element={<RecipeList />} />
      <Route path="/Recipes" element={<RecipeList />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/profile/:name" element={<UserSettings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function NotFound() {
  return <h1>404 - Not Found</h1>;
}
