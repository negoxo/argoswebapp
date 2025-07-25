import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent, QuickAccessLink } from '../../components/quick-access-bar/quick-access-bar.component'; // Importar la barra
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router'; // Importar RouterOutlet, Router, ActivatedRoute

@Component({
  selector: 'app-antigua',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet], // Añadir QuickAccessBarComponent y RouterOutlet
  templateUrl: './antigua.component.html',
  styleUrl: './antigua.component.css'
})

export class AntiguaComponent implements OnInit {
  currentBasePath: string = '';
  quickAccessLinks: QuickAccessLink[] = []; // Declarar la propiedad para los enlaces

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('AntiguaComponent currentBasePath:', this.currentBasePath);

    // Datos de ejemplo para Antigua
    this.quickAccessLinks = [
      { label: 'HOME', routerLink: '/vista1', icon: 'bi-house-door-fill' },
      { label: 'TOTAL SALES', routerLink: `${this.currentBasePath}/total-sales`, icon: 'bi-cart', value: '$60,000', change: 2.1, trend: 'up', context: 'vs. mes anterior' },
      { label: 'INVENTORY', routerLink: `${this.currentBasePath}/inventory`, icon: 'bi-boxes', value: '2,100', context: 'Unidades', change: 0, trend: 'stable' },
      { label: 'CUMULATED DEMURRAGES', routerLink: `${this.currentBasePath}/cumulated-demurrages`, icon: 'bi-hourglass-split', value: '120', context: 'Horas', change: 8.0, trend: 'up' },
      { label: 'OUT-OF-SERVICE-EQUIPMENT', routerLink: `${this.currentBasePath}/out-of-service-equipment`, icon: 'bi-bell', value: '3', context: 'Equipos', change: 0, trend: 'stable' },
      { label: 'FIELD STAFF', routerLink: `${this.currentBasePath}/field-staff`, icon: 'bi-people', value: '18', context: 'Personal', change: -2.5, trend: 'declining' },
    ];
  }
}