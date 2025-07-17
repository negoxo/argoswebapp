import { Routes } from '@angular/router';

import { Vista1Component } from './views/vista1/vista1.component';


// ¡NUEVOS COMPONENTES! Asegúrate de importarlos
import { DemandProjectionComponent } from './views/demand-projection/demand-projection.component';
import { AiSuggestionsComponent } from './views/ai-suggestions/ai-suggestions.component';
import { NotificationsComponent } from './views/notifications/notifications.component';


export const routes: Routes = [
  { path: '', redirectTo: 'vista1', pathMatch: 'full' },
  
  { path: 'vista1', component: Vista1Component },
  
  // ¡NUEVAS RUTAS!
  { path: 'demand-projection', component: DemandProjectionComponent },
  { path: 'ai-suggestions', component: AiSuggestionsComponent },
  { path: 'notifications', component: NotificationsComponent },

  // Opcional: una ruta 'catch-all' para páginas no encontradas
  // { path: '**', redirectTo: 'vista1' } 
];