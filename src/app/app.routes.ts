import { Routes } from '@angular/router';

// Importa los componentes que acabas de crear
import { Vista1Component } from './views/vista1/vista1.component';
import { Vista2Component } from './views/vista2/vista2.component';
import { Vista3Component } from './views/vista3/vista3.component';
import { Vista4Component } from './views/vista4/vista4.component';
import { Vista5Component } from './views/vista5/vista5.component';
import { Vista6Component } from './views/vista6/vista6.component';

export const routes: Routes = [
  // Redirección por defecto: si no hay ruta, te lleva a 'vista1'
  { path: '', redirectTo: 'vista1', pathMatch: 'full' },
  
  // Define la ruta para cada vista
  { path: 'vista1', component: Vista1Component },
  { path: 'vista2', component: Vista2Component },
  { path: 'vista3', component: Vista3Component },
  { path: 'vista4', component: Vista4Component },
  { path: 'vista5', component: Vista5Component },
  { path: 'vista6', component: Vista6Component },

  // Opcional: una ruta 'catch-all' para páginas no encontradas
  // { path: '**', redirectTo: 'vista1' } 
];