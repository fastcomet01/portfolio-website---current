
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen w-full bg-black overflow-hidden flex flex-col selection:bg-neon-pink selection:text-white">
      {/* 
        The outer container is fixed to the viewport height (h-screen) with overflow-hidden.
        Child pages (Home, About) must handle their own scrolling if content exceeds the viewport.
      */}
      <main className="flex-grow w-full h-full relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;
