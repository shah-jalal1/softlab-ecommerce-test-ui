import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './admin/pages/pages.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { Header2Component } from './core/menu/header2/header2.component';
import { NgxSpinnerModule } from "ngx-spinner";

import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthUserInterceptor} from "./auth-interceptor/auth-user.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AdminAuthComponent,
    Header2Component,
    // NgxSpinnerModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthUserInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
