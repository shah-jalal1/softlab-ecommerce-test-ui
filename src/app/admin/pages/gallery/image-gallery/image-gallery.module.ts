import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageGalleryRoutingModule } from './image-gallery-routing.module';
import { ImageGalleryComponent } from './image-gallery.component';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
  declarations: [
    ImageGalleryComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    ImageGalleryRoutingModule
  ]
})
export class ImageGalleryModule { }
