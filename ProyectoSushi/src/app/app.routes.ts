// Importamos las herramientas necesarias de Angular Router
import { provideRouter, RouterModule, Routes } from '@angular/router';

// Importamos todos los componentes que usaremos en nuestras rutas
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { PromocionesComponent } from './features/promociones/promociones.component';
import { TablasComponent } from './features/tablas/tablas.component';
import { CarritoComponent } from './features/carrito/carrito.component';
import { SplashComponent } from './features/splash/splash.component';
import { ProfileComponent } from './features/profile/profile.component';

// Definimos las rutas de la aplicación
export const routes: Routes = [
  // Si el path está vacío (es decir, accedemos a la raíz del sitio), redirige a /login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Ruta para la pantalla de login
  { path: 'login', component: LoginComponent },

  // Ruta para la pantalla splash (pantalla de carga o bienvenida)
  { path: 'splash', component: SplashComponent },

  // Ruta para el registro de usuario
  { path: 'register', component: RegisterComponent },

  // Ruta principal o de inicio de la app después de login
  { path: 'home', component: HomeComponent },

  // Ruta para el perfil del usuario
  { path: 'profile', component: ProfileComponent },

  // Ruta para ver las promociones disponibles
  { path: 'promociones', component: PromocionesComponent },

  // Ruta para mostrar tablas (puede ser de productos, usuarios, etc.)
  { path: 'tablas', component: TablasComponent },

  // Ruta para el carrito de compras
  { path: 'carrito', component: CarritoComponent }
];

// Se exporta el proveedor de rutas que será usado en el módulo principal (main.ts o app.config.ts)
// Esto registra todas las rutas definidas para que Angular pueda manejarlas
export const appRouter = provideRouter(routes);
