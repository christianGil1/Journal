import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Home, Profile, Journal, Reflection } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="journal" element={<Journal />} />
          <Route path="reflection" element={<Reflection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
