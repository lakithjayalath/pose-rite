import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideClientHydration(withEventReplay()),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withHashLocation(), withComponentInputBinding()),
    importProvidersFrom(HttpClientModule),
    // interceptors
    // { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
};
