import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common'; // Importa DatePipe
import { Router } from '@angular/router';

// Nuevas interfaces para la estructura de los datos de cada tarjeta
interface CurrentStatusData {
  todayValue: number; // e.g., 350
  todayUnit: string; // e.g., 'Tn'
  silos: number; // e.g., 90 (para 90%)
  compliance: number; // e.g., 90 (para 90%)
  trucks: number; // e.g., 25
}

interface NextShipData {
  ea: string; // Formato 'YYYY-MM-DD' para la fecha estimada de llegada
  tons: number; // e.g., 6500
  stockoutRisk: number; // e.g., 60 (para 60%)
}

interface CurrentMonthData {
  currentTons: number; // e.g., 12300
  totalProjectionTons: number; // e.g., 18700
}

// Interfaz para el conjunto de indicadores de una región
interface RegionData {
  id: number; // Añadido para identificar la isla (101, 102, 103, 104)
  name: string;
  currentStatus: CurrentStatusData;
  nextShip: NextShipData;
  currentMonth: CurrentMonthData;
}

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe], // Añade DatePipe a imports
  templateUrl: './vista1.component.html',
  styleUrl: './vista1.component.css'
})
export class Vista1Component implements OnInit {

  regionsData: RegionData[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadRegionsIndicatorData();
  }

  private loadRegionsIndicatorData(): void {
    // Generar la fecha actual para los datos dummy de "Today" si es necesario
    const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    this.regionsData = [
      {
        id: 100, // ID inventado para Antilles, ya que no es una isla individual
        name: 'Antilles',
        currentStatus: { todayValue: 350, todayUnit: 'Tn', silos: 90, compliance: 90, trucks: 25 },
        nextShip: { ea: '2025-07-30', tons: 5000, stockoutRisk: 10 },
        currentMonth: { currentTons: 9200, totalProjectionTons: 10000 }
      },
      {
        id: 101,
        name: 'Saint Maarteen',
        currentStatus: { todayValue: 850, todayUnit: 'Tn', silos: 85, compliance: 80, trucks: 18 },
        nextShip: { ea: '2025-07-28', tons: 3200, stockoutRisk: 15 },
        currentMonth: { currentTons: 7800, totalProjectionTons: 10000 }
      },
      {
        id: 102,
        name: 'Saint Thomas',
        currentStatus: { todayValue: 1800, todayUnit: 'Tn', silos: 95, compliance: 92, trucks: 30 },
        nextShip: { ea: '2025-07-27', tons: 6500, stockoutRisk: 5 },
        currentMonth: { currentTons: 9500, totalProjectionTons: 10000 }
      },
      {
        id: 103,
        name: 'Antigua',
        currentStatus: { todayValue: 600, todayUnit: 'Tn', silos: 88, compliance: 87, trucks: 20 },
        nextShip: { ea: '2025-08-01', tons: 2100, stockoutRisk: 25 },
        currentMonth: { currentTons: 8500, totalProjectionTons: 10000 }
      },
      {
        id: 104,
        name: 'Dominica',
        currentStatus: { todayValue: 450, todayUnit: 'Tn', silos: 75, compliance: 70, trucks: 10 },
        nextShip: { ea: '2025-08-02', tons: 1500, stockoutRisk: 35 },
        currentMonth: { currentTons: 7000, totalProjectionTons: 10000 }
      }
    ];
  }

  // Navegar a la ruta base de la región. El enrutamiento anidado se encargará de la sub-vista predeterminada.
  selectRegion(regionName: string): void {
    console.log(`Región seleccionada: ${regionName}`);
    // Convierte el nombre de la región a un formato de ruta (ej. "Saint Maarteen" -> "saint-maarteen")
    const routePath = regionName.toLowerCase().replace(/\s/g, '-');
    this.router.navigate(['/', routePath]);
  }
}