import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito/carrito.service';
import { PromocionesService, Promocion } from '../Promociones'; 


@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  currentUser: any;

  promociones: Promocion[] = []; 

  constructor(
    private router: Router, 
    private carritoService: CarritoService,
    private promocionesService: PromocionesService, 
    private cd: ChangeDetectorRef 
  ) {}

  
  agregarAlCarrito(promocion: Promocion) { 
    
    this.carritoService.agregar(promocion, this.currentUser.email);
    console.log(`Promoción: ${promocion.nombre} agregado al carrito`);
  }

  ngOnInit() { 
    const user = localStorage.getItem('currentUser');
    if (!user) {
      this.router.navigate(['/login']); 
    } else {
      this.currentUser = JSON.parse(user); 
      
      this.cargarPromociones(); 
    }
  }

 
  cargarPromociones() {
    this.promocionesService.getPromociones().subscribe({ 
      next: (data) => {
        this.promociones = data; 
        this.cd.detectChanges(); 
        console.log('PromocionesComponent: Promociones cargadas y detección de cambios forzada.');
      },
      error: (err) => console.error('Error al cargar promociones:', err)
    });
  }

  logout() { 
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  goToProfile() { 
     console.log('Ir al perfil de ' + this.currentUser?.email);
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