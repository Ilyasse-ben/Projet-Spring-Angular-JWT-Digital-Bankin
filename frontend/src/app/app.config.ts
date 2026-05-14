import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppHttpInterceptor } from './inter/app-http-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [

      provideHttpClient(withInterceptorsFromDi()),
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AppHttpInterceptor,
        multi: true
      },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
