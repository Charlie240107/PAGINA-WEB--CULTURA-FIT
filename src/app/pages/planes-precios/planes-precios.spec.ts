import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanesPrecios } from './planes-precios';

describe('PlanesPrecios', () => {
  let component: PlanesPrecios;
  let fixture: ComponentFixture<PlanesPrecios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesPrecios],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanesPrecios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
