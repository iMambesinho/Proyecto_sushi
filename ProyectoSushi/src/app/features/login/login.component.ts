import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      // Obtener usuarios registrados desde localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);

      if (user) {
        // Guardar usuario logeado
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/home']); // Redirige a la página principal
      } else {
        alert('Email o contraseña incorrectos');
      }
    }
  }

  // Función para ir a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
