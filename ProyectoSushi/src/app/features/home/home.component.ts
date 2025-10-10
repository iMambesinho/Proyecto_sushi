import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../carrito/carrito.service';
import { ProductoService, Producto } from '../producto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  productos: Producto[] = [];

  constructor(
    private router: Router,
    private carritoService: CarritoService,
    private productoService: ProductoService,
    private cd: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/login']);
    } else {
      this.currentUser = JSON.parse(user);
      this.cargarProductos();
    }
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        
        
        this.cd.detectChanges(); 

        console.log('HomeComponent: Productos cargados y detección de cambios forzada.');
      },
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregar(producto, this.currentUser.email);
    alert(`${producto.nombre} agregado al carrito`);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  goToProfile() {
    alert('Ir al perfil de ' + this.currentUser?.email);
  }

  goToCart() {
    this.router.navigate(['/carrito']);
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

  goProfiles() {
    this.router.navigate(['/profiles']);
  }
}