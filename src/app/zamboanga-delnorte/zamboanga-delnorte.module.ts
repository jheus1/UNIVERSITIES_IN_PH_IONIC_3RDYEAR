import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZamboangaDelnortePageRoutingModule } from './zamboanga-delnorte-routing.module';

import { ZamboangaDelnortePage } from './zamboanga-delnorte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZamboangaDelnortePageRoutingModule
  ],
  declarations: [ZamboangaDelnortePage]
})
export class ZamboangaDelnortePageModule {}
