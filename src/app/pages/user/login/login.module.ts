import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {MaterialModule} from "../../../material/material.module";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
