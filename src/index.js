import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './components/Routing/Layout/Layout';
import Home from './components/Routing/Home';
import About, {getUserGithubInfo} from './components/Routing/About';
import ContactUs from './components/Routing/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />}></Route>
    <Route path='about' element={<About />} loader={getUserGithubInfo}></Route>
    <Route path='contact-us/:username' element={<ContactUs />}></Route>
  </Route >
))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

