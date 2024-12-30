import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte6PageRoutingModule } from './zamboanga-delnorte6-routing.module';

import { ZamboangaDelnorte6Page } from './zamboanga-delnorte6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte6PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte6Page]
})
export class ZamboangaDelnorte6PageModule {}
