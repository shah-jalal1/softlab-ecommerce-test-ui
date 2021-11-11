import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from "../../material/material.module";
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
