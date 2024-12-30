import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte7PageRoutingModule } from './zamboanga-delnorte7-routing.module';

import { ZamboangaDelnorte7Page } from './zamboanga-delnorte7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte7PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte7Page]
})
export class ZamboangaDelnorte7PageModule {}
