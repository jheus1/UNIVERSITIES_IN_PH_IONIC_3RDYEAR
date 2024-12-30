import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte4PageRoutingModule } from './zamboanga-delnorte4-routing.module';

import { ZamboangaDelnorte4Page } from './zamboanga-delnorte4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte4PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte4Page]
})
export class ZamboangaDelnorte4PageModule {}
