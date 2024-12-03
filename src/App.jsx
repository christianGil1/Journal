import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Home, Profile, Journal, Reflection } from './components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter basename='Journal'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/reflection" element={<Reflection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
