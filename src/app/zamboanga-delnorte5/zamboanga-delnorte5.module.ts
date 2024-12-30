import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte5PageRoutingModule } from './zamboanga-delnorte5-routing.module';

import { ZamboangaDelnorte5Page } from './zamboanga-delnorte5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte5PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte5Page]
})
export class ZamboangaDelnorte5PageModule {}
