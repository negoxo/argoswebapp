import { Routes } from '@angular/router';

import { Vista1Component } from './views/vista1/vista1.component';


// ¡NUEVOS COMPONENTES! Asegúrate de importarlos
import { DemandProjectionComponent } from './views/demand-projection/demand-projection.component';
import { AiSuggestionsComponent } from './views/ai-suggestions/ai-suggestions.component';
import { NotificationsComponent } from './views/notifications/notifications.component';
// Importaciones de los nuevos componentes de región
import { SaintMaarteenComponent } from './views/saint-maarteen/saint-maarteen.component';
import { SaintThomasComponent } from './views/saint-thomas/saint-thomas.component';
import { AntiguaComponent } from './views/antigua/antigua.component';
import { DominicaComponent } from './views/dominica/dominica.component';

export const routes: Routes = [
  { path: '', redirectTo: 'vista1', pathMatch: 'full' },
  
  { path: 'vista1', component: Vista1Component },
  
  // ¡NUEVAS RUTAS!
  { path: 'demand-projection', component: DemandProjectionComponent },
  { path: 'ai-suggestions', component: AiSuggestionsComponent },
  { path: 'notifications', component: NotificationsComponent },
  // Rutas para las vistas de región
  { path: 'saint-maarteen', component: SaintMaarteenComponent },
  { path: 'saint-thomas', component: SaintThomasComponent },
  { path: 'antigua', component: AntiguaComponent },
  { path: 'dominica', component: DominicaComponent },

  // Opcional: una ruta 'catch-all' para páginas no encontradas
  // { path: '**', redirectTo: 'vista1' } 
];