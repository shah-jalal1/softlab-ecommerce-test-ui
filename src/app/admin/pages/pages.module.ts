import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from "../../material/material.module";
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from "@angular/forms";
import { ImageGalleryDialogComponent } from './gallery/image-gallery-dialog/image-gallery-dialog.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxSpinnerModule} from "ngx-spinner";
import { UploadImageComponent } from './gallery/upload-image/upload-image.component';
import {NgxDropzoneModule} from "ngx-dropzone";


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    AddProductComponent,
    ProductsComponent,
    ImageGalleryDialogComponent,
    UploadImageComponent
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgxDropzoneModule
  ]
})
export class PagesModule { }
