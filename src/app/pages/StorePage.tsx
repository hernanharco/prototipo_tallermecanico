import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Star, ChevronDown, MapPin, Filter, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

const allProducts = [
  {
    id: 'store-1',
    name: 'Aceite sintético para Motor Diesel 15W-40 Premium, Protección Extendida 1 Galón',
    brand: 'BusLube',
    price: 1350,
    rating: 4.8,
    reviews: 124,
    prime: true,
    category: 'Aceites',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBvaWx8ZW58MXx8fHwxNzczMDQ3NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'store-2',
    name: 'Batería Industrial 1100 Amperes Heavy Duty - Larga Duración para Autobuses',
    brand: 'PowerStart',
    price: 3600,
    rating: 4.5,
    reviews: 89,
    prime: true,
    category: 'Baterías',
    image: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5fGVufDF8fHx8MTc3Mjk2MjY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'store-3',
    name: 'Juego de Llantas para Autobús 22.5" Toda Posición',
    brand: 'RoadKing',
    price: 8500,
    rating: 4.9,
    reviews: 342,
    prime: false,
    category: 'Llantas',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB0aXJlc3xlbnwxfHx8fDE3NzMwNDc0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'store-4',
    name: 'Kit de Frenos de Disco Delantero para Unidades Pesadas (2 Piezas)',
    brand: 'SafeStop',
    price: 2400,
    rating: 4.6,
    reviews: 67,
    prime: true,
    category: 'Frenos',
    image: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZXN8ZW58MXx8fHwxNzczMDQ3NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'store-5',
    name: 'Kit de Herramientas y Llaves Mixtas Profesionales - 150 Piezas',
    brand: 'ProMechanic',
    price: 4200,
    rating: 4.7,
    reviews: 210,
    prime: true,
    category: 'Herramientas',
    image: 'https://images.unsplash.com/photo-1575026615908-666710ae5e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHRvb2xzJTIwd3JlbmNofGVufDF8fHx8MTc3MzA0NzU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'store-6',
    name: 'Faro Principal LED de Alta Luminosidad para Autobús Modelo Reciente',
    brand: 'LumiMax',
    price: 1850,
    rating: 4.3,
    reviews: 45,
    prime: true,
    category: 'Eléctrico',
    image: 'https://images.unsplash.com/photo-1721241590496-a8914de34a1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjBoZWFkbGlnaHRzfGVufDF8fHx8MTc3MzA0NzU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'store-7',
    name: 'Filtro de Aire Alto Flujo Heavy Duty',
    brand: 'CleanAir',
    price: 450,
    rating: 4.8,
    reviews: 312,
    prime: true,
    category: 'Filtros',
    image: 'https://images.unsplash.com/photo-1691519966753-ba6d5294ef99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHVuaWZvcm0lMjBmaWx0ZXJ8ZW58MXx8fHwxNzczMDQ3NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'store-8',
    name: 'Bomba de Agua para Motor Diésel',
    brand: 'FlowTech',
    price: 2100,
    rating: 4.4,
    reviews: 58,
    prime: false,
    category: 'Mantenimiento',
    image: 'https://images.unsplash.com/photo-1613214150384-14921ff659b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZXN8ZW58MXx8fHwxNzczMDQ3NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const categories = ['Todos', 'Aceites', 'Baterías', 'Llantas', 'Frenos', 'Herramientas', 'Filtros', 'Eléctrico', 'Mantenimiento'];

export const StorePage = () => {
  const { addToCart, items } = useCartStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    toast.success('Añadido al carrito');
  };

  return (
    <div className="min-h-screen bg-[#eaeded] font-sans">
      {/* Header estilo Amazon */}
      <header className="bg-[#131921] text-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-2 gap-4">
          <Link to="/" className="flex items-center gap-1 shrink-0 pt-1 pb-1 px-2 border border-transparent hover:border-white rounded-sm">
            <span className="font-extrabold text-xl tracking-tight">BusMech</span>
            <span className="text-amber-500 font-bold text-sm leading-none mt-1">.mx</span>
          </Link>

          <div className="hidden md:flex items-center text-sm px-2 pt-1 pb-1 border border-transparent hover:border-white rounded-sm cursor-pointer">
            <MapPin className="h-4 w-4 text-gray-300 mt-2" />
            <div className="flex flex-col ml-1">
              <span className="text-xs text-gray-300 leading-none">Enviar a</span>
              <span className="font-bold leading-none">México</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 flex items-center h-10 rounded-md overflow-hidden bg-white max-w-4xl focus-within:ring-2 focus-within:ring-amber-500">
             <select 
               className="h-full bg-gray-100 text-gray-700 text-xs px-2 border-r border-gray-300 focus:outline-none cursor-pointer hidden sm:block"
               value={selectedCategory}
               onChange={(e) => setSelectedCategory(e.target.value)}
             >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
             </select>
             <input 
               type="text" 
               placeholder="Buscar repuestos, accesorios, etc."
               className="flex-1 h-full px-3 text-black focus:outline-none"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button className="h-full px-4 bg-[#febd69] hover:bg-[#f3a847] text-gray-900 transition-colors">
               <Search className="h-5 w-5" />
             </button>
          </div>

          <div className="hidden lg:flex flex-col px-2 pt-1 pb-1 border border-transparent hover:border-white rounded-sm cursor-pointer whitespace-nowrap">
             <span className="text-xs text-white leading-none">Hola, Identifícate</span>
             <span className="font-bold text-sm flex items-center leading-none">Cuentas y Listas <ChevronDown className="h-3 w-3 ml-1" /></span>
          </div>

          <div className="hidden lg:flex flex-col px-2 pt-1 pb-1 border border-transparent hover:border-white rounded-sm cursor-pointer whitespace-nowrap">
             <span className="text-xs text-white leading-none">Devoluciones</span>
             <span className="font-bold text-sm leading-none">y Pedidos</span>
          </div>

          {/* Cart link/button */}
          <Link to="/" className="flex items-end px-2 pt-1 pb-1 border border-transparent hover:border-white rounded-sm cursor-pointer relative">
            <div className="relative flex items-center">
              <span className="absolute -top-1 left-3.5 text-amber-500 font-bold text-sm bg-[#131921] px-1 rounded-full">{cartCount}</span>
              <ShoppingCart className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <span className="font-bold text-sm hidden sm:block mb-1">Carrito</span>
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#232f3e] flex items-center px-4 py-1.5 text-sm gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <button 
            className="flex items-center gap-1 font-bold px-2 py-1 border border-transparent hover:border-white rounded-sm"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
            Todo
          </button>
          {categories.filter(c => c !== 'Todos').slice(0, 6).map(cat => (
             <span 
              key={cat} 
              className="px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer"
              onClick={() => setSelectedCategory(cat)}
             >
               {cat}
             </span>
          ))}
          <span className="px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer hidden md:inline">Ofertas del Día</span>
          <span className="px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer hidden md:inline">Servicio al Cliente</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1500px] mx-auto flex flex-col md:flex-row p-4 gap-6">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 hidden md:block">
           <div className="bg-white p-4 rounded-lg shadow-sm">
             <h3 className="font-bold text-lg mb-3">Departamentos</h3>
             <ul className="space-y-2 text-sm text-gray-700">
               {categories.map(c => (
                 <li 
                   key={c} 
                   className={`cursor-pointer hover:text-[#e47911] ${selectedCategory === c ? 'font-bold text-black' : ''}`}
                   onClick={() => setSelectedCategory(c)}
                 >
                   {c === 'Todos' ? 'Cualquier Departamento' : c}
                 </li>
               ))}
             </ul>

             <div className="my-4 border-t border-gray-200"></div>

             <h3 className="font-bold text-sm mb-2">Valoración del cliente</h3>
             <div className="flex items-center text-[#e47911] cursor-pointer hover:text-amber-600">
               <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 text-gray-300" />
               <span className="text-black text-sm ml-1 hover:text-[#e47911]">& más</span>
             </div>

             <div className="my-4 border-t border-gray-200"></div>

             <h3 className="font-bold text-sm mb-2">Precio</h3>
             <ul className="space-y-1 text-sm text-gray-700">
               <li className="cursor-pointer hover:text-[#e47911]">Hasta $500</li>
               <li className="cursor-pointer hover:text-[#e47911]">$500 a $1,000</li>
               <li className="cursor-pointer hover:text-[#e47911]">$1,000 a $2,000</li>
               <li className="cursor-pointer hover:text-[#e47911]">$2,000 y más</li>
             </ul>
           </div>
        </aside>

        {/* Results */}
        <div className="flex-1">
          <div className="bg-white rounded-t-lg p-3 shadow-sm border-b border-gray-200 flex justify-between items-center">
             <span className="text-sm">
               1-{filteredProducts.length} de {filteredProducts.length} resultados para <span className="text-[#c60] font-bold">"{searchQuery || selectedCategory}"</span>
             </span>
             <div className="flex items-center gap-2">
               <span className="text-sm shadow-sm border border-gray-300 rounded-md px-3 py-1 bg-gray-50 flex items-center gap-2 cursor-pointer hover:bg-gray-100">
                  Ordenar por: Destacados <ChevronDown className="h-4 w-4" />
               </span>
               <button className="md:hidden p-1 border border-gray-300 rounded bg-gray-50" onClick={() => setIsSidebarOpen(true)}>
                 <Filter className="h-5 w-5" />
               </button>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
             {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative aspect-square mb-4 bg-gray-50 p-2 rounded flex items-center justify-center cursor-pointer">
                    <ImageWithFallback 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h2 className="text-[15px] font-medium leading-tight text-[#0f1111] hover:text-[#c45500] cursor-pointer line-clamp-3 mb-1">
                      {product.name}
                    </h2>
                    
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-[#ffa41c]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-blue-600 text-sm hover:underline cursor-pointer">{product.reviews}</span>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm align-top relative top-[-0.3em]">$</span>
                        <span className="text-2xl font-medium">{product.price.toLocaleString()}</span>
                        <span className="text-sm align-top relative top-[-0.3em]">00</span>
                      </div>
                      
                      {product.prime && (
                        <div className="flex items-center mt-1 mb-2">
                          <span className="text-[#00a8e1] font-bold italic text-sm">prime</span>
                          <span className="text-xs text-gray-500 ml-2">Envío GRATIS mañana</span>
                        </div>
                      )}
                      {!product.prime && (
                        <div className="text-xs text-gray-500 mt-1 mb-2">Envío en 3 a 5 días</div>
                      )}

                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] text-sm py-2 rounded-full mt-2 shadow-sm border border-[#fcd200] transition-colors active:bg-[#f0b800]"
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
             ))}
          </div>
          {filteredProducts.length === 0 && (
             <div className="bg-white p-8 rounded-lg shadow-sm text-center mt-4">
               <h3 className="text-xl font-bold mb-2">No hay resultados</h3>
               <p className="text-gray-600">Intenta buscar con otros términos o cambia la categoría.</p>
             </div>
          )}
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setIsSidebarOpen(false)}>
          <div 
            className="w-4/5 max-w-sm h-full bg-white overflow-y-auto transform transition-transform"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-[#232f3e] text-white p-4 flex justify-between items-center">
              <span className="font-bold text-lg flex items-center gap-2">
                <Menu className="h-6 w-6" /> Hola, Identifícate
              </span>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-4">Departamentos</h3>
              <ul className="space-y-4 text-base">
                {categories.map(c => (
                  <li 
                    key={c} 
                    className={`cursor-pointer border-b border-gray-100 pb-2 ${selectedCategory === c ? 'font-bold' : ''}`}
                    onClick={() => {
                      setSelectedCategory(c);
                      setIsSidebarOpen(false);
                    }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
