import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent } from '../../components/quick-access-bar/quick-access-bar.component'; // Importar la barra
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router'; // Importar RouterOutlet, Router, ActivatedRoute

@Component({
  selector: 'app-antigua',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet], // Añadir QuickAccessBarComponent y RouterOutlet
  templateUrl: './antigua.component.html',
  styleUrl: './antigua.component.css'
})

export class AntiguaComponent implements OnInit {
  currentBasePath: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('AntiguaComponent currentBasePath:', this.currentBasePath);
  }
}