// frontend/src/app/app.component.ts
// Lógica del componente principal.

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
// 1. Importa RouterOutlet y RouterLink para la navegación
import { RouterOutlet, RouterLink } from '@angular/router'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus, AuthenticationResult } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterOutlet, // <-- 2. Añade RouterOutlet aquí
    RouterLink    // <-- 3. Añade RouterLink aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Argos Web App'; // Título actualizado
  isLoggedIn = false;
  userName: string | undefined = '';
  
  // 4. Variable para controlar la visibilidad del sidebar
  isSidebarVisible = true; 

  backendResponse: any = null;
  graphProfile: any = null;
  
  loadingBackend = false;
  loadingGraph = false;
  errorMessage: string | null = null;

  private readonly _destroying$ = new Subject<void>();

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.checkAccount();
      });
  }

  // 5. Función para mostrar/ocultar el sidebar
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  checkAccount() {
    const activeAccount = this.authService.instance.getActiveAccount();
    this.isLoggedIn = !!activeAccount;
    if (this.isLoggedIn && activeAccount) {
        this.userName = activeAccount.name;
    }
  }

  login() {
    this.authService.loginPopup()
      .subscribe({
        next: (result: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(result.account);
          this.checkAccount();
        },
        error: (error: any) => console.log(error)
      });
  }

  logout() {
    this.authService.logoutPopup({ mainWindowRedirectUri: "/" });
  }

  // ... (los métodos getDataFromBackend y getProfileFromGraph se mantienen igual)
  getDataFromBackend() {
    this.loadingBackend = true;
    this.backendResponse = null;
    this.errorMessage = null;

    this.http.get(environment.apiConfig.uri).subscribe({
      next: (data) => {
        this.backendResponse = data;
        this.loadingBackend = false;
      },
      error: (err) => {
        this.errorMessage = `Error al contactar el backend Flask: ${err.message}`;
        console.error(err);
        this.loadingBackend = false;
      }
    });
  }

  getProfileFromGraph() {
    this.loadingGraph = true;
    this.graphProfile = null;
    this.errorMessage = null;

    this.http.get(environment.graphApiConfig.uri).subscribe({
      next: (profile) => {
        this.graphProfile = profile;
        this.loadingGraph = false;
      },
      error: (err) => {
        this.errorMessage = `Error al contactar Microsoft Graph API: ${err.message}`;
        console.error(err);
        this.loadingGraph = false;
      }
    });
  }


  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}