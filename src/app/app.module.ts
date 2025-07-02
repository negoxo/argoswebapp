// frontend/src/app/app.module.ts
// Módulo principal de la aplicación Angular.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importaciones de MSAL (Microsoft Authentication Library)
import { MsalModule, MsalRedirectComponent, MsalGuard, MsalInterceptor } from '@azure/msal-angular';
import { PublicClientApplication, InteractionType, BrowserCacheLocation } from '@azure/msal-browser';

import { environment } from '../environments/environment';

// Función para crear la configuración de MSAL
export function MSALInstanceFactory(): PublicClientApplication {
  return new PublicClientApplication({
    auth: environment.msalConfig.auth,
    cache: {
      cacheLocation: BrowserCacheLocation.SessionStorage, // VITE_CACHE_LOCATION
      storeAuthStateInCookie: false, // VITE_STORE_COOKE
    }
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot(MSALInstanceFactory(),
      {
        interactionType: InteractionType.Popup, // Usar Popup para una mejor UX
        authRequest: {
          scopes: ['user.read']
        }
      },
      {
        // Configuración del interceptor para añadir el token a las peticiones HTTP
        interactionType: InteractionType.Popup,
        protectedResourceMap: new Map([
            [environment.apiConfig.uri, environment.apiConfig.scopes],
            [environment.graphApiConfig.uri, environment.graphApiConfig.scopes]
        ])
      })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
