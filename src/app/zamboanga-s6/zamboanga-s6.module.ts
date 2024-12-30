import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS6PageRoutingModule } from './zamboanga-s6-routing.module';

import { ZamboangaS6Page } from './zamboanga-s6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS6PageRoutingModule
  ],
  declarations: [ZamboangaS6Page]
})
export class ZamboangaS6PageModule {}
