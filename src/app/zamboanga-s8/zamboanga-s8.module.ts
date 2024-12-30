import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS8PageRoutingModule } from './zamboanga-s8-routing.module';

import { ZamboangaS8Page } from './zamboanga-s8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS8PageRoutingModule
  ],
  declarations: [ZamboangaS8Page]
})
export class ZamboangaS8PageModule {}
