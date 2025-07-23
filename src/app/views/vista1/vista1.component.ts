import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router'; // Importa Router

// Interfaz para la estructura de un indicador individual
interface Indicator {
  value: number;
  change?: number; // Para ventas/rendimiento
  trend: 'up' | 'down' | 'improving' | 'declining' | 'stable' | 'decreasing';
  context: string; // Texto descriptivo (ej. "vs. mes anterior", "Días de Suministro")
}

// Interfaz para el conjunto de indicadores de una región
interface RegionData {
  name: string;
  sales: Indicator;
  inventory: Indicator;
  performance: Indicator;
}

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.css'
})
export class Vista1Component implements OnInit {

  regionsData: RegionData[] = []; // Array para almacenar los datos de todas las regiones

  // selectedRegion: string | null = null; // Podrías usar esto para saber qué región está seleccionada

  constructor(private router: Router) { } // Inyecta el Router

  ngOnInit(): void {
    // Cargar datos de los indicadores para cada región
    this.loadRegionsIndicatorData();
  }

  private loadRegionsIndicatorData(): void {
    this.regionsData = [
      {
        name: 'Antilles',
        sales: { value: 125000, change: 8.2, trend: 'up', context: 'vs. mes anterior' },
        inventory: { value: 5000, trend: 'stable', context: 'Días de Suministro: 30' },
        performance: { value: 92, trend: 'improving', context: 'Últimos 30 días' }
      },
      {
        name: 'Saint Maarteen',
        sales: { value: 85000, change: -3.5, trend: 'down', context: 'vs. mes anterior' },
        inventory: { value: 3200, trend: 'decreasing', context: 'Días de Suministro: 20' },
        performance: { value: 78, trend: 'declining', context: 'Últimos 30 días' }
      },
      {
        name: 'Saint Thomas',
        sales: { value: 180000, change: 15.1, trend: 'up', context: 'vs. mes anterior' },
        inventory: { value: 6500, trend: 'stable', context: 'Días de Suministro: 50' },
        performance: { value: 95, trend: 'improving', context: 'Últimos 30 días' }
      },
      {
        name: 'Antigua',
        sales: { value: 60000, change: 2.1, trend: 'up', context: 'vs. mes anterior' },
        inventory: { value: 2100, trend: 'stable', context: 'Días de Suministro: 25' },
        performance: { value: 85, trend: 'improving', context: 'Últimos 30 días' }
      },
      {
        name: 'Dominica',
        sales: { value: 45000, change: -7.0, trend: 'down', context: 'vs. mes anterior' },
        inventory: { value: 1500, trend: 'decreasing', context: 'Días de Suministro: 15' },
        performance: { value: 70, trend: 'declining', context: 'Últimos 30 días' }
      }
    ];
  }

  // Nuevo método para manejar el clic en los botones de región
  selectRegion(regionName: string): void {
    console.log(`Región seleccionada: ${regionName}`);
    // Convertir el nombre de la región a un formato de URL (ej. "Saint Maarteen" -> "saint-maarteen")
    const routePath = regionName.toLowerCase().replace(/\s/g, '-');
    this.router.navigate(['/', routePath]); // Navegar a la ruta dinámica
  }
}