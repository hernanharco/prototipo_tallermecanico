import React from 'react';
import { BookFlip } from './BookFlip';

export const Portfolio = () => {
  return (
    <div id="before-after" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Nuestro Trabajo</span>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Transformaciones Reales
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Descubre el impacto de nuestra restauración. Da click en las imágenes para ver el cambio "como pasar una página".
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <BookFlip 
            beforeImage="https://images.unsplash.com/photo-1530262354898-76eeefff8a96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBkaXJ0eSUyMGJ1c3xlbnwxfHx8fDE3NzA0NjEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            afterImage="https://images.unsplash.com/photo-1705481825389-e98edcef522f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBjbGVhbiUyMG1vZGVybiUyMGJ1c3xlbnwxfHx8fDE3NzA0NjEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Restauración de Carrocería"
            description="Recuperación completa de pintura y estructura."
          />
          <BookFlip 
             beforeImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0eSUyMGVuZ2luZXxlbnwxfHx8fDE3NzA0NjEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            afterImage="https://images.unsplash.com/photo-1595367280236-ca8eacf62558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHdvcmtpbmclMjBvbiUyMGVuZ2luZXxlbnwxfHx8fDE3NzA0NjEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            title="Mantenimiento de Motor"
            description="Limpieza profunda y cambio de componentes vitales."
          />
        </div>
      </div>
    </div>
  );
};
