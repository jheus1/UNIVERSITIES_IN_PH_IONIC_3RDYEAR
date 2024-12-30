import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte2PageRoutingModule } from './zamboanga-delnorte2-routing.module';

import { ZamboangaDelnorte2Page } from './zamboanga-delnorte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte2PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte2Page]
})
export class ZamboangaDelnorte2PageModule {}
