import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css'] // Apunta a su propio archivo CSS
})
export class Vista2Component {
  // No hay propiedades de datos (salesData, inventoryData, etc.) aquí
  // porque el HTML de vista2 no las usa en esta versión.
}