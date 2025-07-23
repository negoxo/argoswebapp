import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-quick-access-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './quick-access-bar.component.html',
  styleUrls: ['./quick-access-bar.component.css']
})
export class QuickAccessBarComponent implements OnInit {
  @Input() basePath: string = ''; // Input para recibir la ruta base de la región

  // Esta lista se inicializa en ngOnInit para usar el basePath
  links: { label: string; routerLink: string; icon?: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    // Los enlaces se construyen dinámicamente usando la ruta base proporcionada.
    // El botón HOME siempre navega a la ruta principal '/vista1'.
    this.links = [
      { label: 'HOME', routerLink: '/vista1', icon: 'bi-speedometer2' },
      { label: 'TOTAL SALES', routerLink: `${this.basePath}/total-sales`, icon: 'bi-graph-up' },
      { label: 'INVENTORY', routerLink: `${this.basePath}/inventory`, icon: 'bi-table' },
      { label: 'CUMULATED DEMURRAGES', routerLink: `${this.basePath}/cumulated-demurrages`, icon: 'bi-sliders' },
      { label: 'OUT-OF-SERVICE-EQUIPMENT', routerLink: `${this.basePath}/out-of-service-equipment`, icon: 'bi-gear' },
      { label: 'FIELD STAFF', routerLink: `${this.basePath}/field-staff`, icon: 'bi-shield-check' },
    ];
  }
}