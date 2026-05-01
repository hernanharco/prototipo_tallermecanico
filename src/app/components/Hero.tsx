import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <div className="relative h-[600px] w-full bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1595367280236-ca8eacf62558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHdvcmtpbmclMjBvbiUyMGVuZ2luZXxlbnwxfHx8fDE3NzA0NjEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Taller Mecánico" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 rounded-full">
              Empresa Familiar desde 2017
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
              Expertos en <span className="text-blue-500">Mecánica de Autobuses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Mantenimiento preventivo, correctivo y restauración completa. 
              Devolvemos la vida a tu flota con más de 7 años de experiencia y pasión por los motores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all text-center shadow-lg shadow-blue-900/50">
                Nuestros Servicios
              </a>
              <a href="#before-after" className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-lg transition-all text-center backdrop-blur-sm">
                Ver Transformaciones
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
