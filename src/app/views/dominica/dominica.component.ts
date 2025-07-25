import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent, QuickAccessLink } from '../../components/quick-access-bar/quick-access-bar.component'; // Importar la barra
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router'; // Importar RouterOutlet, Router, ActivatedRoute

@Component({
  selector: 'app-dominica',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet], // Añadir QuickAccessBarComponent y RouterOutlet
  templateUrl: './dominica.component.html',
  styleUrl: './dominica.component.css'
})

export class DominicaComponent implements OnInit {
  currentBasePath: string = '';
  quickAccessLinks: QuickAccessLink[] = []; // Declarar la propiedad para los enlaces

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('DominicaComponent currentBasePath:', this.currentBasePath);

    // Datos de ejemplo para Dominica
    this.quickAccessLinks = [
      { label: 'HOME', routerLink: '/vista1', icon: 'bi-house-door-fill' },
      { label: 'TOTAL SALES', routerLink: `${this.currentBasePath}/total-sales`, icon: 'bi-cart', value: '$45,000', change: -7.0, trend: 'down', context: 'vs. mes anterior' },
      { label: 'INVENTORY', routerLink: `${this.currentBasePath}/inventory`, icon: 'bi-boxes', value: '1,500', context: 'Unidades', change: -10.0, trend: 'decreasing' },
      { label: 'CUMULATED DEMURRAGES', routerLink: `${this.currentBasePath}/cumulated-demurrages`, icon: 'bi-hourglass-split', value: '180', context: 'Horas', change: 15.0, trend: 'up' },
      { label: 'OUT-OF-SERVICE-EQUIPMENT', routerLink: `${this.currentBasePath}/out-of-service-equipment`, icon: 'bi-bell', value: '7', context: 'Equipos', change: 2.0, trend: 'stable' },
      { label: 'FIELD STAFF', routerLink: `${this.currentBasePath}/field-staff`, icon: 'bi-people', value: '15', context: 'Personal', change: 0, trend: 'stable' },
    ];
  }
}