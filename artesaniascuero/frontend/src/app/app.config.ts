import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';  // ← Cambiar import
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),  
    provideHttpClient(),
    provideRouter(routes),
    FormsModule
  ]
};

