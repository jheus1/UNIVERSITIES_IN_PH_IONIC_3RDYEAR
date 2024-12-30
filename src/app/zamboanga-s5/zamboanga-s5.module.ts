import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS5PageRoutingModule } from './zamboanga-s5-routing.module';

import { ZamboangaS5Page } from './zamboanga-s5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS5PageRoutingModule
  ],
  declarations: [ZamboangaS5Page]
})
export class ZamboangaS5PageModule {}
