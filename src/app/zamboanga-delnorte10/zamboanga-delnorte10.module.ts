import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte10PageRoutingModule } from './zamboanga-delnorte10-routing.module';

import { ZamboangaDelnorte10Page } from './zamboanga-delnorte10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte10PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte10Page]
})
export class ZamboangaDelnorte10PageModule {}
