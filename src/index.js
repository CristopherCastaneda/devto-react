import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from "./context/UserContext";
import PostProvider from './context/PostContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <PostProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </PostProvider>
  </UserProvider>

);

