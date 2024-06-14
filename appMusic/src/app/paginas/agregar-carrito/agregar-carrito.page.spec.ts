import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarCarritoPage } from './agregar-carrito.page';

describe('AgregarCarritoPage', () => {
  let component: AgregarCarritoPage;
  let fixture: ComponentFixture<AgregarCarritoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
