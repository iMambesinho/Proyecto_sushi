import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css']
})
export class AdminLoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onAdminSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;

      // Lógica de validación temporal (credenciales)
      if (email === 'admin@sushi.cl' && password === 'admin123') {
        alert('Bienvenido, Administrador');
        this.router.navigate(['/admin']); // Redirige al dashboard de admin
      } else {
        alert('Credenciales de administrador incorrectas.');
      }
    }
  }

  goToUserLogin() {
    this.router.navigate(['/login']); // Vuelve al login de usuario
  }
}