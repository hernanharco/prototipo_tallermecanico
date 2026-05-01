import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export const Store = () => {
  return (
    <div id="store" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1637640125496-31852f042a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMGdhcmFnZSUyMHRvb2xzfGVufDF8fHx8MTc3MzA0NzUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Explora nuestro catálogo</span>
            <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-6 leading-tight">
              ¿Buscas las mejores refacciones?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Descubre nuestra nueva tienda en línea con un diseño intuitivo, filtros avanzados y todas las piezas que tu autobús necesita, al mejor precio.
            </p>
            
            <Link 
              to="/store"
              className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300 shadow-xl shadow-amber-500/20"
            >
              <ShoppingBag className="h-6 w-6" />
              Visitar Tienda Completa
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          
          <div className="hidden md:block relative w-1/3">
            <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-30 rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBvaWx8ZW58MXx8fHwxNzczMDQ3NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Refacciones" 
              className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-white/10 rotate-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
