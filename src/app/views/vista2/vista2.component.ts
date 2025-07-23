import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Ya no es necesario importar aquí si el padre lo hace

@Component({
  selector: 'app-vista2',
  standalone: true,
  imports: [], // Deja esto vacío o con los módulos específicos que use Vista2
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component {
  // Lógica específica de la Vista 2 (Total Sales)
}