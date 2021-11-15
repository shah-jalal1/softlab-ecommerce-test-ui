import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogeComponent } from './components/ui/confirm-dialoge/confirm-dialoge.component';
import { SnackbarNotificationComponent } from './components/ui/snackbar-notification/snackbar-notification.component';
import { ConfirmDailogComponent } from './components/ui/confirm-dailog/confirm-dailog.component';
import {PipesModule} from './pipes/pipes.module';


@NgModule({
  declarations: [
    ConfirmDialogeComponent,
    SnackbarNotificationComponent,
    ConfirmDailogComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class SharedModule { }
