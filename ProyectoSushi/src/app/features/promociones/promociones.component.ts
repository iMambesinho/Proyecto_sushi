import { Component, OnInit } from '@angular/core'; // Importa decorador y ciclo de vida
import { CommonModule } from '@angular/common'; // Importa módulo común de Angular
import { Router } from '@angular/router';      // Importa servicio de rutas
import { CarritoService } from '../carrito/carrito.service';  // Servicio para el carrito

interface Producto { // Define la estructura de un producto
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-promociones', // Selector del componente
  standalone: true, // Componente independiente
  imports: [CommonModule],  // Importa módulo común
  templateUrl: './promociones.component.html', // HTML principal
  styleUrls: ['./promociones.component.css'] // CSS principal
})
export class PromocionesComponent implements OnInit {
  currentUser: any; // Usuario actual

  productos: Producto[] = [ // Lista principal de productos en promoción
    {
      nombre: 'Hand Roll de Pollo, Queso, Palta (2x1)',
      descripcion: 'Incluye Soya o Unagi',
      precio: 5600,
      imagenUrl: 'assets/img/Hand Roll de Pollo.jpg'
    },
    {
      nombre: 'Hand Roll de Pollo, Queso, Cebollín (2x1)',
      descripcion: 'Incluye Soya o Unagi',
      precio: 5600,
      imagenUrl: 'assets/img/Hand Roll de Pollo.jpg'
    },
    {
      nombre: 'Hand Roll de Pimentón, Cebollín, Palta (2x1)',
      descripcion: 'Incluye Soya o Unagi',
      precio: 5600,
      imagenUrl: 'assets/img/Hand Roll de Pollo.jpg'
    },
    {
    nombre: 'Hand Roll de Pimentón, Queso, Aceitunas (2x1)',
      descripcion: 'Incluye Soya o Unagi',
      precio: 5600,
      imagenUrl: 'assets/img/Hand Roll de Pollo.jpg'
    },
    {
      nombre: 'Hand Roll de Champiñón, Queso, Pimentón (2x1)',
      descripcion: 'Incluye Soya o Unagi',
      precio: 5600,
      imagenUrl: 'assets/img/Hand Roll de Pollo.jpg'
    },
    {
      nombre: '2 Hand Rolls a elección',
      descripcion: 'Incluye Soya o Unagi',
      precio: 9000,
      imagenUrl: 'assets/img/Hand Roll de Pollo.jpg'
    },
    {
      nombre: 'Pizza Pepperoni Parmesano',
      descripcion: 'Salsa di Pomodoro, queso, orégano, pepperoni y parmesano',
      precio: 10990,
      imagenUrl: 'assets/img/Pizza Queso.jpg'
    },
    {
      nombre: 'Sushi + Gyosa + Bebida',
      descripcion: 'Tabla de 40 cortes, 10 Cheese Pollo, palta, 10 Sésamo Camarón, queso, cebollín 10 Ciboulette Palmito, queso, palta 10 Panko Kanikama, queso, cebollín + 5 Gyozas + Bebida. Incluye soya o unagi',
      precio: 26300,
      imagenUrl: 'assets/img/Gyosas.jpg'
    },
    {
      nombre: 'Combo Mix',
      descripcion: 'Papas Fritas - Ración de 500 grs, Nuggets de Pollo - Ración de 12 unidades, Empanaditas de Queso - Ración de 5 unidades, Aros de Cebolla - Ración de 5 unidades, GRATIS - Bebida de Lata Lata 350 ml.',
      precio: 20600,
      imagenUrl: 'assets/img/ComboMix.jpeg'
    },
    {
      nombre: 'Pizza + Empanada + Bebida',
      descripcion: 'Pizza familiar con Salsa di Pomodoro, queso, orégano, 3 ingredientes a elección + Ración de Empanaditas + Bebida.',
      precio: 21800,
      imagenUrl: 'assets/img/ComboPizza.jpg'
    }
  ];

  constructor(private router: Router, private carritoService: CarritoService) {} // Inyección de servicios principales
  
  agregarAlCarrito(producto: Producto) { // Agrega producto al carrito
  this.carritoService.agregar(producto, this.currentUser.email);
  alert(`${producto.nombre} agregado al carrito`);
}

  ngOnInit() { // Inicializa el componente y verifica usuario
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/login']);  // Redirige si no hay usuario
    } else {
      this.currentUser = JSON.parse(user); // Asigna usuario actual
    }
  }

  logout() {   // Cierra sesión
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  goToProfile() {  // Navega al perfil
    alert('Ir al perfil de ' + this.currentUser?.email);
  }
 
  goHome() {   // Navega a Home
    this.router.navigate(['/home']);
  }

  goPromociones() {   // Navega a Promociones
    this.router.navigate(['/promociones']);
  }

  goTablas() {   // Navega a Tablas
    this.router.navigate(['/tablas']);
  }
  goToCart() {  // Navega al carrito
  this.router.navigate(['/carrito']);
  }
  goProfiles(){  // Navega a perfiles
  this.router.navigate(['/profiles']);
  }  
}

