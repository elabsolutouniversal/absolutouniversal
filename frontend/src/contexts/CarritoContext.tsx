'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Producto } from '@/data/tienda/productos';

interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

interface CarritoState {
  items: ItemCarrito[];
  total: number;
}

type CarritoAction =
  | { type: 'AGREGAR_PRODUCTO'; payload: Producto }
  | { type: 'REMOVER_PRODUCTO'; payload: string }
  | { type: 'CAMBIAR_CANTIDAD'; payload: { id: string; cantidad: number } }
  | { type: 'LIMPIAR_CARRITO' };

const initialState: CarritoState = {
  items: [],
  total: 0,
};

function carritoReducer(state: CarritoState, action: CarritoAction): CarritoState {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO': {
      const existingItem = state.items.find(item => item.producto.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.producto.id === action.payload.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
          total: state.total + action.payload.precio,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { producto: action.payload, cantidad: 1 }],
          total: state.total + action.payload.precio,
        };
      }
    }

    case 'REMOVER_PRODUCTO': {
      const itemToRemove = state.items.find(item => item.producto.id === action.payload);
      if (!itemToRemove) return state;

      return {
        ...state,
        items: state.items.filter(item => item.producto.id !== action.payload),
        total: state.total - (itemToRemove.producto.precio * itemToRemove.cantidad),
      };
    }

    case 'CAMBIAR_CANTIDAD': {
      const item = state.items.find(item => item.producto.id === action.payload.id);
      if (!item) return state;

      const cantidadAnterior = item.cantidad;
      const nuevaCantidad = Math.max(0, action.payload.cantidad);

      if (nuevaCantidad === 0) {
        return {
          ...state,
          items: state.items.filter(item => item.producto.id !== action.payload.id),
          total: state.total - (item.producto.precio * cantidadAnterior),
        };
      }

      return {
        ...state,
        items: state.items.map(item =>
          item.producto.id === action.payload.id
            ? { ...item, cantidad: nuevaCantidad }
            : item
        ),
        total: state.total + (item.producto.precio * (nuevaCantidad - cantidadAnterior)),
      };
    }

    case 'LIMPIAR_CARRITO':
      return initialState;

    default:
      return state;
  }
}

interface CarritoContextType {
  state: CarritoState;
  agregarProducto: (producto: Producto) => void;
  removerProducto: (id: string) => void;
  cambiarCantidad: (id: string, cantidad: number) => void;
  limpiarCarrito: () => void;
  obtenerCantidadProducto: (id: string) => number;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export function CarritoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  const agregarProducto = (producto: Producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto });
  };

  const removerProducto = (id: string) => {
    dispatch({ type: 'REMOVER_PRODUCTO', payload: id });
  };

  const cambiarCantidad = (id: string, cantidad: number) => {
    dispatch({ type: 'CAMBIAR_CANTIDAD', payload: { id, cantidad } });
  };

  const limpiarCarrito = () => {
    dispatch({ type: 'LIMPIAR_CARRITO' });
  };

  const obtenerCantidadProducto = (id: string) => {
    const item = state.items.find(item => item.producto.id === id);
    return item ? item.cantidad : 0;
  };

  return (
    <CarritoContext.Provider
      value={{
        state,
        agregarProducto,
        removerProducto,
        cambiarCantidad,
        limpiarCarrito,
        obtenerCantidadProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (context === undefined) {
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
}

