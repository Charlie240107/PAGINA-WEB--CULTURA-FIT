import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  imports: [Navbar, Footer],
  selector: 'app-mi-entrenador',
  styleUrl: './mi-entrenador.css',
  templateUrl: './mi-entrenador.html',
})
export class MiEntrenador { }
