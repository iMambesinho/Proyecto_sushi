
// Importa los decoradores y la interfaz para crear un componente y usar el ciclo de vida OnInit de Angular
import { Component, OnInit } from '@angular/core';

// Importa el módulo común de Angular, que incluye directivas como ngIf y ngFor
import { CommonModule } from '@angular/common';

// Importa el servicio personalizado para manejar la lógica del carrito de compras
import { CarritoService } from './carrito.service';

// Importa el servicio de enrutamiento para navegar entre páginas
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
  carrito: any[] = []; // Array para almacenar los productos en el carrito

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit() { // Verifica si el usuario está autenticado al iniciar el componente
    const user = localStorage.getItem('currentUser'); 
    if (!user) {
      this.router.navigate(['/login']);
    } else {
      this.currentUser = JSON.parse(user);
      this.carrito = this.carritoService.obtener(this.currentUser.email);
    }
  }
  /*Eliminar producto del carrito */
  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    this.carritoService.vaciar(this.currentUser.email); 
    this.carrito.forEach(item => this.carritoService.agregar(item, this.currentUser.email));
  }
  /*Vaciar carrito */
  vaciarCarrito() {
    this.carritoService.vaciar(this.currentUser.email);
    this.carrito = [];
  } 
  // Botones de navegación y acciones de usuario
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
