import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS7PageRoutingModule } from './zamboanga-s7-routing.module';

import { ZamboangaS7Page } from './zamboanga-s7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS7PageRoutingModule
  ],
  declarations: [ZamboangaS7Page]
})
export class ZamboangaS7PageModule {}
