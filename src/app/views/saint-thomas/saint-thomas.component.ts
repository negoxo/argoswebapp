import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent, QuickAccessLink } from '../../components/quick-access-bar/quick-access-bar.component';
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
  quickAccessLinks: QuickAccessLink[] = []; // Declarar la propiedad para los enlaces

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('SaintThomasComponent currentBasePath:', this.currentBasePath);

    // Datos de ejemplo para Saint Thomas
    this.quickAccessLinks = [
      { label: 'HOME', routerLink: '/vista1', icon: 'bi-house-door-fill' },
      { label: 'TOTAL SALES', routerLink: `${this.currentBasePath}/total-sales`, icon: 'bi-cart', value: '$180,000', change: 15.1, trend: 'up', context: 'vs. mes anterior' },
      { label: 'INVENTORY', routerLink: `${this.currentBasePath}/inventory`, icon: 'bi-boxes', value: '6,500', context: 'Unidades', change: 0, trend: 'stable' },
      { label: 'CUMULATED DEMURRAGES', routerLink: `${this.currentBasePath}/cumulated-demurrages`, icon: 'bi-hourglass-split', value: '80', context: 'Horas', change: -5.5, trend: 'down' },
      { label: 'OUT-OF-SERVICE-EQUIPMENT', routerLink: `${this.currentBasePath}/out-of-service-equipment`, icon: 'bi-bell', value: '2', context: 'Equipos', change: -50, trend: 'declining' }, // Asumo declive si baja
      { label: 'FIELD STAFF', routerLink: `${this.currentBasePath}/field-staff`, icon: 'bi-people', value: '40', context: 'Personal', change: 2.0, trend: 'stable' },
    ];
  }
}