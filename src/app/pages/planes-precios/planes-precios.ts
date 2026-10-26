import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-planes-precios',
  imports: [Navbar, Footer],
  templateUrl: './planes-precios.html',
  styleUrl: './planes-precios.css',
})
export class PlanesPrecios {
  periodo: 'mensual' | 'trimestral' = 'trimestral';
}
