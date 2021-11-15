import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageFolderRoutingModule } from './image-folder-routing.module';
import { ImageFolderComponent } from './image-folder.component';
import { AddImageFolderComponent } from './add-image-folder/add-image-folder.component';


@NgModule({
  declarations: [
    ImageFolderComponent,
    AddImageFolderComponent
  ],
  imports: [
    CommonModule,
    ImageFolderRoutingModule
  ]
})
export class ImageFolderModule { }
