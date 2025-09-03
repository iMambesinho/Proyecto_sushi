import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  confirmEmail = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    if (this.email !== this.confirmEmail) {
      alert('Los correos electrónicos no coinciden');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const exists = users.some((u: { email: string; password: string }) => u.email === this.email);

    if (exists) {
      alert('Este correo ya está registrado');
      return;
    }
    users.push({ email: this.email, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro exitoso');
    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

