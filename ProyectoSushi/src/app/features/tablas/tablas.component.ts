/* Angular imports */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito/carrito.service';

interface Producto { /* Interfaz para definir la estructura de un producto */
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

@Component({ /* Decorador del componente */
  selector: 'app-tablas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit { /* Clase del componente */
  currentUser: any;

  productos: Producto[] = [ /* Array de productos */
    {
      nombre: 'Tabla 25 Mixta',
      descripcion: '10 Ciboulette: palmito, queso, palta 10 Panko: pollo, queso, cebollín 5 Gyozas de pollo. Incluye palitos, soya o unagi',
      precio: 12990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla 30 Mixta',
      descripcion: '10 Queso: pollo, palta 10 Ciboulette: palmito, queso, palta 10 Panko: Champiñón, queso, pimentón. Incluye palitos, soya o unagi',
      precio: 14990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla 40 Mixta',
      descripcion: '10 Queso: pollo, palta 10 Ciboulette: palmito, queso, palta 10 Panko: champiñón, queso, pimentón 10 Panko: kanikama, queso, cebollín. Incluye palitos, soya o unagi',
      precio: 18990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
    nombre: 'Tabla 50 Mixta',
      descripcion: '10 Queso: pollo, palta 10 Ciboulette: palmito, queso, palta 10 Sésamo: Camarón, queso, cebollín 10 Panko: champiñón, queso, pimentón 10 Panko: kanikama, queso, cebollín. Incluye palitos, soya o unagi',
      precio: 21990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla 60 Mixta',
      descripcion: '10 Queso: pollo, palta 10 Ciboulette: palmito, queso, palta 10 Sésamo: Camarón, queso, cebollín 10 Palta: pollo, queso, cebollín 10 Panko: champiñón, queso, pimentón 10 Panko: kanikama, queso, cebollín. Incluye palitos, soya o unagi',
      precio: 24990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla 70 Hot',
      descripcion: '10 Queso: pollo, palta 10 Ciboulette: palmito, queso, palta 10 Sésamo: Camarón, queso, cebollín 10 Palta: pollo, queso, cebollín 10 Panko: champiñón, queso, pimentón 10 Panko: kanikama, queso, cebollín 10 Panko: pollo, queso, pimentón. Incluye palitos, soya o unagi',
      precio: 27990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla 80 Mixta',
      descripcion: '10 Queso: pollo, palta 10 Ciboulette: palmito, queso, palta 10 Sésamo: Camarón, queso, cebollín 10 Palta: pollo, queso, cebollín 10 Nori: Choclito, queso, palta 10 Panko: champiñón, queso, pimentón 10 Panko: kanikama, queso, cebollín 10 Panko: pollo, queso, pimentón. Incluye palitos, soya o unagi',
      precio: 31990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla 100 Mixta',
      descripcion: '10 Queso: pollo, palta 10 Ciboulette: palmito, queso, palta 10 Sésamo: Camarón, queso, cebollín 10 Palta: pollo, queso, cebollín 10 Nori: choclito, queso, palta 10 Panko: champiñón, queso, pimentón 10 Panko: kanikama, queso, cebollín 10 Panko: pollo, queso, pimentón 10 Korokkes de pollo 5 Gyozas de camarón 5 Gyozas de pollo. Incluye palitos, soya o unagi',
      precio: 39990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla Vegetariana 25 Mixta',
      descripcion: '10 Queso: choclito, palta 10 Ciboulette: palmito, queso, palta 5 Gyozas de verdura. Incluye palitos, soya o unagi',
      precio: 13990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    },
    {
      nombre: 'Tabla Vegetariana 40 Mixta',
      descripcion: '10 Queso: choclito, palta 10 Ciboulette: palmito, queso, palta 10 Panko: champiñón, queso, pimentón 10 Panko: Aceituna, queso, cebollín. Incluye palitos, soya o unagi',
      precio: 18990,
      imagenUrl: 'assets/img/Tabla40.jpg'
    }
  ];
  
  constructor(private router: Router, private carritoService: CarritoService) {} /* Inyección de dependencias para el router y el servicio de carrito */

  agregarAlCarrito(producto: Producto) { /* Método para agregar un producto al carrito */
  this.carritoService.agregar(producto, this.currentUser.email);
  alert(`${producto.nombre} agregado al carrito`); /* Notificación al usuario */
}

  ngOnInit() { /* Método que se ejecuta al inicializar el componente */
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/login']); /* Redirigir al login si no hay usuario */
    } else {
      this.currentUser = JSON.parse(user);
    }
  }

  logout() { /* Método para cerrar sesión */
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  goToProfile() { /* Método para ir al perfil del usuario */
    alert('Ir al perfil de ' + this.currentUser?.email);
  }

  goHome() { /* Método para ir a la página principal */
    this.router.navigate(['/home']);
  }

  goPromociones() { /* Método para ir a la página de promociones */
    this.router.navigate(['/promociones']);
  }

  goTablas() { /* Método para ir a la página de tablas */
    this.router.navigate(['/tablas']);
  }

  goToCart() { /* Método para ir a la página del carrito */
    this.router.navigate(['/carrito']);
  }

  goProfiles(){ /* Método para ir a la página de perfiles */
    this.router.navigate(['/profiles']);
  }  

}
