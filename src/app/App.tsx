import React from 'react';
import { RouterProvider, Outlet, useLocation, createBrowserRouter } from 'react-router';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

import { StorePage } from "./pages/StorePage";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Store } from "./components/Store";

function RootLayout() {
  const location = useLocation();
  const isStorePage = location.pathname.startsWith('/store');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 scroll-smooth flex flex-col">
      {!isStorePage && <Navbar />}
      <Cart />
      
      <div className="flex-1">
        <Outlet />
      </div>

      {!isStorePage && <Footer />}
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Store />
    </main>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "store", Component: StorePage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
