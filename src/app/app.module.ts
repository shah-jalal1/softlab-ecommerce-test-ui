import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './admin/pages/pages.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { Header2Component } from './core/menu/header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AdminAuthComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }