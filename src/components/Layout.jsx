import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = () => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet context={{ setHighlighted }} />
      </main>
      <Footer highlighted={highlighted} />
    </div>
  );
};
