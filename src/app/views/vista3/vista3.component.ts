import { Component } from '@angular/core';
// CommonModule es opcional aquí si ya se importa en los componentes padre (de región)

@Component({
  selector: 'app-vista3',
  standalone: true,
  imports: [], // Añade CommonModule si lo necesitas directamente en este template
  templateUrl: './vista3.component.html',
  styleUrls: ['./vista3.component.css']
})
export class Vista3Component {
  // Contenido de la Vista 3 (Inventory)
}