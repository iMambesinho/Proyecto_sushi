// Importamos las herramientas necesarias de Angular Router
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login';

// Importamos todos los componentes que usaremos en nuestras rutas
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { PromocionesComponent } from './features/promociones/promociones.component';
import { TablasComponent } from './features/tablas/tablas.component';
import { CarritoComponent } from './features/carrito/carrito.component';
import { SplashComponent } from './features/splash/splash.component';
import { ProfileComponent } from './features/profile/profile.component';
import { Admin } from './features/admin/admin';


// Definimos las rutas de la aplicación
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'tablas', component: TablasComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'admin', component: Admin },
  { path: 'admin-login', component: AdminLoginComponent },
];

export const appRouter = provideRouter(routes);
