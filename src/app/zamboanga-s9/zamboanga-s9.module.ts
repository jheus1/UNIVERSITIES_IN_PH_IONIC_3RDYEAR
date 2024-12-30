import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaS9PageRoutingModule } from './zamboanga-s9-routing.module';

import { ZamboangaS9Page } from './zamboanga-s9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaS9PageRoutingModule
  ],
  declarations: [ZamboangaS9Page]
})
export class ZamboangaS9PageModule {}
