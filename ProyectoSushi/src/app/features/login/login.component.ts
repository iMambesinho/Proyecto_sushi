/* importaciones necesarias de angular */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({ /* decorador de componente (login) */
  selector: 'app-login',
  standalone: true, /* componente independiente */
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { /* clase del componente (login) */
  form: FormGroup; /* formulario reactivo para login */

  constructor(private fb: FormBuilder, private router: Router) { /*constructor con inyección de dependencias */
    this.form = this.fb.group({ /* inicialización del formulario con los campos requeridos*/
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email(): FormControl { /* getter para el control de email */
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl { /* getter para el control de contraseña */
    return this.form.get('password') as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      const users = JSON.parse(localStorage.getItem('users') || '[]'); /* obtener usuarios del localStorage */
      const user = users.find((u: { email: string; password: string }) => /* buscar usuario que coincida con email y contraseña */
        u.email === this.email.value && u.password === this.password.value
      );

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user)); /* guardar usuario en localStorage si existe */
        this.router.navigate(['/splash']);
      } else {
        alert('Correo o contraseña incorrectos'); /* alerta si las credenciales son incorrectas */
      }
    }
  }

  goToRegister() { /* navegar a la página de registro */
    this.router.navigate(['/register']);
  }
  goToAdminLogin() {
    this.router.navigate(['/admin-login']); // Redirige a la nueva ruta
  }
}
