import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { HomeComponent } from './features/home/home.component';
import { PromocionesComponent } from './features/promociones/promociones.component';
import { TablasComponent } from './features/tablas/tablas.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'tablas', component: TablasComponent }
];

export const appRouter = provideRouter(routes);
