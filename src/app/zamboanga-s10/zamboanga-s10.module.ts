import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS10PageRoutingModule } from './zamboanga-s10-routing.module';

import { ZamboangaS10Page } from './zamboanga-s10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS10PageRoutingModule
  ],
  declarations: [ZamboangaS10Page]
})
export class ZamboangaS10PageModule {}
