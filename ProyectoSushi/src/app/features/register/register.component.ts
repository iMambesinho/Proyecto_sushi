import { Component } from '@angular/core'; // Importa decorador principal
import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { FormsModule } from '@angular/forms'; // Módulo para formularios
import { Router } from '@angular/router'; // Servicio de navegación

@Component({
  selector: 'app-register', // Selector del componente
  standalone: true, // Componente independiente
  imports: [CommonModule, FormsModule], // Importa módulos necesarios
  templateUrl: './register.component.html',  // HTML principal
  styleUrls: ['./register.component.css'] // CSS principal
})
export class RegisterComponent {
  email = '';  // Variable para correo
  confirmEmail = ''; // Variable para confirmar correo
  password = ''; // Variable para contraseña

  constructor(private router: Router) {} // Inyección de servicio de rutas

  register() { // Método principal para registrar usuario
    if (this.email !== this.confirmEmail) { // Verifica que los correos coincidan
      alert('Los correos electrónicos no coinciden');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]'); // Obtiene usuarios registrados

    const exists = users.some((u: { email: string; password: string }) => u.email === this.email); // Verifica si el correo ya existe

    if (exists) { // Si el correo ya está registrado
      alert('Este correo ya está registrado');
      return;
    }
    users.push({ email: this.email, password: this.password }); // Agrega nuevo usuario
    localStorage.setItem('users', JSON.stringify(users)); // Guarda usuarios en localStorage

    alert('Registro exitoso');
    this.router.navigate(['/login']); // Redirige a login
  }

  goToLogin() { // Método para ir a login
    this.router.navigate(['/login']);
  }
}

