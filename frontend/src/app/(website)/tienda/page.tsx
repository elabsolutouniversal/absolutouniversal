import React from 'react';
import TiendaPrincipal from '@/components/tienda/TiendaPrincipal';
import { CarritoProvider } from '@/contexts/CarritoContext';

export default function TiendaPage() {
  return (
    <CarritoProvider>
      <TiendaPrincipal />
    </CarritoProvider>
  );
}
