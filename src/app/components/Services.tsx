import React from 'react';
import { Settings, Truck, PaintBucket, Wrench, Battery, Thermometer, ShoppingCart, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { useCartStore } from '../store/cartStore';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Mecánica General',
    description: 'Reparación de motores diésel, transmisiones y sistemas de frenos.',
    icon: Settings,
  },
  {
    title: 'Suspensión y Dirección',
    description: 'Ajuste y cambio de amortiguadores, muelles y alineación para autobuses.',
    icon: Truck,
  },
  {
    title: 'Hojalatería y Pintura',
    description: 'Restauración estética completa, eliminación de óxido y pintura profesional.',
    icon: PaintBucket,
  },
  {
    title: 'Mantenimiento Preventivo',
    description: 'Cambios de aceite, filtros y revisión general para evitar fallas mayores.',
    icon: Wrench,
  },
  {
    title: 'Sistema Eléctrico',
    description: 'Diagnóstico y reparación de alternadores, marchas y luces.',
    icon: Battery,
  },
  {
    title: 'Aire Acondicionado',
    description: 'Mantenimiento y recarga de gas para el confort de los pasajeros.',
    icon: Thermometer,
  },
];

const favoriteProducts = [
  {
    id: 'fav-1',
    name: 'Aceite sintético para Motor Diesel 15W-40 Premium',
    price: 1350,
    category: 'Mantenimiento',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBvaWx8ZW58MXx8fHwxNzczMDQ3NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'fav-2',
    name: 'Batería Industrial 1100 Amperes Heavy Duty',
    price: 3600,
    category: 'Eléctrico',
    image: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5fGVufDF8fHx8MTc3Mjk2MjY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'fav-3',
    name: 'Juego de Llantas para Autobús 22.5"',
    price: 8500,
    category: 'Llantas',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlc3xlbnwxfHx8fDE3NzMwNDc0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'fav-4',
    name: 'Kit de Frenos de Disco Delantero',
    price: 2400,
    category: 'Frenos',
    image: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZXN8ZW58MXx8fHwxNzczMDQ3NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export const Services = () => {
  const { addToCart, toggleCart } = useCartStore();

  const handleAddToCart = (product: typeof favoriteProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    toast.success(`${product.name} agregado al carrito`);
    toggleCart();
  };

  return (
    <div id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Soluciones Integrales para su Flota
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ofrecemos todo lo necesario para mantener sus autobuses en perfectas condiciones operativas.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
              <div className="flex items-center justify-center w-14 h-14 bg-blue-50 text-blue-600 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Productos Favoritos Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2">
               Productos Favoritos
            </span>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Lo más usado en nuestras reparaciones
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col group">
                <div className="aspect-square relative overflow-hidden bg-gray-50">
                  <ImageWithFallback 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Recomendado
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wider">{product.category}</span>
                  <h4 className="font-bold text-gray-900 mb-2 leading-tight">{product.name}</h4>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-gray-900">${product.price.toLocaleString()}</span>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-slate-100 text-slate-700 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center gap-1"
                      title="Agregar al carrito"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
