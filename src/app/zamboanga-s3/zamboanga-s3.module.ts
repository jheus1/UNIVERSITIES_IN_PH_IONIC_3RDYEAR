import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS3PageRoutingModule } from './zamboanga-s3-routing.module';

import { ZamboangaS3Page } from './zamboanga-s3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS3PageRoutingModule
  ],
  declarations: [ZamboangaS3Page]
})
export class ZamboangaS3PageModule {}
