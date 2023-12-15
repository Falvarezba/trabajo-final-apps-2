import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarAutoPage } from './seleccionar-auto.page';

describe('SeleccionarAutoPage', () => {
  let component: SeleccionarAutoPage;
  let fixture: ComponentFixture<SeleccionarAutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionarAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
