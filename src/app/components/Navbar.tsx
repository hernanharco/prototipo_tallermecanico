import React from 'react';
import { ShoppingCart, Menu, Wrench, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { toggleCart, items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wide uppercase">Taller BusMech</span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase">Expertos en Autobuses</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white hover:border-b-2 border-blue-500 py-1 transition-all">Inicio</Link>
            <a href="#about" className="text-gray-300 hover:text-white hover:border-b-2 border-blue-500 py-1 transition-all">Nosotros</a>
            <a href="#services" className="text-gray-300 hover:text-white hover:border-b-2 border-blue-500 py-1 transition-all">Servicios</a>
            <Link to="/store" className="text-gray-300 hover:text-white hover:border-b-2 border-blue-500 py-1 transition-all">Tienda</Link>
          </div>

          {/* Cart & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 hover:bg-slate-800 rounded-full transition-colors group"
            >
              <ShoppingCart className="h-6 w-6 text-gray-300 group-hover:text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-800 border-t border-slate-700 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Inicio</Link>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Nosotros</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Servicios</a>
              <Link to="/store" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Tienda</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
