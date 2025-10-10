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
  run = '';
  fullName = '';
  address = '';
  comuna = '';
  provincia = '';
  region = '';
  birthDate = '';
  gender = '';
  phone = '';
  email = '';
  password = '';

  constructor(private router: Router) {}

  register() {
    if (!this.run || !this.fullName || !this.address || !this.comuna || !this.provincia ||
        !this.region || !this.birthDate || !this.gender || !this.phone || !this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const exists = users.some((u: { email: string }) => u.email === this.email);

    if (exists) {
      alert('Este correo ya está registrado');
      return;
    }

    users.push({
      run: this.run,
      fullName: this.fullName,
      address: this.address,
      comuna: this.comuna,
      provincia: this.provincia,
      region: this.region,
      birthDate: this.birthDate,
      gender: this.gender,
      phone: this.phone,
      email: this.email,
      password: this.password
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro exitoso');
    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}