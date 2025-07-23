import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 
import { 
  MsalModule, 
  MsalGuard, 
  MsalInterceptor, 
  MsalService, 
  MsalBroadcastService, 
  MSAL_INSTANCE // <-- 1. Importar MSAL_INSTANCE
} from '@azure/msal-angular';
import { PublicClientApplication, InteractionType, BrowserCacheLocation, LogLevel } from '@azure/msal-browser';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

// Función de fábrica para la instancia de MSAL (sin cambios)
export function MSALInstanceFactory(): PublicClientApplication {
  return new PublicClientApplication({
    auth: environment.msalConfig.auth,
    cache: {
      cacheLocation: BrowserCacheLocation.SessionStorage,
      storeAuthStateInCookie: false,
    },
    system: {
      loggerOptions: {
        logLevel: LogLevel.Verbose,
        loggerCallback: (level, message, containsPii) => {
          if (containsPii) { return; }
          switch (level) {
            case LogLevel.Error: console.error(message); return;
            case LogLevel.Info: console.info(message); return;
            case LogLevel.Verbose: console.debug(message); return;
            case LogLevel.Warning: console.warn(message); return;
          }
        }
      }
    }
  });
}

// Función de fábrica para el inicializador de la aplicación
export function MSALAppInitializerFactory(msalService: MsalService): () => Promise<void> {
  return () => msalService.instance.initialize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MsalInterceptor, 
      multi: true 
    },
    importProvidersFrom(MsalModule),
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    // 2. Añade el proveedor para la INSTANCIA de MSAL
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    // 3. El inicializador que se asegura de que la instancia esté lista
    {
      provide: APP_INITIALIZER,
      useFactory: MSALAppInitializerFactory,
      deps: [MsalService],
      multi: true
    }
  ]
};