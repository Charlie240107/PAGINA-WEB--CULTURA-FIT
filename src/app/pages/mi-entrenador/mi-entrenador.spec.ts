import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiEntrenador } from './mi-entrenador';

describe('MiEntrenador', () => {
  let component: MiEntrenador;
  let fixture: ComponentFixture<MiEntrenador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiEntrenador],
    }).compileComponents();

    fixture = TestBed.createComponent(MiEntrenador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
