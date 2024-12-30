import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS2PageRoutingModule } from './zamboanga-s2-routing.module';

import { ZamboangaS2Page } from './zamboanga-s2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS2PageRoutingModule
  ],
  declarations: [ZamboangaS2Page]
})
export class ZamboangaS2PageModule {}
