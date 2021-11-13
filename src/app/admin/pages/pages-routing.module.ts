import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";
import {CheckAuthAccessGuard} from "../../auth-guard/check-auth-access.guard";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'add-product',
        loadChildren: () => import('./products/add-product/add-product.module').then(m => m.AddProductModule),
        canActivate: [CheckAuthAccessGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
