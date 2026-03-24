import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reports from "./pages/Reports";
import Dashboard from "./pages/Dashboard";

const routerBasename = process.env.PUBLIC_URL?.replace(/\/$/, '') || '/';

const App = () => {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reports" element={<Reports />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard/:iso2" element={<Dashboard />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);