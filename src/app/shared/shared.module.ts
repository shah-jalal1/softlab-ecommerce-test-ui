import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogeComponent } from './components/ui/confirm-dialoge/confirm-dialoge.component';
import { SnackbarNotificationComponent } from './components/ui/snackbar-notification/snackbar-notification.component';



@NgModule({
  declarations: [
    ConfirmDialogeComponent,
    SnackbarNotificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
