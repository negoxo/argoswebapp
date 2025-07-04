import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. Importa los módulos necesarios para el enrutamiento
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-quick-access-bar',
  standalone: true,
  // 2. Añade RouterLink y RouterLinkActive a la lista de imports
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './quick-access-bar.component.html',
  styleUrls: ['./quick-access-bar.component.css']
})
export class QuickAccessBarComponent {

}