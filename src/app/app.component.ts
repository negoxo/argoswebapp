import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus, AuthenticationResult } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Argos Web App';
  isLoggedIn = false;
  userName: string | undefined = '';

  isSidebarVisible = true;
  currentLocationName: string = 'Home';

  backendResponse: any = null;
  graphProfile: any = null;

  loadingBackend = false;
  loadingGraph = false;
  errorMessage: string | null = null;

  private readonly _destroying$ = new Subject<void>();

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        // Obtener la URL completa de navegación, no solo la del ActivatedRoute actual
        const url = event.urlAfterRedirects;
        // Dividir la URL por barras y tomar el primer segmento significativo después del '/'.
        // Esto manejará URLs como '/saint-maarteen' o '/saint-maarteen/total-sales'
        const segments = url.split('/').filter(segment => segment !== '');
        return segments.length > 0 ? segments[0] : '';
      }),
      takeUntil(this._destroying$)
    ).subscribe((path: string) => {
      this.updateLocationName(path);
    });

    // Para la carga inicial de la página
    const initialUrlSegments = this.router.url.split('/').filter(segment => segment !== '');
    const initialPath = initialUrlSegments.length > 0 ? initialUrlSegments[0] : '';
    this.updateLocationName(initialPath);
  }

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

  // Método para actualizar el nombre de la ubicación basado en la ruta URL
  private updateLocationName(path: string): void {
    // El 'path' ahora contendrá solo el primer segmento principal ('vista1', 'saint-maarteen', etc.)
    // La variable cleanPath es redundante pero la mantengo para evitar cambios masivos en la lógica de if/else if
    const cleanPath = path;

    console.log('Path final para updateLocationName:', cleanPath); // Para confirmar qué valor se está usando

    if (cleanPath === 'vista1' || cleanPath === '') { // Si es '' significa la raíz de la aplicación
      this.currentLocationName = 'Home';
    } else if (cleanPath === 'saint-maarteen') {
      this.currentLocationName = 'Saint Maarteen';
    } else if (cleanPath === 'saint-thomas') {
      this.currentLocationName = 'Saint Thomas';
    } else if (cleanPath === 'antigua') {
      this.currentLocationName = 'Antigua';
    } else if (cleanPath === 'dominica') {
      this.currentLocationName = 'Dominica';
    } else if (cleanPath === 'ai-suggestions') {
      this.currentLocationName = 'AI Suggestions';
    } else if (cleanPath === 'demand-projection') {
      this.currentLocationName = 'Demand Projection';
    } else if (cleanPath === 'notifications') {
      this.currentLocationName = 'Notifications';
    } else if (cleanPath === 'vista2') {
      this.currentLocationName = 'Vista 2';
    } else if (cleanPath === 'vista3') {
      this.currentLocationName = 'Vista 3';
    } else if (cleanPath === 'vista4') {
      this.currentLocationName = 'Vista 4';
    } else if (cleanPath === 'vista5') {
      this.currentLocationName = 'Vista 5';
    } else if (cleanPath === 'vista6') {
      this.currentLocationName = 'Vista 6';
    }
     else {
      this.currentLocationName = 'Unknown Location';
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}