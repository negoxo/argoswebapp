import { Routes } from '@angular/router';

// Importaciones de componentes de vistas principales
import { Vista1Component } from './views/vista1/vista1.component';
import { DemandProjectionComponent } from './views/demand-projection/demand-projection.component';
import { AiSuggestionsComponent } from './views/ai-suggestions/ai-suggestions.component';
import { NotificationsComponent } from './views/notifications/notifications.component';

// Importaciones de los componentes de región
import { SaintMaarteenComponent } from './views/saint-maarteen/saint-maarteen.component';
import { SaintThomasComponent } from './views/saint-thomas/saint-thomas.component';
import { AntiguaComponent } from './views/antigua/antigua.component';
import { DominicaComponent } from './views/dominica/dominica.component';

// Importaciones de los componentes de las vistas comunes (Vista 2 a Vista 6)
import { Vista2Component } from './views/vista2/vista2.component';
import { Vista3Component } from './views/vista3/vista3.component';
import { Vista4Component } from './views/vista4/vista4.component';
import { Vista5Component } from './views/vista5/vista5.component';
import { Vista6Component } from './views/vista6/vista6.component';

export const routes: Routes = [
  // Redirige la ruta raíz a 'vista1' para que la aplicación siempre cargue allí
  { path: '', redirectTo: 'vista1', pathMatch: 'full' },
  { path: 'vista1', component: Vista1Component },

  // Rutas existentes de nivel superior
  { path: 'demand-projection', component: DemandProjectionComponent },
  { path: 'ai-suggestions', component: AiSuggestionsComponent },
  { path: 'notifications', component: NotificationsComponent },

  // Rutas para las vistas de región con sub-rutas para las vistas comunes
  // Cada componente de región actúa como un contenedor para sus sub-vistas
  {
    path: 'saint-maarteen',
    component: SaintMaarteenComponent, // El componente host para las sub-vistas de Saint Maarteen
    children: [
      { path: '', redirectTo: 'total-sales', pathMatch: 'full' }, // Redirige a la primera sub-vista por defecto
      { path: 'total-sales', component: Vista2Component },
      { path: 'inventory', component: Vista3Component },
      { path: 'cumulated-demurrages', component: Vista4Component },
      { path: 'out-of-service-equipment', component: Vista5Component },
      { path: 'field-staff', component: Vista6Component },
    ]
  },
  {
    path: 'saint-thomas',
    component: SaintThomasComponent,
    children: [
      { path: '', redirectTo: 'total-sales', pathMatch: 'full' },
      { path: 'total-sales', component: Vista2Component },
      { path: 'inventory', component: Vista3Component },
      { path: 'cumulated-demurrages', component: Vista4Component },
      { path: 'out-of-service-equipment', component: Vista5Component },
      { path: 'field-staff', component: Vista6Component },
    ]
  },
  {
    path: 'antigua',
    component: AntiguaComponent,
    children: [
      { path: '', redirectTo: 'total-sales', pathMatch: 'full' },
      { path: 'total-sales', component: Vista2Component },
      { path: 'inventory', component: Vista3Component },
      { path: 'cumulated-demurrages', component: Vista4Component },
      { path: 'out-of-service-equipment', component: Vista5Component },
      { path: 'field-staff', component: Vista6Component },
    ]
  },
  {
    path: 'dominica',
    component: DominicaComponent,
    children: [
      { path: '', redirectTo: 'total-sales', pathMatch: 'full' },
      { path: 'total-sales', component: Vista2Component },
      { path: 'inventory', component: Vista3Component },
      { path: 'cumulated-demurrages', component: Vista4Component },
      { path: 'out-of-service-equipment', component: Vista5Component },
      { path: 'field-staff', component: Vista6Component },
    ]
  },
  // Opcional: una ruta 'catch-all' para páginas no encontradas que redirige a vista1
  // { path: '**', redirectTo: 'vista1' }
];