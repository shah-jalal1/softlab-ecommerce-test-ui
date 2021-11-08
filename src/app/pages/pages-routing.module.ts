import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: {preload: true, delay: false}
      },
  {
    path: 'login',
    // canActivate: [UserAuthStateGuard],
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule),
    data: {preload: true, delay: false}
  },
  {
    path: 'registration',
    // canActivate: [UserAuthStateGuard],
    loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule),
    data: {preload: false, delay: false}
  }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
