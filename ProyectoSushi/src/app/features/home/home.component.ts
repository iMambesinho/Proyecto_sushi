import { Component, OnInit } from '@angular/core';  // Importa decorador y ciclo de vida principal
import { Router } from '@angular/router'; // Servicio de navegación
import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { CarritoService } from '../carrito/carrito.service';  // Servicio para el carrito

interface Producto { // Estructura principal de un producto
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-home', // Selector del componente
  standalone: true, // Componente independiente
  imports: [CommonModule], // Importa módulo común
  templateUrl: './home.component.html', // HTML principal
  styleUrls: ['./home.component.css'] // CSS principal
})
export class HomeComponent implements OnInit {
  currentUser: any; // Usuario actual
  productos: Producto[] = [ // Lista principal de productos
    {
      nombre: 'Tabla 40 Mixta',
      descripcion: '10 piezas panko pollo, 10 sésamo camarón, 10 queso salmón',
      precio: 17990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Gohan de Salmón',
      descripcion: 'Base de arroz con palta, queso crema, cebollín y sésamo',
      precio: 7990,
      imagenUrl: 'assets/img/GohanS.jpg'
    },
    {
      nombre: 'Sushi Roll Especial',
      descripcion: 'Rollo de salmón y palta con salsa especial',
      precio: 10990,
      imagenUrl: 'assets/img/SalmonP.jpg'
    },
    {
    nombre: 'Tabla 30 Hot',
      descripcion: '10 piezas envueltas en panko, relleno con pollo, queso crema y palta. 10 piezas en vueltas en panko, relleno de camarón, queso crema y cebollín. 10 piezas envuelto en panko, relleno con kanikama, queso crema y cebollin,2unaguis,1soya',
      precio: 17990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla 30 Mixta',
      descripcion: 'Rollo de salmón y palta con salsa especial',
      precio: 10990,
      imagenUrl: 'assets/img/SalmonP.jpg'
    },
    {
      nombre: 'Tabla 50 Hot',
      descripcion: 'Rollo de salmón y palta con salsa especial',
      precio: 10990,
      imagenUrl: 'assets/img/SalmonP.jpg'
    },
    {
      nombre: 'Tabla 60 Mixta',
      descripcion: 'Rollo de salmón y palta con salsa especial',
      precio: 10990,
      imagenUrl: 'assets/img/SalmonP.jpg'
    },
    {
      nombre: 'Tabla Vegetariana 30 Mixta',
      descripcion: 'Rollo de salmón y palta con salsa especial',
      precio: 10990,
      imagenUrl: 'assets/img/SalmonP.jpg'
    },
    {
      nombre: 'Tabla 80 Mixta',
      descripcion: 'Rollo de salmón y palta con salsa especial',
      precio: 10990,
      imagenUrl: 'assets/img/SalmonP.jpg'
    },
    {
      nombre: 'Tabla 100 Mixta',
      descripcion: 'Rollo de salmón y palta con salsa especial',
      precio: 10990,
      imagenUrl: 'assets/img/SalmonP.jpg'
    }
  ];

  constructor(private router: Router, private carritoService: CarritoService) {} // Inyección de servicios principales
  
  agregarAlCarrito(producto: Producto) {  // Agrega producto al carrito
  this.carritoService.agregar(producto, this.currentUser.email);
  alert(`${producto.nombre} agregado al carrito`);
}
  ngOnInit() { // Verifica si hay usuario logueado
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/login']); // Redirige si no hay usuario
    } else {
      this.currentUser = JSON.parse(user);  // Asigna usuario actual
    }
  }

  logout() {  // Cierra sesión
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  goToProfile() { // Navega al perfil
    alert('Ir al perfil de ' + this.currentUser?.email);
  }

  goToCart() { // Navega al carrito
  this.router.navigate(['/carrito']);
  }
  goHome() {  // Navega a Home
  this.router.navigate(['/home']);
  }
  goPromociones() {  // Navega a Promociones
  this.router.navigate(['/promociones']);
  }
  goTablas() { // Navega a Tablas
  this.router.navigate(['/tablas']);
  }
  goProfiles(){ // Navega a perfiles
  this.router.navigate(['/profiles']);
  }  
}
