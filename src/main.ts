import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(HttpClientModule, RouterModule.forRoot(routes))]  // Dodanie HttpClientModule i RouterModule

})
  .catch((err) => console.error(err));
