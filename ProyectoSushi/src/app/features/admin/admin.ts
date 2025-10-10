import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 👈 Importa el Router

@Component({
  selector: 'app-admin',
  standalone: true, // 👈 Asegúrate de que sea standalone
  imports: [CommonModule], // 👈 Y de importar CommonModule
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

  // Inyecta el Router en el constructor para poder usarlo
  constructor(private router: Router) {}

  /**
   * Navega de vuelta a la página de login de usuario.
   */
  logout() {
    // Aquí podrías añadir lógica para limpiar tokens o datos de sesión en el futuro
    console.log('Cerrando sesión de administrador...');
    this.router.navigate(['/login']); // Redirige a la ruta de login de usuario
  }
}