import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './security/auth.interceptor';

export const appConfig: ApplicationConfig = { //setto servizi che agiranno sulla mia applicazione
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), //configuriamo il routing
    provideHttpClient(withInterceptors([authInterceptor]))] //la app deve fare le chiamate http verso un backend
    //prima non gli passavamo nulla, ora vogliamo assicurarci che ogni richiesta venga intercettata e modificata come voglio con gli 
    //intercettatori
};
