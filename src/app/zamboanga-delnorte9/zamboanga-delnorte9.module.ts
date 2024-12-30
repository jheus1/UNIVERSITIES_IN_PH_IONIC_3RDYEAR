import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnorte9PageRoutingModule } from './zamboanga-delnorte9-routing.module';

import { ZamboangaDelnorte9Page } from './zamboanga-delnorte9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnorte9PageRoutingModule
  ],
  declarations: [ZamboangaDelnorte9Page]
})
export class ZamboangaDelnorte9PageModule {}
