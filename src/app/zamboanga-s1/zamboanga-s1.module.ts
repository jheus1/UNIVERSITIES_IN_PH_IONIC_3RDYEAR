import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS1PageRoutingModule } from './zamboanga-s1-routing.module';

import { ZamboangaS1Page } from './zamboanga-s1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS1PageRoutingModule
  ],
  declarations: [ZamboangaS1Page]
})
export class ZamboangaS1PageModule {}
