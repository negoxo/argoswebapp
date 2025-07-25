import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Nueva interfaz para los datos de cada enlace/tarjeta
export interface QuickAccessLink {
  label: string;
  routerLink: string;
  icon: string; // Clase de ícono de Bootstrap
  value?: string | number; // Valor principal (ej. ventas, unidades)
  change?: number; // Porcentaje de cambio (ej. 8.2, -3.5)
  trend?: 'up' | 'down' | 'improving' | 'declining' | 'stable' | 'decreasing'; // Dirección de la tendencia
  context?: string; // Texto adicional (ej. "vs. mes anterior")
}

@Component({
  selector: 'app-quick-access-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './quick-access-bar.component.html',
  styleUrls: ['./quick-access-bar.component.css']
})
export class QuickAccessBarComponent implements OnInit {
  // Ahora el input es una lista de enlaces con toda la información necesaria
  @Input() links: QuickAccessLink[] = [];

  constructor() { }

  ngOnInit(): void {
    // La inicialización ahora se espera que venga del componente padre (vistas de región)
    // Se mantiene vacío aquí porque los enlaces se pasarán directamente.
  }
}