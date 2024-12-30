import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte8PageRoutingModule } from './zamboanga-delnorte8-routing.module';

import { ZamboangaDelnorte8Page } from './zamboanga-delnorte8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte8PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte8Page]
})
export class ZamboangaDelnorte8PageModule {}
