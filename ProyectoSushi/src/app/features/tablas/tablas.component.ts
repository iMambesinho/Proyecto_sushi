// src/app/features/tablas/tablas.component.ts

/* Angular imports */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito/carrito.service';
// 1. 🟢 Importación corregida: Asegúrate de que la ruta sea correcta (ej: '../table.service')
import { TableService, Table } from '../tablas';


@Component({ 
selector: 'app-tablas',
standalone: true,
imports: [CommonModule],
templateUrl: './tablas.component.html',
styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit { 
currentUser: any;

 // 2. 🟢 Propiedad de datos renombrada a 'tablas' (para que sea coherente con el HTML)
tablas: Table[] = []; 

constructor(
 private router: Router, 
 private carritoService: CarritoService,
 // 3. 🟢 Inyección renombrada a 'tableService' (y tipado correcto)
 private tableService: TableService, 
 private cd: ChangeDetectorRef 
 ) {}

 // 4. 🟢 Función para agregar, usando el tipo 'Table' y la variable 'tabla'
agregarAlCarrito(tabla: Table) { 
this.carritoService.agregar(tabla, this.currentUser.email);
// ⚠️ Reemplazamos alert por console.log o un modal personalizado
console.log(`Tabla: ${tabla.nombre} agregado al carrito`);
 }

ngOnInit() { 
const user = localStorage.getItem('currentUser');
if (!user) {
this.router.navigate(['/login']); 
} else {
this.currentUser = JSON.parse(user);
   // 5. 🟢 Llamamos a la función de carga renombrada
   this.cargarTablas();
}
}

 // 6. 🟢 FUNCIÓN DE CARGA: Renombrada y usando el TableService
 cargarTablas() {
this.tableService.getTables().subscribe({ // Usamos el método getTables()
next: (data) => {
// 7. 🟢 Asignamos los datos a la propiedad 'tablas'
this.tablas = data; 

this.cd.detectChanges(); 
console.log('TablasComponent: Tablas cargadas y detección de cambios forzada.');
},
error: (err) => console.error('Error al cargar tablas:', err)
});
}

logout() { 
localStorage.removeItem('currentUser');
this.router.navigate(['/login']);
}
goToProfile() { 
// ⚠️ Reemplazamos alert por console.log o un modal personalizado
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