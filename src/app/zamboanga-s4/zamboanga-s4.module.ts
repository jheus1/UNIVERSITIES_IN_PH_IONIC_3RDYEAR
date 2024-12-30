import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS4PageRoutingModule } from './zamboanga-s4-routing.module';

import { ZamboangaS4Page } from './zamboanga-s4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS4PageRoutingModule
  ],
  declarations: [ZamboangaS4Page]
})
export class ZamboangaS4PageModule {}
