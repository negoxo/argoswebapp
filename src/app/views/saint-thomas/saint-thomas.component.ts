import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent } from '../../components/quick-access-bar/quick-access-bar.component';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saint-thomas',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet],
  templateUrl: './saint-thomas.component.html',
  styleUrl: './saint-thomas.component.css'
})
export class SaintThomasComponent implements OnInit {
  currentBasePath: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Al cargar el componente de la región, obtenemos su ruta base actual.
    // Esto es crucial para que la quick-access-bar pueda construir los enlaces correctos
    // para las sub-vistas (ej. /saint-maarteen/total-sales).
    this.currentBasePath = this.router.url.split('?')[0]; // Elimina los query parameters si los hay.
  }
}