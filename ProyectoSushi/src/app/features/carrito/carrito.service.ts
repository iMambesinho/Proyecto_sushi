import { Injectable } from '@angular/core';
// Servicio para manejar la lógica del carrito de compras, incluyendo agregar, obtener y vaciar productos
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  agregar(producto: any, userEmail: string) { // Agrega un producto al carrito del usuario 
    const key = `cart_${userEmail}`;
    const saved = localStorage.getItem(key);
    const carrito = saved ? JSON.parse(saved) : [];
    carrito.push(producto);
    localStorage.setItem(key, JSON.stringify(carrito));
  }

  obtener(userEmail: string) { // Obtiene los productos del carrito del usuario 
    const saved = localStorage.getItem(`cart_${userEmail}`);
    return saved ? JSON.parse(saved) : [];
  }

  vaciar(userEmail: string) { // Vacía el carrito del usuario 
    localStorage.removeItem(`cart_${userEmail}`);
  }
}
