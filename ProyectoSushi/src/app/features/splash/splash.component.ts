import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  progress: number = 0;

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const interval = setInterval(() => {
    if (this.progress < 100) {
      this.progress += 1;
      this.cd.detectChanges(); 
    } else {
      clearInterval(interval);
      this.router.navigate(['/home']);
    }
  }, 30);
}
}