import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito/carrito.service';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenUrl: string;
}

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  currentUser: any;

  productos: Producto[] = [
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

  constructor(private router: Router, private carritoService: CarritoService) {}
  
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
    }
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

