import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte1PageRoutingModule } from './zamboanga-delnorte1-routing.module';

import { ZamboangaDelnorte1Page } from './zamboanga-delnorte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte1PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte1Page]
})
export class ZamboangaDelnorte1PageModule {}
