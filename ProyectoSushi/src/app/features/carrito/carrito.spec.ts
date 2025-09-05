import { ComponentFixture, TestBed } from '@angular/core/testing'; 

import { CarritoComponent } from '../carrito/carrito.component';

describe('CarritoComponent', () => { /* Conexiones entre html y css, .spec */
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      declarations: [CarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});