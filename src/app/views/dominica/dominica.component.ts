import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent } from '../../components/quick-access-bar/quick-access-bar.component'; // Importar la barra
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router'; // Importar RouterOutlet, Router, ActivatedRoute

@Component({
  selector: 'app-dominica',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet], // Añadir QuickAccessBarComponent y RouterOutlet
  templateUrl: './dominica.component.html',
  styleUrl: './dominica.component.css'
})

export class DominicaComponent implements OnInit {
  currentBasePath: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('DominicaComponent currentBasePath:', this.currentBasePath);
  }
}