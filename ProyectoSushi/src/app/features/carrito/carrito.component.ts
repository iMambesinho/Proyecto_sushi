
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  currentUser: any;
  carrito: any[] = [];

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/login']);
    } else {
      this.currentUser = JSON.parse(user);
      this.carrito = this.carritoService.obtener(this.currentUser.email);
    }
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    this.carritoService.vaciar(this.currentUser.email); 
    this.carrito.forEach(item => this.carritoService.agregar(item, this.currentUser.email));
  }

  vaciarCarrito() {
    this.carritoService.vaciar(this.currentUser.email);
    this.carrito = [];
  }
  goHome() { this.router.navigate(['/home']); }
  goPromociones() { this.router.navigate(['/promociones']); }
  goTablas() { this.router.navigate(['/tablas']); }
  goToProfile() { alert('Ir al perfil de ' + this.currentUser?.email); }
  goToCart() { this.router.navigate(['/carrito']); }
  logout() { localStorage.removeItem('currentUser'); this.router.navigate(['/login']); }
    goProfiles(){
  this.router.navigate(['/profiles']);
  }  

  
}
