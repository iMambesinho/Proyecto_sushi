// src/app/features/promociones/promociones.component.ts

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito/carrito.service';
//  Importamos el servicio y la interfaz que usa Home
import { ProductoService, Producto } from '../producto'; 


@Component({
 selector: 'app-promociones',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './promociones.component.html',
 styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
 currentUser: any;
 
  //  Ahora toma los datos de la API
 productos: Producto[] = []; 

 constructor(
    private router: Router, 
    private carritoService: CarritoService,
    private productoService: ProductoService, 
    private cd: ChangeDetectorRef 
  ) {}

 agregarAlCarrito(producto: Producto) { 
   this.carritoService.agregar(producto, this.currentUser.email);
   alert(`${producto.nombre} agregado al carrito`);
  }

 ngOnInit() { 
 const user = localStorage.getItem('currentUser');
 if (!user) {
 this.router.navigate(['/login']); 
 } else {
 this.currentUser = JSON.parse(user); 
      //  Llamamos a la función de carga
      this.cargarProductos();
 }
 }

  // FUNCIÓN DE CARGA
  cargarProductos() {
 this.productoService.getProductos().subscribe({
 next: (data) => {
 this.productos = data;
        // Forzar la actualización de la vista
 this.cd.detectChanges(); 
 console.log('PromocionesComponent: Productos cargados y detección de cambios forzada.');
 },
 error: (err) => console.error('Error al cargar productos en Promociones:', err)
 });
 }

 logout() { 
 localStorage.removeItem('currentUser');
 this.router.navigate(['/login']);
 }

 goToProfile() { 
  alert('Ir al perfil de ' + this.currentUser?.email);
 }

 goHome() { 
 this.router.navigate(['/home']);
 }

 goPromociones() { 
 this.router.navigate(['/promociones']);
 }

 goTablas() { 
 this.router.navigate(['/tablas']);
 }

 goToCart() {
   this.router.navigate(['/carrito']);
 }
 
 goProfiles(){ 
   this.router.navigate(['/profiles']);
 } 
}