import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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
    alert('Ir al carrito de compras');
  }
}

