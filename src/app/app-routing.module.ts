import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import {environment} from "../environments/environment";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  {
    path: environment.adminBaseUrl,
    // canActivate: [AdminAuthGuard],
    loadChildren: () => import('./admin/pages/pages.module').then(m => m.PagesModule)
  }
//   {
//     path: '',
//      component: PagesModule
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
