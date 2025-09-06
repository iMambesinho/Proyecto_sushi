/* importaciones necesarias para el componente */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
/* decorador de componente (splash) */
@Component({
  selector: 'app-splash', 
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit { /* clase del componente (splash) */
  progress: number = 0; /* variable para el progreso del splash */

  constructor(private router: Router, private cd: ChangeDetectorRef) {} /* constructor con inyección de dependencias */

  ngOnInit(): void { /* método que se ejecuta al inicializar el componente */
    const interval = setInterval(() => { /* intervalo para actualizar el progreso */
    if (this.progress < 100) { /* incrementar el progreso hasta 100% */
      this.progress += 1; 
      this.cd.detectChanges(); 
    } else { /* una vez alcanzado el 100%, navegar a la página principal */
      clearInterval(interval);
      this.router.navigate(['/home']); /* navegación a la página principal */
    }
  }, 30);
}
}