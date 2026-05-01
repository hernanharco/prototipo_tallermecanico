import React from 'react';
import { Users, Clock, ShieldCheck, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    name: 'Empresa Familiar',
    description: 'Fundada con valores de honestidad y cercanía. Tratamos cada vehículo como si fuera nuestro.',
    icon: Users,
  },
  {
    name: '+7 Años de Experiencia',
    description: 'Hemos crecido junto a nuestros clientes, especializándonos en las necesidades del transporte pesado.',
    icon: Clock,
  },
  {
    name: 'Garantía de Servicio',
    description: 'Trabajos garantizados y refacciones de alta calidad para asegurar la durabilidad de su flota.',
    icon: ShieldCheck,
  },
  {
    name: 'Calidad Premium',
    description: 'Estándares altos en cada reparación, desde el motor hasta la carrocería.',
    icon: Trophy,
  },
];

export const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0 relative">
             <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1675034743126-0f250a5fee51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjBtZWNoYW5pYyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDQ2MTM1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Equipo de trabajo" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold">7+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Años sirviendo</p>
            </div>
          </div>

          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Sobre Nosotros</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Más que un taller, una familia dedicada a tu seguridad
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Iniciamos hace más de siete años con una caja de herramientas y un sueño. Hoy, somos un referente en el mantenimiento de autobuses en la región. Entendemos que cada día que su autobús está parado es dinero perdido, por eso trabajamos con eficiencia y precisión.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </div>
  );
};
