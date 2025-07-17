// C:\JoseDesarrollo\Portales\ArgosTerminalesDigitalesAntillasFrontend\argoswebapp\src\app\components\quick-access-bar\quick-access-bar.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-quick-access-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './quick-access-bar.component.html',
  styleUrls: ['./quick-access-bar.component.css']
})
export class QuickAccessBarComponent {
  /**
   * @Input links: Un array de objetos que define los botones de acceso rápido.
   * Cada objeto debe tener:
   * - label: El texto que se mostrará en el botón.
   * - routerLink: La ruta a la que navegará el botón.
   * - icon (opcional): La clase del icono de Bootstrap Icons (ej. 'bi-table').
   */
  @Input() links: { label: string; routerLink: string; icon?: string }[] = [];

  constructor() { }
}