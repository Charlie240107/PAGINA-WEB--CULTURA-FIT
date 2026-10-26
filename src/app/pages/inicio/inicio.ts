import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-inicio',
  imports: [Navbar, Footer],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio { }
