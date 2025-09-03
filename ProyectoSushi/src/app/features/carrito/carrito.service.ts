import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  agregar(producto: any, userEmail: string) {
    const key = `cart_${userEmail}`;
    const saved = localStorage.getItem(key);
    const carrito = saved ? JSON.parse(saved) : [];
    carrito.push(producto);
    localStorage.setItem(key, JSON.stringify(carrito));
  }

  obtener(userEmail: string) {
    const saved = localStorage.getItem(`cart_${userEmail}`);
    return saved ? JSON.parse(saved) : [];
  }

  vaciar(userEmail: string) {
    localStorage.removeItem(`cart_${userEmail}`);
  }
}
