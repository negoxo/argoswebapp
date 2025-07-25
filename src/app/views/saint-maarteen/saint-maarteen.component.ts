import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent, QuickAccessLink } from '../../components/quick-access-bar/quick-access-bar.component';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saint-maarteen',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet],
  templateUrl: './saint-maarteen.component.html',
  styleUrl: './saint-maarteen.component.css'
})
export class SaintMaarteenComponent implements OnInit {
  currentBasePath: string = '';
  quickAccessLinks: QuickAccessLink[] = []; // Declarar la propiedad para los enlaces

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('SaintMaarteenComponent currentBasePath:', this.currentBasePath);

    // Datos de ejemplo para Saint Maarteen
    this.quickAccessLinks = [
      { label: 'HOME', routerLink: '/vista1', icon: 'bi-house-door-fill' },
      { label: 'TOTAL SALES', routerLink: `${this.currentBasePath}/total-sales`, icon: 'bi-cart', value: '$85,000', change: -3.5, trend: 'down', context: 'vs. mes anterior' },
      { label: 'INVENTORY', routerLink: `${this.currentBasePath}/inventory`, icon: 'bi-boxes', value: '3,200', context: 'Unidades', change: 0, trend: 'stable' }, // No hay cambio en el original, asumo 0
      { label: 'CUMULATED DEMURRAGES', routerLink: `${this.currentBasePath}/cumulated-demurrages`, icon: 'bi-hourglass-split', value: '150', context: 'Horas', change: 10.2, trend: 'up' }, // Datos de ejemplo
      { label: 'OUT-OF-SERVICE-EQUIPMENT', routerLink: `${this.currentBasePath}/out-of-service-equipment`, icon: 'bi-bell', value: '5', context: 'Equipos', change: 0, trend: 'stable' }, // Datos de ejemplo
      { label: 'FIELD STAFF', routerLink: `${this.currentBasePath}/field-staff`, icon: 'bi-people', value: '25', context: 'Personal', change: 5.0, trend: 'improving' }, // Datos de ejemplo
    ];
  }
}