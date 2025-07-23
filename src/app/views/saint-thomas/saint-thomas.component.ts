import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickAccessBarComponent } from '../../components/quick-access-bar/quick-access-bar.component';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saint-thomas',
  standalone: true,
  imports: [CommonModule, QuickAccessBarComponent, RouterOutlet],
  templateUrl: './saint-thomas.component.html',
  styleUrl: './saint-thomas.component.css'
})

export class SaintThomasComponent implements OnInit {
  currentBasePath: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.currentBasePath = '/' + this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log('SaintThomasComponent currentBasePath:', this.currentBasePath);
  }
}