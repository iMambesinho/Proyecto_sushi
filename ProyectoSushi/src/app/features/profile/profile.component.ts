import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Objeto para almacenar los datos del usuario logueado
  currentUser: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Al iniciar el componente, busca los datos del usuario en localStorage
    const userJson = localStorage.getItem('currentUser');

    if (userJson) {
      // Si encuentra datos, los convierte de texto (JSON) a un objeto
      this.currentUser = JSON.parse(userJson);
    } else {
      // Si no hay ningún usuario logueado, redirige a la página de login
      alert('No has iniciado sesión.');
      this.router.navigate(['/login']);
    }
  }

  // Método para volver a la página anterior o a una página principal
  goBack() {
    // Puedes cambiar '/home' o '/tablas' por la ruta a la que quieras que vuelva el usuario
    this.router.navigate(['/tablas']);
  }
}
