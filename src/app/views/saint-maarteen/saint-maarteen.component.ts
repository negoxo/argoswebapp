import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent } from '../../components/quick-access-bar/quick-access-bar.component';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router'; // Asegúrate de importar ActivatedRoute

@Component({
  selector: 'app-saint-maarteen',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet],
  templateUrl: './saint-maarteen.component.html',
  styleUrl: './saint-maarteen.component.css'
})
export class SaintMaarteenComponent implements OnInit {
  currentBasePath: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { } // Inyecta ActivatedRoute

  ngOnInit(): void {
    // CAMBIO CLAVE AQUÍ: Usa directamente la URL del snapshot de la ruta activa del componente de región.
    // Esto obtendrá 'saint-maarteen' para la ruta '/saint-maarteen'.
    // Aseguramos que empiece con '/' para hacerla una ruta absoluta.
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('SaintMaarteenComponent currentBasePath:', this.currentBasePath); // Para depuración
  }
}